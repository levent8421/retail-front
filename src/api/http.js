import axios from 'axios'
import {Indicator, Toast} from 'mint-ui'

axios.defaults.timeout = 5000
axios.interceptors.request.use(config => {
  Indicator.open('加载中')
  return config
}, error => {
  Indicator.open(error)
})
axios.interceptors.response.use(response => {
  if (response.status !== 200) {
    Toast('请求失败：' + response.status)
  }
  if (response.data.code !== 200) {
    Toast(response.data.msg)
  }
  Indicator.close()
  return response
}, error => {
  Indicator.open(error)
})
export default {
  get (url, param) {
    return axios.get(url, {
      params: param
    })
  },
  post (url, data) {
    return axios.post(url, data)
  }
}
