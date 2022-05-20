const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
    //   target: 'http://localhost:5000',
    target:"https://express-out.herokuapp.com/",
      // target:'http://127.0.0.1:5000',
      changeOrigin: true,
    })
  );
};