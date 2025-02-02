const express = require('express')

const app = express()
// 将整个build目录作为静态资源目录
app.use(express.static('build', { maxAge: 1000 * 3600 }))

app.listen(3000, () => console.log('服务器启动'))
