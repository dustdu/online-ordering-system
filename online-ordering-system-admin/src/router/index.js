import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout'
import Login from '../views/Login'

Vue.use(Router)

const _import = require('./_import_' + process.env.NODE_ENV)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'DataAnalysis',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: _import('DataAnalysis/Dashboard')
        }
      ]
    },
    {
      path: '/dishes',
      name: 'Dishes',
      component: Layout,
      redirect: '/dishes/list',
      children: [
        {
          path: 'list',
          name: 'DishesList',
          component: _import('Dishes/DishesList')
        },
        {
          path: 'add',
          name: 'AddDishes',
          component: _import('Dishes/AddDishes')
        },
        {
          path: 'edit/:dishesId',
          name: 'EditDishes',
          component: _import('Dishes/AddDishes')
        }
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: Layout,
      redirect: '/order/list',
      children: [
        {
          path: 'list',
          name: 'OrderList',
          component: _import('Order/OrderList')
        },
        {
          path: 'detail/:orderId',
          name: 'OrderDetail',
          component: _import('Order/OrderDetail')
        }
      ]
    },
    {
      path: '/message',
      name: 'message',
      component: Layout,
      redirect: '/message/list',
      children: [
        {
          path: 'list',
          name: 'MessageList',
          component: _import('Message/MessageList')
        }
      ]
    },
    {
      path: '/users',
      name: 'users',
      component: Layout,
      redirect: '/users/list',
      children: [
        {
          path: 'list',
          name: 'UsersList',
          component: _import('Users/UserList')
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Layout,
      redirect: '/admin/add',
      children: [
        {
          path: 'add',
          name: 'AddAdmin',
          component: _import('Admin/AddAdmin')
        }
      ]
    }
  ]
})
