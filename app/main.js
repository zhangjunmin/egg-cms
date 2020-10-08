// 服务主文件
var express = require('express'),
    path = require('path'),
    port = 3000,
    app = express(),
    bodyParser = require('body-parser'),
    ejs = require('ejs');

// 设置静态文件目录
app.use(express.static('public'))
    // 模板引擎
app.set('views', './views')
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
// 表单 处理
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const router = require('./routers');
app.use(router);

app.listen(port, () => console.log('server is ready!'))