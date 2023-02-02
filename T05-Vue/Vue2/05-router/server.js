const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();

// 解决history路由404报错
app.use(history());

app.use(express.static(__dirname + '/dist'));
app.listen(8888, () => console.log('服务器启动成功: http://localhost:8888'));