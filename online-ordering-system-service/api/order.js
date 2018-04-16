const orderList = {
  addOrderList: 'INSERT INTO order_list(userName,password) VALUES(?,?)', 
  getOrderList: 'SELECT * FROM order_list',
  getOrderByActiveFlag: 'SELECT * FROM order_list WHERE activeFlag = ?',
  getOrderDetail: 'SELECT * FROM order_detail WHERE orderId = ?'
}

module.exports = orderList