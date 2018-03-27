// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import { getToken, getUserInfo } from './utils/cookies'
import { ToastPlugin } from 'vux'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
import VueSocketio from 'vue-socket.io'

Vue.use(VueSocketio, 'http://localhost:3000')

FastClick.attach(document.body)
Vue.use(ToastPlugin)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login' || to.path === '/register') {
      next({ path: '/' })
    } else {
      if (store.getters.userInfo.length === 0) {
        const userInfo = JSON.parse(getUserInfo())
        store.commit('userInfo', userInfo)
        next()
      } else {
        next()
      }
    }
  } else {
    if (to.path === '/login' || to.path === '/register') {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
