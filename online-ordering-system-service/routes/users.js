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


router.post('/login', function(req, res, next) {
  mysql.getConnection((err,connection)=>{
    connection.query(userSql.getUserByUserName, req.body.userName, (err,data)=>{
      if (err) {
        let result = {
          "status": "0",
          "message": "验证用户错误"
        }
        res.json(result);
      }else{
        //用户不存在
        if (data.length === 0) {
          let result = {
            "status": "200",
            user: 0
          }
          res.json(result);
        }else{
          connection.query(userSql.verifUser, [req.body.userName, req.body.password], (err,data)=>{
            if (err) {
              let result = {
                "status": "1",
                "message": "验证用户密码错误"
              }
              res.json(result);
            }else{
              let result = {}
              if (data.length === 0) {
                result = {
                  "status": "200",
                  password: 0
                }
              }else{
                result = {
                  "status": "200",
                  data: data
                }
              }
              res.json(result);
            }
          })
        }
      }
      connection.release()
    })
  })
});


module.exports = router;
