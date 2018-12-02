import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import MyBilaxs from './views/MyBilaxs.vue'
import Bilax from './views/Bilax.vue'
import Analisis from './views/Analisis.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/settings',
      name: 'settings',
      component: About
    },
    {
      path: '/mybilaxs',
      name: 'mybilaxs',
      component: MyBilaxs
    },
    {
      path: '/bilax',
      name: 'bilax',
      component: Bilax
    },
    {
      path: '/analisis',
      name: 'analisis',
      component: Analisis
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }

  ]
})
