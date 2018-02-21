// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { createStore } from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
const store = createStore()
const VueTouch = require('vue-touch')

Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDDPRYo6aPBCYretfWzTaEliHbQu5VErMw'
  }
})
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
