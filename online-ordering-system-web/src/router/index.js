import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout/Layout.vue'
import Signin from '../views/Login/Signin.vue'
import Signup from '../views/Login/Signup.vue'
import Home from '../views/Home'
import OrderList from '../views/OrderList'
import Message from '../views/Message'
import Dishes from '../views/Dishes'
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
          path: 'orderList',
          name: 'OrderList',
          component: OrderList
        },
        {
          path: 'message',
          name: 'Message',
          component: Message
        },
        {
          path: 'mine',
          name: 'Mine',
          component: Mine
        },
        {
          path: 'dishes',
          name: 'Dishes',
          component: Dishes
        }

      ]
    }
  ]
})
