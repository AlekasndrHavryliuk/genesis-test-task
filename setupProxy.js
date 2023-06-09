const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.wisey.app',
      changeOrigin: true,
      secure: false,
    })
  );
};
