const users = {
  addUser: 'INSERT INTO users(mobile,userName,password) VALUES(?,?,?)', 
  getUsers: 'SELECT * FROM user_list',
  //获取用户
  getUserByUserName: 'SELECT * FROM user_list WHERE userName = ?',
  // uId获取用户
  getUserByUid: 'SELECT * FROM user_list WHERE uId = ?',
  //验证账号
  verifUserName: 'SELECT * FROM users WHERE userName = ?',
  //验证账号密码
  verifUserPassword: 'SELECT * FROM users WHERE (userName = ?) AND (password = ?)'
}

module.exports = users