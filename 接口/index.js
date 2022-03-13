const express = require('express');
const cors = require('cors')//解决跨域的

const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}))

const router = require('./router')

app.use(cors());
app.use('/back',router);

app.listen(3000,() => {
    console.log("8080端口的服务器已启动 http://127.0.0.1:3000");
})