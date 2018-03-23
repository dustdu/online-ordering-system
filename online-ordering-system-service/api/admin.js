const admin = {
  addAdmin: 'INSERT INTO admins(adminName,password) VALUES(?,?)',  
  getAdmin: 'SELECT * FROM admin_list',
  getAdminByAdminName: 'SELECT * FROM admin_list WHERE adminName = ?',
  //验证账号
  verifAdminName: 'SELECT * FROM admins WHERE adminName = ?',
  //验证账号密码
  verifAdminPassword: 'SELECT * FROM admins WHERE (adminName = ?) AND (password = ?)'
}

module.exports = admin