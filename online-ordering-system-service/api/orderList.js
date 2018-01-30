const orderList = {
  addOrderList: 'INSERT INTO users(uid,userName,password) VALUES(?,?,?)', 
  getOrderList: 'SELECT * FROM users',
}

module.exports = orderList