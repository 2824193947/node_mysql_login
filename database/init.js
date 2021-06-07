const Sequelize = require('sequelize')

// sequelize传入基本配置信息
// 第一个参数是 数据库名 第二个是数据库账号 第三个是 数据库 密码
const sequelize = new Sequelize('login', 'root', '112233.', {
    host: 'localhost', // => 地址
    dialect: 'mysql', // => 指定数据库类型 必须指定
    port: '3306' // => 数据库端口 默认是 3306
})

// 连接
sequelize
// 发送连接请求
    .authenticate()
    // 成功 
    .then(() => {
        console.log('数据库连接成功！');
    })
    // 失败
    .catch(err => {
        console.error('连接失败！' + '错误信息：' + err);
    });
// 导出
module.exports = { Sequelize, sequelize }