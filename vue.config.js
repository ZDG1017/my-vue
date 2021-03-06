const bodyParser = require('body-parser')

let userList = [{
  id: 0,
  username: 'admin',
  password: '123456'
}, {
  id: 1,
  username: 'xu',
  password: '123'
}]

module.exports = {
  devServer: {
    before(app) {
      //解析post请求
      app.use(bodyParser.json())

      app.post('/api/login', (req, res) => {
        let { username, password } = req.body

        let user = userList.find(item => item.username === username)
        if (user) {
          if (user.password === password) {
            res.send({
              code: 200,
              data: { username },
              message: '登录成功'
            })
          } else {
            res.send({
              code: 400,
              message: '密码错误'
            })
          }
        } else {
          res.send({
            code: 400,
            message: '用户名不存在'
          })
        }


        // if (username === 'admin' && password === '123456') {
        //   res.send({
        //     code: 200,
        //     data: { username },
        //     message: '登录成功'
        //   })
        // } else {
        //   res.send({
        //     code: 400,
        //     message: '登录失败'
        //   })
        // }
      })
    }
  }
}