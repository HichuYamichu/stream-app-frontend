import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;
console.log(process.env);
if (process.env.VUE_APP_NGINX_PROXY) {
  axios.defaults.baseURL = process.env.BASE_URL;
} else if (process.env.NODE_ENV === 'development') {
  // axios.defaults.baseURL = 'http://localhost:3001';
}

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
