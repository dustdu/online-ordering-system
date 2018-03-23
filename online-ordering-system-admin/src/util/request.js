import axios from 'axios'
import { Notification } from 'element-ui'

export function request(url, data) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      baseURL: 'http://localhost:3000/',
      url,
      data,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(r => {
        resolve(r.data)
      })
      .catch(err => {
        Notification({
          title: '成功',
          message: err,
          type: 'warning'
        })
      })
  })
}

export function login(params) {
  return axios({
    method: 'post',
    baseURL: 'http://localhost:3000/',
    url: params.url,
    data: params.data,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
