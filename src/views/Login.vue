<template>
  <div>
    <hm-header>登录</hm-header>
    <hm-logo></hm-logo>
    <!-- 登录验证表单 -->
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
    label="密码"
    placeholder="请输入密码"
    :rules="rules.password"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" style="backgroundColor:#cc3300; border:0;">
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
    // 解构
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
        // 在组件中必须this.$toast才可以使用
        this.$toast.success(message)
        // 保存token
        localStorage.setItem('token', data.token)
        localStorage.setItem('userId', data.user.id)
        console.log('登录成功')
        // 成功后跳转到个人中心
        // this.$router.push('/user')
        this.$router.push({
          path: '/user'
        })
      } else {
        this.$toast.fail('登陆失败')
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
  // scoped: 作用域只会在当前组件生效
        // scoped原理
            // 1.给当前模板中的所有元素都添加一个特殊的属性 data-v-xxx
            // 2.给当前组件的样式中的所有选择器增加一个属性选择器 div[data-v-xxx]
  .tips {
    font-size: 16px;
    text-align: right;
    a {
      color: orange;
    }
  }
</style>
