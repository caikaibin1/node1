//导入 http模块
const http = require('http')
//创建服务器实例
const server = http.createServer()
// 为服务器实例绑定request事件，监听客户端的请求
server.on('request', function (req, res) {
    console.log("有客户端发起请求 res ==>")
    console.log("请求的路径 url ==>", req.url)
    console.log("请求的方式 method ==>", req.method)

    // res是响应对象，它包含了与服务器相关的数据和属性，例如:
    // 要发送到客户端的字符串
    // const str = `Your request url is ${req.url}, and request method is ${req.method}`
    let str = 'this.data.Obj 是的'
    //为了防止中文显示乱码的问题，需要设置响应头Content -Type的值为text/html; charset=utf-8
    res.setHeader('Content-Type','text/html; charset=utf-8' )
    // res.end() 方法的作用:
    //向客户端发送指定的内容，并结束这次请求的处理过程
    res.end(str)
})
//启动服务器
server.listen('8080', function () {
    console.log("服务器8080端口已启动，运行 127.0.0.1:8080")
})
// //启动服务器
// server.listen('8081',function (){
//     console.log("服务器8081端口已启动，运行 127.0.0.1:8081")
// })