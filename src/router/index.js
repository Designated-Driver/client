import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Card from '@/CardRegister'
import NewCard from '@/AddCard'
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
      path: '/addCard',
      name: 'Add new Card to vault',
      component: NewCard
    },    
    {
      path: '/card',
      name: 'Add Card Info',
      component: Card
    }
  ]
})
