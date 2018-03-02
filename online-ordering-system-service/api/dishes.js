const dishes = {
  addDishes: 'INSERT INTO dishes_list SET name = ?, price = ?', 
  getDishes: 'SELECT * FROM dishes_list',
  //根据状态获取餐品
  getDishesByActiveFlag: 'SELECT * FROM dishes_list WHERE activeFlag = ?',
  deleteDishes: 'DELETE FROM dishes_list WHERE id = ?'
}

module.exports = dishes