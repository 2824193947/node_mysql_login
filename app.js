const express = require('express')
const app = express()

// 连接数据库
require('./database/init')
    // 添加 user 表
require('./database/model/User')
    // 引入路由
const router = require('./router/index')

// 设置 接收post请求数据 req.body 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 为 main 路由添加 匹配 路由
app.use('/api', router)

app.listen(3000, () => {
    console.log('启动成功!http://localhost:3000/api');
})