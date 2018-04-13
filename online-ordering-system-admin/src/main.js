// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from './util/cookies'
import VCharts from 'v-charts'
import IconSvg from '@/components/Icon-svg/index'
import VueSocketio from 'vue-socket.io'
import axios from 'axios'

Vue.use(VueSocketio, 'http://localhost:3000')
Vue.use(ElementUI, { size: 'small' })
Vue.use(VCharts)
Vue.component('icon-svg', IconSvg)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // if (store.getters.userInfo.length === 0) {
      //   const userInfo = JSON.parse(getUserInfo())
      //   store.commit('userInfo', userInfo)
      //   next()
      // } else {
      //   next()
      // }
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
