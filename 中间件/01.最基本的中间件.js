const express = require('express')
 
const app =  express()

function centerFn(req,res,next) {
    console.log("这是最简单的中间件函数");
    req.time = new Date()
    //此中间件函数逻辑执行完成，执行下个中间件
    next()
}

function jubu(req,res,next) {
    console.log("这是局部的中间件");
    next()//这个是必须要有的，要不让不会执行到下一步（下一个中间件）
}

// 注册全局的中间件
app.use(centerFn)

app.get("/user",jubu,(req,res,next) => {
    console.log("访问到了user");
    res.send({date:req.time,newDate:new Date()})
})
app.listen("8080",() => {
    console.log("8080端口服务器已启动 http://127.0.0.1:8080");
})