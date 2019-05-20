// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'



Vue.config.productionTip = false
// Vue.use(VueResource)
Vue.use(VueAxios,axios)  //Vue.use(VueAxios,axios)这种写法，要把Vue.use(VueAxios,axios)注释掉，vue-resource已经很少用了。
// Vue.use(axios)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  // VueResource,
  // axios,
  // VueAxios,
  components: { index },
  template: '<index/>'
})
