import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Submit from '@/components/Submit'
import Ccinfo from '@/components/Ccinfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/submit',
      name: 'Submit',
      component: Submit
    },
    {
      path: '/ccinfo',
      name: 'cinfo',
      component: Ccinfo
    }
  ]
})
