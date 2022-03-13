const express = require('express')

const app = express()
//淡入路由模块
const router = require('./moduleRouter')

// console.log("router ==>",router);

// 注册路由模块
// app.use()函数的作用， 就是用来注册全局中间键
app.use(router)

// 添加前缀的写法
// app.use('/qian',router)

app.listen('8083',() => {
    console.log("8083端口服务器已启动 http://127.0.0.1:8083");
})