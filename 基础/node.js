const fs = require('fs')
const path = require('path')
// 读取内容
// fs.readFile('./text.txt','utf8',function (err,res){
//     console.log("err ==>",err)
//     console.log("res ==>",res)
// })
//
// fs.writeFile('./text1.txt','这是写入的文字1',function (err,res){
//     console.log('写入失败 err ==>',err)
//     console.log('写入成功 res ==>',res)
// })
// let path = __dirname + '/text2.txt'
// fs.writeFile(path,"这是完整的路径写法",function (err){
//     console.log("path ==>",path)
//     console.log("err ==>",err)
// })
// let path = './text3.txt'
// fs.writeFile(path,"这是不完整的路径写法text3",function (err){
//     console.log("path ==>",path)
//     console.log("err ==>",err)
// })
// let str = './text2.txt'
// let paths =__dirname + str
// fs.readFile(paths,"utf8",function (err,res){
//     console.log("paths ==>",paths)
//     console.log("err ==>",err)
//     console.log("res ==>",res)
// })
// console.log("-----------------------")
// let pathStr = path.join(__dirname,str);
// fs.readFile(pathStr,"utf8",function (err,res){
//     console.log("pathStr ==>",pathStr)
//     console.log("err ==>",err)
//     console.log("res ==>",res)
//     console.log("path.basename(pathStr) ==>",path.basename(pathStr))//获取当前的文件名（包括后缀）
//     console.log("path.basename(pathStr,'txt) ==>",path.basename(pathStr,'.txt'))//获取当前的文件名（不包括后缀）
//     console.log("path.extname(pathStr) ==>",path.extname(pathStr))//获取当前文件名后缀
// })
let path1 = path.join(__dirname, 'index.html')
console.log("path1 ==>", path1)
fs.readFile(path1, 'utf8', function (err, res) {
    console.log("err ==>", err)
    // console.log("读取文件成功 res ==>",res)
    if (res) {
        fs.mkdir(path.join(__dirname, '/index'), function (err) {//创建文件（目录）
            if (!err) {
                res = regStyleFn(res, 'css')
                res = regStyleFn(res, 'js')
                setHtmlFn(res)
                console.log("文件夹创建成功。");
            }
        });

    }
})

function regStyleFn(res, type) { //写入样式文件方法
    let bool = type === 'css'
    let regStyle = bool ? /<style>[\d\D]*<\/style>/ : /<script>[\d\D]*<\/script>/
    let styleText = ''
    let writePath = path.join(__dirname, `/index/index.${bool ? 'css' : 'js'}`)
    let newHtmlText = res.replace(regStyle, function ($1) {
        // console.log("$1 ==>",$1)
        let smallReg = bool ? /<style>\s*|<\/style>\s*/g : /<script>\s*|<\/script>\s*/g
        styleText = $1.replace(smallReg, '')
        let reaplceStr = bool ? `<link rel="stylesheet" href="./index.css">` : `<script src="./index.js"></script>`
        console.log("reaplceStr ==>", reaplceStr)
        return reaplceStr
    })
    fs.writeFile(writePath, styleText, function (err) {
        if (!err) {
            console.log(`写入${bool ? 'css样式' : 'js逻辑'}文件成功`)
        } else {
            console.log(`写入${bool ? 'css样式' : 'js逻辑'}文件失败`, err)
        }
    })
    return newHtmlText
}

function setHtmlFn(htmlText) {
    let writePath = path.join(__dirname, `/index/index.html`)
    fs.writeFile(writePath, htmlText, function (err) {
        if (!err) {
            console.log(`写入html文件成功`)
        } else {
            console.log(`写入html文件失败`)
        }
    })
}