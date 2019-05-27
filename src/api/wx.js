import http from './http'
import api from './api'

export default {
  configParam (url) {
    return http.post(api.wx.jsSdkParam(), {url})
  }
}
