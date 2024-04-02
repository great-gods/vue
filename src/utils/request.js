import axios from 'axios' // axiosの導入
import { ElMessage, ElMessageBox } from 'element-plus'
import { useUserStore } from '@/merchants/modules/user'
import { emitter } from './bus'
import router from '@/router/index'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_PATH + import.meta.env.VITE_BASE_API,
    timeout: 5000
})
let acitveAxios = 0
let timer
const showLoading = () => {
    acitveAxios++
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        if (acitveAxios > 0) {
            emitter.emit('showLoading')
        }
    }, 400)
}

const closeLoading = () => {
    acitveAxios--
    if (acitveAxios <= 0) {
        clearTimeout(timer)
        emitter.emit('closeLoading')
    }
}
// http request インターセプター
service.interceptors.request.use(
    config => {
        if (!config.donNotShowLoading) {
            showLoading()
        }
        const userStore = useUserStore()
        config.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userStore.token,
            ...config.headers
        }
        return config
    },
    error => {
        if (!error.config.donNotShowLoading) {
            closeLoading()
        }
        ElMessage({
            showClose: true,
            message: error,
            type: 'error'
        })
        return error
    }
)

// http response インターセプター
service.interceptors.response.use(
    response => {
        const userStore = useUserStore()
        console.log(response.data)
        if (!response.config.donNotShowLoading) {
            closeLoading()
        }

        if (response.data.code === 200 || response.headers.success === 'true') {
            if (response.headers.msg) {
                response.data.msg = decodeURI(response.headers.msg)
            }
            return response.data
        } else {
            // tokenの有効期限が切れると、ログイン画面に遷移する
            if (response.data.code === 401) {
                sessionStorage.clear()
                localStorage.clear(); // ブラウザのキャッシュをすべてクリアする
                window.location.href = '/login'; // ログイン画面に遷移する
            }
            // ダウンロード系はエラー判断しない
            if (response.data.type !== 'application/octet-stream') {
                ElMessage({
                    showClose: true,
                    message: response.data.message || decodeURI(response.headers.msg),
                    type: 'error'
                })
            }
            if (response.data.data && response.data.data.reload) {
                userStore.token = ''
                localStorage.clear()
                router.push({ name: 'Login', replace: true })
            }
            return response.data.message ? response.data : response
        }
    },
    error => {
        if (!error.config.donNotShowLoading) {
            closeLoading()
        }

        if (!error.response) {
            ElMessageBox.confirm(`
        <p>リクエストエラーが検出されました</p>
        <p>${error}</p>
        `, 'リクエストエラー', {
                dangerouslyUseHTMLString: true,
                distinguishCancelAndClose: true,
                confirmButtonText: '後で再試行',
                cancelButtonText: 'キャンセル'
            })
            return
        }

        switch (error.response.status) {
            case 500:
                ElMessageBox.confirm(`
        <p>インタフェースエラーが検出されました ${error}</p>
        <p>エラーコード<span style="color:red"> 500 </span></p>
        `, 'インタフェースエラー', {
                    dangerouslyUseHTMLString: true,
                    distinguishCancelAndClose: true,
                    confirmButtonText: 'キャッシュのクリーンアップ',
                    cancelButtonText: 'キャンセル'
                })
                    .then(() => {
                        const userStore = useUserStore()
                        userStore.token = ''
                        localStorage.clear()
                        router.push({ name: 'Login', replace: true })
                    })
                break
            case 404:
                ElMessageBox.confirm(`
          <p>インタフェースエラーが検出されました ${error}</p>
          <p>エラーコード<span style="color:red"> 404 </span></p>
          `, 'インタフェースエラー', {
                    dangerouslyUseHTMLString: true,
                    distinguishCancelAndClose: true,
                    confirmButtonText: 'わかりました',
                    cancelButtonText: 'キャンセル'
                })
                break
        }

        return error
    }
)
export default service
