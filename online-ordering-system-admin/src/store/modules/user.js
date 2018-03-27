import { request } from '../../util/request'
import { setToken, setAdminInfo, removeToken } from '../../util/cookies'
import { Notification } from 'element-ui'

const user = {
  state: {
    adminInfo: []
  },
  mutations: {
    adminInfo(state, adminInfo) {
      state.adminInfo = adminInfo
    }
  },
  actions: {
    login({ commit }, adminInfo) {
      return new Promise((resolve, reject) => {
        request(
          'adminLogin',
          {
            adminName: adminInfo.adminName,
            password: adminInfo.password
          }
        )
          .then(r => {
            if (r.status === 0) {
              Notification({
                title: '警告',
                message: '验证账号发生错误',
                type: 'warning'
              })
              reject(r)
              return
            }
            if (r.status === 1) {
              Notification({
                title: '警告',
                message: '验证密码发生错误',
                type: 'warning'
              })
              reject(r)
              return
            }
            if (r.admin === 0) {
              Notification({
                title: '警告',
                message: '管理员不存在',
                type: 'warning'
              })
              reject(r)
              return
            }
            if (r.password === 0) {
              Notification({
                title: '警告',
                message: '密码错误',
                type: 'warning'
              })
              reject(r)
              return
            }
            if (r.data.length === 1) {
              Notification({
                title: '成功',
                message: '登陆成功',
                type: 'success'
              })
              setToken(r.token)
              setAdminInfo(r.data)
              resolve(r)
            }
          }).catch(error => {
            reject(error)
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
