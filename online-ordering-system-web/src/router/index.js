import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/Layout'

Vue.use(Router)

const _import = require('./_import_' + process.env.NODE_ENV)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Signin',
      component: _import('Login/Signin')
    },
    {
      path: '/register',
      name: 'Signup',
      component: _import('Login/Signup')
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: _import('Home')
        },
        {
          path: 'orderList',
          name: 'OrderList',
          component: _import('OrderList')
        },
        {
          path: 'message',
          name: 'Message',
          component: _import('Message')
        },
        {
          path: 'mine',
          name: 'Mine',
          component: _import('Mine')
        },
        {
          path: 'dishes',
          name: 'Dishes',
          component: _import('Dishes')
        },
        {
          path: '/shopCar',
          name: 'ShopCar',
          component: _import('ShopCar')
        }

      ]
    }
  ]
})
