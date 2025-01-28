const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware('/api1', {
      target: 'https://api.github.com',
      changeOrigin: true,
      pathRewrite: { '^/api1': '' }
    })
  )
}
