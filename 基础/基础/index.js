const fs = require('fs')
const path = require('path')

const express = require('express')

const app = express()

// fs.readFile(path.join(__dirname, '/index.html'), function (err,res) {
//   // let html = new Blob([res]);
//   console.log("res ==>",res.toString())
//   // console.log("html ==>",html)
// })
app.get('/get', function (req, res) {
  fs.readFile(path.join(__dirname, '/index.html'), function (err,html) {
    let pathUrl = path.join(__dirname, '/index.html')
    console.log('url ==>', req.url)
    console.log('query ==>', req.query)
    console.log('访问 pathUrl ==>', pathUrl)
    // console.log('html ==>', html.toString())
    res.end(html.toString())
  })
})

app.listen(8080, function () {
  console.log('开启了8080端口的服务器 http://127.0.0.1:8080')
})
