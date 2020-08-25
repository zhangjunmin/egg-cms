// 服务主文件
var express = require('express'),
    port = process.env.PORT || 3000,
    app = express(),
    parser = require('body-parser');

// 设置静态文件目录
app.use(express.static('public'))
// 模板引擎
app.set('view engine', 'jade');
// 表单 处理
app.use(parser.urlencoded({ extended: true }));

const router = require('./routers');
app.use(router);

app.listen(port, () => console.log('server is ready!'))