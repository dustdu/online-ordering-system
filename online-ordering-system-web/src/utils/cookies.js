import cookies from 'js-cookie'

const token = 'user-token'

/**
 * @description 验证用户登录状态，token
 * @author li kang
 * @export
 * @returns
 */
export function getToken() {
  return cookies.get(token)
}

/**
 * @description 添加登录状态
 * @author li kang
 * @export
 * @param {any} token
 */
export function setToken(value) {
  return cookies.set(token, value)
}

/**
 * @description 移除登录状态
 * @author li kang
 * @export
 */
export function removeToken() {
  return cookies.remove(token)
}

/**
 * @description 添加用户信息
 * @author li kang
 * @export
 * @param {any} value
 */
export function setUserInfo(value) {
  return cookies.set('userInfo', value)
}

/**
 * @description 获取用户信息
 * @author li kang
 * @export
 * @param {any} value
 */
export function getUserInfo() {
  return cookies.get('userInfo')
}
