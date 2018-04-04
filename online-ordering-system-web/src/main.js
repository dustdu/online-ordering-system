// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import { getToken, getUserInfo } from './utils/cookies'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
import VueSocketio from 'vue-socket.io'
import { DatetimePlugin, CloseDialogsPlugin, BusPlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin, TransferDom } from 'vux'

Vue.use(VueSocketio, 'http://localhost:3000')

FastClick.attach(document.body)

// plugins
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(BusPlugin)
Vue.use(DatetimePlugin)
Vue.use(CloseDialogsPlugin, router)
Vue.directive('transfer-dom', TransferDom)

Vue.config.productionTip = false

const session = window.sessionStorage
session.clear()
session.setItem('/', 0)
let stampCount = session.getItem('stampCount') * 1 || 0

let isPush = false
let endTime = Date.now()
const methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
  endTime = Date.now()
})
methods.forEach(key => {
  const method = router[key].bind(router)
  router[key] = function(...args) {
    isPush = true
    method(...args)
  }
})

router.beforeEach((to, from, next) => {
  store.commit('updataLoadingStatus', { status: true })
  const toStamp = session.getItem(to.path)
  const fromStamp = session.getItem(from.path)
  if (toStamp) {
    if (!fromStamp || parseInt(toStamp, 10) > parseInt(fromStamp, 10) || (toStamp === '0' && fromStamp === '0')) {
      store.commit('updataAnimation', { type: 'forward' })
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updataAnimation', { type: '' })
      } else {
        store.commit('updataAnimation', { type: 'reverse' })
      }
    }
  } else {
    ++stampCount
    session.setItem('stampCount', stampCount)
    to.path !== '/' && session.setItem(to.path, stampCount)
    store.commit('updataAnimation', { type: 'forward' })
  }

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

router.afterEach(to => {
  isPush = false
  setTimeout(() => {
    store.commit('updataLoadingStatus', { status: false })
  }, 500)
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
