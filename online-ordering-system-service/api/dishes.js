const dishes = {
  addDishes: 'INSERT INTO dishes_list(name,price,discountPrice,activeFlag,recommend,discount,des,remark,imgThumb) VALUES(?,?,?,?,?,?,?,?,?)',
  // 更新餐品
  updataDishes: 'UPDATE dishes_list SET name = ?,price = ?,discountPrice = ?,activeFlag = ?,recommend = ?,discount = ?,des = ?,remark = ? WHERE dishesId = ?',
  getDishes: 'SELECT * FROM dishes_list',
  //根据状态获取餐品
  getDishesByActiveFlag: 'SELECT * FROM dishes_list WHERE activeFlag = ?',
  // 获取优惠餐品
  getDishesByDiscount: 'SELECT * FROM dishes_list WHERE discount = 1',
  // 获取推荐餐品
  getDishesByRecommend: 'SELECT * FROM dishes_list WHERE recommend = 1',
  // 获取最新变化餐品且上架
  getNewDishes: 'SELECT * FROM dishes_list WHERE activeFlag = 1 ORDER BY update_at DESC LIMIT 3',
  // 用户获取优惠餐品
  getSaleDishesByDiscount: 'SELECT * FROM dishes_list WHERE (discount = 1) AND (activeFlag = 1)',
  // 用户获取推荐餐品
  getSaleDishesByRecommend: 'SELECT * FROM dishes_list WHERE (recommend = 1) AND (activeFlag = 1)',
  deleteDishes: 'DELETE FROM dishes_list WHERE dishesId = ?',
  getDishesDetail: 'SELECT * FROM dishes_list WHERE dishesId = ?'
}

module.exports = dishes