var mysql = require('mysql')
var mysqlConfig = require('../config/mysqlConfig')

//创建连接池
var connection = mysql.createPool(mysqlConfig)

module.exports = connection