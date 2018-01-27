const users = {
  addUser:'INSERT INTO users(uid,userName,nickName) VALUES(?,?,?)', 
  getUsers:'SELECT * FROM users',
  getUserByUserName:'SELECT * FROM users WHERE userName = ?',
  //验证账号
  verifUser:'SELECT * FROM users WHERE (userName = ?) AND (password = ?)',
}

module.exports = users