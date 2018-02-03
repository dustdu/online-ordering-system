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
        res.json(result);
      }else{
        var result = {
            "status": "200",
            "message": "success",
            data:data
          }
        res.json(result);
      }
      connection.release()
    })
  })
});


module.exports = router;
