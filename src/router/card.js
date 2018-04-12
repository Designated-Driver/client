import Vue from 'vue'
import Router from 'vue-router'
import Card from '@/components/Toolbar/RiderRquest/Card'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/card',
      name: 'Add Card Info',
      component: Card
    }
  ]
})
