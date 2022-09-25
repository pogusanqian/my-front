const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const md5 = require('blueimp-md5');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routers');
const UserModel = require('./models/UserModel');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/', indexRouter);


(async () => {
  try {
    // 创建数据库连接
    await mongoose.connect('mongodb://localhost:27017', {
      user: 'root',
      pass: 'root',
      dbName: 'server_db2',
      poolSize: 20,
    });
    // 创建管理员账户
    const user = await UserModel.findOne({ username: 'admin' });
    if (!user) {
      await UserModel.create({ username: 'admin', password: md5('admin') });
      console.log('初始化用户成功(用户名:admin 密码为:admin)');
    }
    // 创建服务器
    app.listen('5000', () => console.log('服务器启动成功, 请访问: http://localhost:5000'));
  } catch (err) {
    console.error('启动服务失败: ', err);
  }
})();

