import axios from 'axios'
import Vue from 'vue'

export function request(params, callback) {
  axios({
    method: 'post',
    baseURL: 'http://localhost:3000/',
    url: params.url,
    data: params.data,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(r => {
    callback(r)
  })
  .catch(err => {
    Vue.$vux.toast.text(err)
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
