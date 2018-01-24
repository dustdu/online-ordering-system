const users = {
  addUser:'INSERT INTO users(uid,userName,nickName) VALUES(?,?,?)', 
  getUsers:'SELECT * FROM users',  
  getUserByUid:'SELECT * FROM users WHERE uid = ?',
}

module.exports = users