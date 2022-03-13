const express = require('express')

const app = express()

app.get('/',(req,res) => {
    console.log("访问到了根路径get请求");
    // 解决中文乱码
    res.setHeader('Content-type','text/html; charset=utf-8')
    res.end('get 请求')
})

app.post('/post',(req,res) => {
    console.log("访问到了post请求");
    res.end('post 请求')
})

app.listen(8082,() => {
    console.log("8082端口服务器已启动 http://127.0.0.1:8082");
})