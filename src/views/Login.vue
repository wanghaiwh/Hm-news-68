<template>
  <div>
      <hm-header>登录</hm-header>
      <hm-logo></hm-logo>
  <van-form @submit="login">
    <van-field
    v-model="username"
    name="用户名"
    label="账号"
    placeholder="请输入账号"
    :rules="rules.username"
  />
    <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="请输入密码"
    :rules="rules.password"
  />
    <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      登录
    </van-button>
  </div>
  <p class="tips">没有账号？去<router-link to="/register">注册</router-link></p>
</van-form>
  </div>
</template>

<script>
export default {
  created() {
    // 结构
    console.log(this.$route)
    const { username, password } = this.$route.params
    this.username = username
    this.password = password
  },
  methods: {
    async login() {
      const res = await this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })

      const { statusCode, message, data } = res.data
      if (statusCode === 200) {
        // 使用toast 组件中要this.$toast才能使用
        this.$toast.success(message)
        // 保存token
        localStorage.setItem('token', data.token)
        localStorage.setItem('userId', data.user.id)
        console.log('登录成功')
        // 登陆成功跳转个人中心页面
        this.$route.push({
          path: '/user'
        })
      } else {
        this.$toast.fail('登录失败')
      }
    }
  },
  data() {
    return {
      username: '',
      password: '',
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          { pattern: /^\d{5,11}$/, message: '用户名长度是5-11位数字', trigger: 'onChange' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          { pattern: /^\d{3,9}$/, message: '密码长度是3-9位数字', trigger: 'onChange' }
        ]
      }
    }
  }
}

</script>

<style lang="less" scoped>
  .tips {
    font-size: 16px;
    text-align: right;
    padding-right: 20px;
    a {
      color: orange;
    }
  }

//  /deep/深度选择器
  /deep/.hm-header {
    .title {
      color: gold;
    }
  }
</style>
