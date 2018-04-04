import { setToken, removeToken, setUserInfo } from '../../utils/cookies'
import { request } from '../../utils/request'
import Vue from 'vue'
const user = {
  state: {
    userInfo: []
  },
  mutations: {
    userInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login({ commit }, loginInfo) {
      return new Promise((resolve, reject) => {
        request(
          'login',
          {
            userName: loginInfo.userName,
            password: loginInfo.password
          }
        )
        .then(r => {
          console.log(r)

          if (r.user === 0) {
            Vue.$vux.toast.text('用户名不存在', 'bottom')
            return
          }
          if (r.password === 0) {
            Vue.$vux.toast.text('密码不正确', 'bottom')
            return
          }
          if (r.data.length === 1) {
            Vue.$vux.toast.text('登录成功！', 'bottom')
            commit('userInfo', r.data)
            // 暂时前端模拟
            setToken(new Date().getTime())
            setUserInfo(r.data)
            resolve(r)
          }
        })
      })
    },
    register({ commit }, registerInfo) {
      return new Promise((resolve, reject) => {
        request(
          'register',
          {
            userName: registerInfo.userName,
            password: registerInfo.password
          }
        )
        .then(r => {
          if (r.user === 1) {
            Vue.$vux.toast.text('用户名已存在', 'bottom')
            return
          }
          if (r.data.length === 1) {
            Vue.$vux.toast.text('注册成功！', 'bottom')
            commit('userInfo', r.data)
            setToken(new Date().getTime())
            setUserInfo(r.data)
            resolve(r)
          }
        })
      })
    },
    loginOut({ commit }) {
      return new Promise(resolve => {
        removeToken()
        resolve()
      })
    }
  }
}

export default user
