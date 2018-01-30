import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout'
import Login from '../views/Login'
import Dashboard from '../views/DataAnalysis/Dashboard.vue'
import DishesList from '../views/Dishes/DishesList.vue'
import AddDishes from '../views/Dishes/AddDishes.vue'
import OrderList from '../views/Order/OrderList.vue'

Vue.use(Router)

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
          component: Dashboard
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
          component: DishesList
        },
        {
          path: 'add',
          name: 'AddDishes',
          component: AddDishes
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
          component: OrderList
        }
      ]
    }
  ]
})
