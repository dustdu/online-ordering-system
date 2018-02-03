import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout'
import Signin from '../views/Login/Signin.vue'
import Signup from '../views/Login/Signup.vue'
import Home from '../views/Home'
import OrderList from '../views/OrderList'
import Mine from '../views/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/register',
      name: 'Signup',
      component: Signup
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
          component: Home
        },
        {
          path: 'OrderList',
          name: 'OrderList',
          component: OrderList
        },
        {
          path: 'mine',
          name: 'Mine',
          component: Mine
        }

      ]
    }
  ]
})
