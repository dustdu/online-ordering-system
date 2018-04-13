var express = require('express');
var path = require('path');

var router = express.Router();

var mysql = require('../mysql')
var upload = require('../utils/readFiles');
var userSql = require('../api/users')
var dishesSql = require('../api/dishes')
var orderSql = require('../api/order')
var adminSql = require('../api/admin')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader("Content-Type", "text/html");
  res.render('index', { title: 'Express' });
});

// 上传图片
router.post('/upload', upload.single('uploadfile'), function (req, res, next) {
  if (req.file) {
      res.send('文件上传成功')
      console.log(req.file);
      console.log(req.body);
  }
});

// 获取图片
router.get('/img/:name',function (req, res, next) {
  res.setHeader("Content-Type", "image/jpg");
  
  // var options = {
  //   root: __dirname + '/upLoads/',
  //   dotfiles: 'deny',
  //   headers: {
  //       'x-timestamp': Date.now(),
  //       'x-sent': true
  //   }
  // };
  
  res.sendFile( path.resolve(__dirname, '..') + '/uploads/' +req.params.name);
})

// 用户注册
router.post('/register', function(req, res, next) {
  mysql.getConnection((err,connection)=>{
    connection.query(userSql.verifUserName, req.body.userName, (err,data)=>{
      if (err) {
        let result = {
          "status": "0",
          "message": "验证用户错误"
        }
        res.json(result);
      }else{
        if (data.length === 0) {
          connection.query(userSql.addUser, [req.body.userName,req.body.password], (err,data)=>{
            if (err) {
              let result = {
                "message": "注册失败"
              }
              res.json(result);
            }else{
              connection.query(userSql.getUserByUserName, req.body.userName, (err,data)=>{
                if (err) {
                  let result = {
                    "message": "获取用户信息失败"
                  }
                  res.json(result);
                }else{
                  let result = {
                    status: "200",
                    data: data
                  }
                  res.json(result);
                }
              })
            }
          })
        }else{
          let result = {
            "status": "200",
            user: 1
          }
          res.json(result);
        }
      }
      connection.release()
    })
  })
});

// 登录
router.post('/login', function(req, res, next) {
  mysql.getConnection((err,connection)=>{
    connection.query(userSql.verifUserName, req.body.userName, (err,data)=>{
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
          connection.query(userSql.verifUserPassword, [req.body.userName, req.body.password], (err,data)=>{
            if (err) {
              let result = {
                "status": "1",
                "message": "验证用户密码发生错误"
              }
              res.json(result);
            }else{
              if (data.length === 0) {
                let result = {
                  "status": "200",
                  password: 0
                }
                res.json(result);
              }else{
                connection.query(userSql.getUserByUserName, req.body.userName, (err,data)=>{
                  if (err) {
                    let result = {
                      "message": "获取用户信息失败"
                    }
                    res.json(result);
                  }else{
                    let result = {
                      status: "200",
                      data: data
                    }
                    res.json(result);
                  }
                })
              }
            }
          })
        }
      }
      connection.release()
    })
  })
});


// 获取用户列表
router.post('/getUsers', function(req, res, next) {
  mysql.getConnection((err,connection)=>{
    connection.query(userSql.getUsers,(err,data)=>{
      if (err) {
        var result = {
            "status": "500",
            "message": "服务器错误",
            "data": err
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

// 添加餐品
router.post('/addDishes', function(req, res, next) {
  mysql.getConnection((err,connection)=>{
    connection.query(dishesSql.addDishes, [req.body.name, req.body.price, req.body.discountPrice, req.body.activeFlag, req.body.recommend, req.body.discount, req.body.des, req.body.remark],(err,data)=>{
      if (err) {
        var result = {
            "status": "500",
            "message": "服务器错误",
            "data": err
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

// 更新餐品信息
router.post('/updataDishes', function(req, res, next) {
  mysql.getConnection((err,connection)=>{
    connection.query(dishesSql.updataDishes, [req.body.name, req.body.price, req.body.discountPrice, req.body.activeFlag, req.body.recommend, req.body.discount, req.body.des, req.body.remark,req.body.dishesId],(err,data)=>{
      if (err) {
        var result = {
            "status": "500",
            "message": "服务器错误",
            "data": err
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

// 获取餐品列表
router.post('/getDishes', function(req, res, next) {
  mysql.getConnection((err,connection)=>{
    if (req.body.activeFlg === -1) {
      connection.query(dishesSql.getDishes,(err,data)=>{
        if (err) {
          var result = {
              "status": "500",
              "activeFlg": req.body.activeFlg,
              "message": "服务器错误"
            }
          res.json(result);
        }else{
          var result = {
              "status": "200",
              "activeFlg": req.body.activeFlg,
              "message": "success",
              data:data
            }
          res.json(result);
        }
        connection.release()
      })
    }else{
      connection.query(dishesSql.getDishesByActiveFlag, req.body.activeFlg,(err,data)=>{
        if (err) {
          var result = {
              "status": "500",
              "activeFlg": req.body.activeFlg,
              "message": "服务器错误"
            }
          res.json(result);
        }else{
          var result = {
              "status": "200",
              "activeFlg": req.body.activeFlg,
              "message": "success",
              data:data
            }
          res.json(result);
        }
        connection.release()
      })
    }
    
  })
});

// 获取餐品详情
router.post('/getDishesDetail', function(req, res, next) {
  mysql.getConnection((err,connection)=>{
    connection.query(dishesSql.getDishesDetail,req.body.dishesId,(err,data)=>{
      if (err) {
        var result = {
            "status": "500",
            "dishesId": req.body.dishesId,
            "message": "服务器错误"
          }
        res.json(result);
      }else{
        var result = {
            "status": "200",
            "dishesId": req.body.dishesId,
            "message": "success",
            data:data[0]
          }
        res.json(result);
      }
      connection.release()
    })
  })
});

// 获取订单列表
router.post('/getOrderList', function(req, res, next) {
  mysql.getConnection((err,connection)=>{
    if (req.body.activeFlg === -1) {
      connection.query(orderSql.getOrderList,(err,data)=>{
        if (err) {
          var result = {
              "status": "500",
              "activeFlg": req.body.activeFlg,
              "message": "服务器错误"
            } 
          res.json(result);
        }else{
          var result = {
              "status": "200",
              "activeFlg": req.body.activeFlg,
              "message": "success",
              data:data
            }
          res.json(result);
        }
        connection.release()
      })
    }else{
      connection.query(orderSql.getOrderByActiveFlag, req.body.activeFlg,(err,data)=>{
        if (err) {
          var result = {
              "status": "500",
              "activeFlg": req.body.activeFlg,
              "message": "服务器错误"
            }
          res.json(result);
        }else{
          var result = {
              "status": "200",
              "activeFlg": req.body.activeFlg,
              "message": "success",
              data:data
            }
          res.json(result);
        }
        connection.release()
      })
    }
    
  })
});

// TODO:获取订单详细信息

router.post('/adminLogin', function(req, res, next) {
  mysql.getConnection((err,connection)=>{
    connection.query(adminSql.verifAdminName, req.body.adminName, (err,data)=>{
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
            admin: 0
          }
          res.json(result);
        }else{
          connection.query(adminSql.verifAdminPassword, [req.body.adminName, req.body.password], (err,data)=>{
            if (err) {
              let result = {
                "status": "1",
                "message": "验证用户密码发生错误"
              }
              res.json(result);
            }else{
              if (data.length === 0) {
                let result = {
                  "status": "200",
                  password: 0
                }
                res.json(result);
              }else{
                connection.query(adminSql.getAdminByAdminName, req.body.adminName, (err,data)=>{
                  if (err) {
                    let result = {
                      "message": "获取用户信息失败"
                    }
                    res.json(result);
                  }else{
                    let result = {
                      status: "200",
                      token: 'admin',
                      data: data
                    }
                    res.json(result);
                  }
                })
              }
            }
          })
        }
      }
      connection.release()
    })
  })
});

module.exports = router;
