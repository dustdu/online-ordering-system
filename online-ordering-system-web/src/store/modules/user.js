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
        request({
          url: '/users/login',
          data: {
            userName: loginInfo.userName,
            password: loginInfo.password
          }
        }, r => {
          if (r.data.user === 0) {
            Vue.$vux.toast.text('用户名不存在', 'bottom')
            return
          }
          if (r.data.password === 0) {
            Vue.$vux.toast.text('密码不正确', 'bottom')
            return
          }
          if (r.data.data) {
            commit('userInfo', r.data.data)
            setToken(new Date().getTime())
            setUserInfo(r.data.data)
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
