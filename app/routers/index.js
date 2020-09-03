// 路由
var express = require('express'),
    router = express.Router();
// 首页
router.get('/', (req, res) => {
    res.render('index', {
        title: 'hello ejs'
    });
});

// 联系我们
router.get('/contact', (req, res) => {
    res.send('联系我们');
});

router.get('/admin', (req, res) => {
    res.render('admin/home');
});

router.get('/taokeyun', (req, res) => {
    res.render('admin/list');
});

router.get('/taokeyun2', (req, res) => {
    res.render('admin/edit');
});
router.get('*', (req, res) => {
    res.send('404');
});

module.exports = router;