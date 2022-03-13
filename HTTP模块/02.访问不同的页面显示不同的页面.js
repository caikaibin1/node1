const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', async function (req,res) {
    let url = req.url
    console.log("url ==>",url)
    let content = '<h1>404 Not Found</h1>'
    url = url === '/' ? '/index.html': url
    if(url==='/index.html' || url==='/about.html'){
        content =  await jumpPage(url)
    }
    // res.setHeader('Content-Type','text/html; charset=utf-8')
    res.setHeader('Content-Type','text/html; charset=utf-8' )
    console.log("content ==>",content)
    res.end(content,function(res){
        console.log("发送请求  ==>",res)
    })
})

function jumpPage(url){
    return new Promise((resolve, reject) => {
        let accessPath = path.join(__dirname,'/test',url)//访问路径
        console.log("访问的路径 accessPath ==>",accessPath)
        fs.readFile(accessPath,'utf8',function (err,res){
            if(res){
                console.log("res ==>",res)
                resolve(res) ;
            }else{
                resolve(`<h1>404 Not Found</h1> <h3>${accessPath}找不到</h3>`)
            }
        })
    })

}
//启动服务器
server.listen('8080',function (){
    console.log("80端口服务器已启动  127.0.0.1:8080")
})