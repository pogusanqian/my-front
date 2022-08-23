const express = require('express');

const app = express();
app.use(express.static(__dirname + '/dist'));

app.listen(8888, () => console.log('服务器启动成功'));