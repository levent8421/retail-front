import api from './api'
import http from './http'

export default {
  all (page) {
    return http.get(api.commodity.all, {page, rows: 10})
  }
}
