// 搭建服务器与接口
const express = require('express')
const app = express()
const body = require('body-parser') //解析上传 json和键值对数据
// 配置环境 它会把参数解析成对象，保存在req.body中
app.use(body.urlencoded({
    extended: false
}));
const multer = require('multer') //解析长传文件
// 配置
const upload = multer({
    dest: 'avatars/'
})
// 引入会话
const session = require('express-session')
let conf = {
    secret: '123456', //加密字符串。 使用该字符串来加密session数据，自定义
    resave: false, //强制保存session即使它并没有变化
    saveUninitialized: false //强制将未初始化的session存储。当新建了一个session且未
    //设定属性或值时，它就处于未初始化状态。
};
//使用express-session
app.use(session(conf));
// 引入工具
const msg = require('./utils/messages.js')
const user = require('./utils/user.js')
// 托管静态
app.use(express.static('board_front'))
// 跨域
app.use((req, res, next) => { //解决跨域可以npm 安装cors包
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials: true"); //credentials是设置可以跨域传送cookie。
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next()
})

// 留言接口
app.get('/msg', (req, res) => {
    let rs = {
        code: 200,
        data: msg.get()
    }
    res.send(rs)
})

app.post('/msg', (req, res) => {
    let {
        name,
        content
    } = req.body
    if (name == undefined || content == undefined) {
        res.status(400).send({
            code: 400,
            msg: "添加失败"
        })
    } else {
        msg.add(name, content)
        res.json({
            code: 200,
            msg: "添加成功"
        })
    }
})
// ---------用户注册登录
// 注册
app.post('/user', upload.single('avatars'), (req, res) => {
    let {
        name,
        pwd
    } = req.body
    let avatars = req.file.path
    user.add(name, pwd, avatars)
    res.json({
        code: 200,
        msg: "注册成功"
    })
})

// 登录
app.post('/login', (req, res) => {
    let {
        name,
        pwd
    } = req.body
    let all_users = user.get()
    let cur_users = all_users.find(item => item.name == name && item.pwd == pwd)
    if (cur_users) {
        // 匹配成功 添加会话
        req.session.login = true
        req.session.name = name
        res.send({
            code: 200,
            msg: '登陆成功',
            data: cur_users
        })
    } else {
        res.send({
            code: 400,
            msg: '用户名或密码错误',

        })
    }
})

//----------会话
// 获取
app.get('/user', (req, res) => {
    let name = req.session.name
    let login = req.session.login
    // console.log(req.session);

    if (login) {
        res.send({
            code: 200,
            msg: '获取成功',
            data: {
                "name": name
            }
        })
    } else {
        res.send({
            code: 400,
            msg: "获取失败"
        })
    }
})
// 删除
app.delete('/user', (req, res) => {
    req.session.destroy() //直接摧毁
    res.send({
        code: 200,
        msg: "退出成功"
    })
})

app.listen(8081, () => {
    console.log('服务器端口8081启动： success');

})