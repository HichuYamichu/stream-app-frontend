module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        ws: true,
        secure: false
      }
    }
  },
  publicPath: process.env.VUE_APP_NGINX_PROXY ? process.env.VUE_APP_NGINX_PROXY : ''
};
