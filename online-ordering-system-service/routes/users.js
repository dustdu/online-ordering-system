var express = require('express');
var router = express.Router();

var mysql = require('../mysql')
var userSql = require('../api/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  mysql.getConnection((err,connection)=>{
    connection.query(userSql.getUsers,(err,data)=>{
      if (err) {
        var result = {
            "status": "500",
            "message": "服务器错误"
          }
        return res.jsonp(result);
      }else{
        var result = {
            "status": "200",
            "message": "success",
            data:data
          }
        return res.jsonp(result);
      }
      connection.release()
    })
  })
});

module.exports = router;
