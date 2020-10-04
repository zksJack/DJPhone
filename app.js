var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs') 
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));//bodyparser设置
app.use(express.static(path.join(__dirname, './dist')));

app.get("/",(req,res)=>{
   const html = fs.readFileSync(path.resolve(__dirname,'./dist/index.html'),'utf-8') ;
   res.send(html);
})

app.listen(3000,()=>{
    console.log("启动了");
})

module.exports = app;