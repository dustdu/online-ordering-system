const orderList = {
  // 添加订单信息
  addOrderList: 'INSERT INTO order_list(orderId,uId,userName,mobile,payPrice,truePrice,payType,remark) VALUES(?,?,?,?,?,?,?,?)', 
  // 添加订单商品
  addOrderDishes: 'INSERT INTO order_dishes(orderId,dishesId,name,imgThumb,price,discountPrice,count,des,remark) VALUES(?,?,?,?,?,?,?,?,?)',
  getOrderList: 'SELECT * FROM order_list',
  getOrderByActiveFlag: 'SELECT * FROM order_list WHERE activeFlag = ?',
  getOrderDetail: 'SELECT * FROM order_detail WHERE orderId = ?'
}

module.exports = orderList