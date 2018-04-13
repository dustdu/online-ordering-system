const dishes = {
  addDishes: 'INSERT INTO dishes_list(name,price,discountPrice,activeFlag,recommend,discount,des,remark) VALUES(?,?,?,?,?,?,?,?)',
  // 更新餐品
  updataDishes: 'UPDATE dishes_list SET name = ?,price = ?,discountPrice = ?,activeFlag = ?,recommend = ?,discount = ?,des = ?,remark = ? WHERE dishesId = ?',
  getDishes: 'SELECT * FROM dishes_list',
  //根据状态获取餐品
  getDishesByActiveFlag: 'SELECT * FROM dishes_list WHERE activeFlag = ?',
  deleteDishes: 'DELETE FROM dishes_list WHERE dishesId = ?',
  getDishesDetail: 'SELECT * FROM dishes_list WHERE dishesId = ?'
}

module.exports = dishes