import axios from 'axios'
import qs from 'qs'
// axios.interceptors.response.use(res=>{
//     console.log(res.config.url)
//     console.log(res)
// })
const url = '/api'
export const requestCate = (params) => {
    return axios({
        url: url + '/api/getcate',
        method: 'get',
        params: params
    })
}
export const requestItem = (params) => {
    return axios({
        url: url + '/api/getindexgoods',
        method: 'get',
        params:params
    })
}