const express = require('express');//请求
const chalk = require('chalk');//修改打印台颜色

// 创建服务器
const app = express()
console.log("app ==>",app.listen)

//安装 nodemon 检测到代码的更新时自动重启服务器
app.get('/user',(req,res) => {
    console.log("req ==>",req.url)
    console.log("req.query ==>",req.query)
    console.log("req.querys ==>",req.params)
    // console.log("res ==>",req.url)
    //为了防止中文显示乱码的问题，需要设置响应头Content -Type的值为text/html; charset=utf-8
    res.setHeader('Content-Type','text/html; charset=utf-8' )
    // res.end({name:'cai',age:'24'})
    res.send('<div>这是get请求</div>')
})
refactor
//启动服务器
app.listen(8081,() => {
    console.log("监听到了80端口启动")
})