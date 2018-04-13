var multer = require('multer');
var path = require('path');
var config = require('../config/multerConfig')

var storage = multer.diskStorage({
    //设置上传文件路径,以后可以扩展成上传至七牛,文件服务器等等
    //Note:如果你传递的是一个函数，你负责创建文件夹，如果你传递的是一个字符串，multer会自动创建
    destination: path.resolve(__dirname, '..') + '/uploads',
    //获取文件MD5，重命名，添加后缀,文件重复会直接覆盖
    filename: function (req, file, cb) {

      let lastPointIndex = file.originalname.lastIndexOf('.');
      let ext = file.originalname.substring( lastPointIndex );

      cb(null, file.originalname.substring(0, lastPointIndex) + '-' + Date.now() + ext)
  }
});

//添加配置文件到muler对象。
var upload = multer({
    storage: storage,
    //其他设置请参考multer的limits
    //limits:{}
});
//导出对象
module.exports = upload;