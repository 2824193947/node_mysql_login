const { sequelize, Sequelize } = require('../init')

// 创建模型 第一个参数是 表名(通过返回的模型可以进行查询)
const User = sequelize.define('user', {
    // 一个对象就是一个字段
    // 用户名
    username: {
        // 约束字段的类型
        type: Sequelize.STRING,
        // 是否允许为空 默认是 true
        allowNull: false,
        unique: true
    },
    // 密码
    password: {
        type: Sequelize.STRING,
        // 是否允许为空 默认是 true
        allowNull: false
    }
})

// 同步模型(将user信息添加到数据库)
User.sync().then(() => {
    console.log('模型同步成功');
})

module.exports = { User }