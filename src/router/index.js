import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Home0 from '@/components/Home0'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'Home0',
      component: Home0
    }
  ]
})
