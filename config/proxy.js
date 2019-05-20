module.exports = {
  proxy: {
    '/api': {
      target: 'http://api.zkh.com:8003',
      secure: false,
      changeOrigin: true
    }
  }
}
