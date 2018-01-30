var express = require('express');
var router = express.Router();

var mysql = require('../mysql')
var userSql = require('../api/users')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res, next) {
  mysql.getConnection((err,connection)=>{
    var uid = new Date().getTime();
    connection.query(userSql.addUser, [uid,req.body.userName,req.body.password], (err,data)=>{
      if (err) {
        let result = {
          "message": "添加用户失败"
        }
        res.json(result);
      }else{
        let result = {
          status: "200",
          data: data
        }
        res.json(result);
      }
      connection.release()
    })
  })
});

module.exports = router;
