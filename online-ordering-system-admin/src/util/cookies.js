import Cookies from 'js-cookie'

const tokenName = 'token-admin'

export function setToken(token) {
  return Cookies.set(tokenName, token)
}

export function getToken() {
  return Cookies.get(tokenName)
}

export function setAdminInfo(adminInfo) {
  return Cookies.set('adminInfo', adminInfo)
}

export function removeToken() {
  return Cookies.remove(tokenName)
}
