import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'

axios.defaults.headers.common['token'] = localStorage.getItem("token")
axios.defaults.baseURL = "https://api.katehq.com"
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
