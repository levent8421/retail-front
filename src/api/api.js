const baseUrl = process.env.BASE_API + '/api'
const apiUrl = {
  commodity: {
    all: baseUrl + '/commodity/all',
    detail: baseUrl + '/commodity/'
  },
  user: {
    detail (id) {
      return baseUrl + '/user/' + id + '/detail'
    },
    me () {
      return baseUrl + '/open/user/me'
    }
  },
  wx: {
    jsSdkParam () {
      return baseUrl + '/open/wx/jsapi-config'
    }
  }
}
export default apiUrl
