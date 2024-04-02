import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
/* カプセル化 Axios */
const http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params: params })
        .then((res) => {
           resolve(res.data)
        })
         .catch((err) => {
            reject(err.data)
       })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
       })
    })
  },
}

const httpApi = {
  post(url, params){
    return http.post(url, params)
  },
  get(url, params) {
    return http.get(url, params)
  }
}
export default httpApi
