import api from './api'
import http from './http'

export default {
  detail (id) {
    return http.get(api.user.detail(id))
  }
}
