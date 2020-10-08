// 路由
var express = require('express'),
    router = express.Router();
const { constantRoutes, asyncRoutes } = require('./role')

// 跨域
router.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
});
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

// 登录成功
router.post('/vue-element-admin/user/login', (req, res) => {
    console.log('req', req.body)
    res.send({
        code: 20000,
        data: {
            roles: ['admin'],
            introduction: 'I am a super administrator',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            name: 'Super Admin'
        }
    })

});
// 登录成功
router.post('/vue-element-admin/user/login', (req, res) => {
    console.log('req', req.body)
    res.send({
        code: 20000,
        data: {
            roles: ['admin'],
            introduction: 'I am a super administrator',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            name: 'Super Admin'
        }
    })

});
// 获取用户信息
router.get('/vue-element-admin/user/info', (req, res) => {
    res.send({
        code: 20000,
        data: {
            roles: ['admin'],
            introduction: 'I am a super administrator',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            name: 'Super Admin'
        }
    })

});
// 获取角色
router.get('/vue-element-admin/roles', (req, res) => {
    console.log('req', req.body)
    res.send({
        code: 20000,
        data: {
            roles: ['admin'],
            introduction: 'I am a super administrator',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            name: 'Super Admin'
        }
    })

});

// todo
var todos = [];

// 获取列表
router.get('/todo/list', (req, res) => {
    res.status(200).send({ todos })
})

// add
router.post('/todo/add', (req, res) => {
    var todo = req.body;
    todos.push(todo)
    console.log('req', req.body)
    res.status(200).send({
        todo
    })
});

// edit
router.post('/todo/edit/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body; // 目前只可编辑状态
    if (!id || !body) {
        res.status(500).send({
            error: '提交的数据不完整'
        })
    }
    var index = todos.findIndex(function(item) { if (item.id == id) { return true } })
    var todo = todos[index];
    if (index == -1) {
        res.status(404).send({
            error: '该id的待办任务不存在'
        })
    }
    todo.status = body.status;
    res.status(200).send({
        index,
        todo
    })
});

// 删除

router.post('/todo/delete/:id', (req, res) => {
    const id = req.params.id;
    console.log('id', id)
    if (!id) {
        res.status(500).send({
            error: '要删除的代办id不可为空'
        })
    }
    var index = todos.findIndex(function(item) { if (item.id == id) { return true } })
    if (index == -1) {
        res.status(404).send({
            error: '该id的待办任务不存在'
        })
    }
    todos.splice(index, 1)
    res.status(200).send({
        index
    })
});

module.exports = router;