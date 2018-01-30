const users = {
  addUser: 'INSERT INTO users(uid,userName,password) VALUES(?,?,?)', 
  getUsers: 'SELECT * FROM users',
  //获取用户
  getUserByUserName: 'SELECT * FROM users WHERE userName = ?',
  //验证账号
  verifUser: 'SELECT * FROM users WHERE (userName = ?) AND (password = ?)',
}

module.exports = users