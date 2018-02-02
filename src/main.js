// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { createStore } from './store'
const store = createStore()
var VueTouch = require('vue-touch')

Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
