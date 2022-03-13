const express = require('express')



const router = express.Router();

// 定义get接口
router.get('/api',(req,res) => {
    console.log("这是get接口");
    console.log('req.query ==>',req.query);
    res.json({name:req.query.name,age:22,sex:'男'})
})
// 定义post接口
router.post('/post',(req,res) => {
    console.log("这是post请求");
    // 通过res.body 获取请求体中的包含的url-encoded格式的数据
    const body = req.body
    res.send({
        status:0,
        msg:'POST请求成功',
        data:body
    })
})
module.exports = router
