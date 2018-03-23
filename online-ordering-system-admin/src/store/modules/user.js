import { request } from '../../util/request'

const user = {
  state: {

  },
  mutations: {

  },
  actions: {
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        request(
          'adminLogin',
          {
            username,
            password: userInfo.password
          }
        )
          .then(r => {
          // console.log(r.data)
            resolve(r.data)
          }).catch(error => {
            reject(error)
          })
      })
    }
  }
}

export default user
