<template>
  <div>
    <div>
      <input v-model="username" placeholder="请输入用户名" autofocus>
    </div>
    <div>
      <input v-model="password" placeholder="请输入密码" type="password" @keyup.enter="handleLogin">
      <Icon :type="visible ? 'xianshimima' :'buxianshimima'" @onClick="handleShow"></Icon>
    </div>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import axios from 'axios'
import Icon from '../components/Icon'

export default {
  data() {
    return {
      username: '',
      password: '',
      visible: false
    }
  },
  components: {
    Icon
  },
  methods:{
    handleLogin() {
      if (this.username.trim() === '') {
        alert('用户名不能为空')
        return
      }
      if (this.password.trim() === '') {
        alert('密码不能为空')
        return
      }
      axios({
        url: '/api/login',
        data: { username: this.username, password: this.password },
        method: 'post'
      }).then(res => {
        if (res.data.code === 200) {
          localStorage.setItem('username', res.data.data.username)
        } else if (res.data.code === 400) {
          alert(res.data.message)
        }
      })
    },
    handleShow() {
      this.visible = !this.visible
    }
  }
}
</script>

<style>

</style>