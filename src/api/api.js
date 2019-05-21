const baseUrl = '/api'
const apiUrl = {
  commodity: {
    all: baseUrl + '/commodity/all',
    detail: baseUrl + '/commodity/'
  },
  user: {
    detail (id) {
      return baseUrl + '/user/' + id + '/detail'
    }
  }
}
export default apiUrl
