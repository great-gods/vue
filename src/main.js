import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import localJa from 'element-plus/dist/locale/ja.mjs'
import '@/assets/css/common/global.scss'
import datas from '@/utils/common-data.js'

/* import font awesome  */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileLines, faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faHeart as farHeart, faBell as farBell, faCircleDown } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFileLines, faDownload, faEnvelope)

/* constant */
app.config.globalProperties.$data = datas

createApp(App)
   .use(router)
   .use(ElementPlus, {locale: localJa})
   .component('font-awesome-icon', FontAwesomeIcon)
   .mount('#app')