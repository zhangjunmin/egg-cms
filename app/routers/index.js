// 路由
var express = require('express'),
    router = express.Router();
// 首页
router.get('/', (req, res)=> {
    res.render('index', {
        title: 'hello ejs'
    });
});

// 联系我们
router.get('/contact', (req, res)=> {
    res.send('联系我们');
});

router.get('*', (req, res)=> {
    res.send('404');
});

module.exports = router;