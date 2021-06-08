const express = require('express')

// 创建路由
const main = express.Router()


main.get('/index', (req, res) => {
    res.send('ok')
})

main.post('/register', require('./user/register'))


module.exports = main