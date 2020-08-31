<template>
  <div>
    <hm-header>注册</hm-header>
    <hm-logo></hm-logo>
<van-form @submit="register">
    <van-field
    v-model="user.username"
    label="账号"
    placeholder="请输入账号"
    :rules="rules.username"
  />
    <van-field
    v-model="user.nickname"
    label="昵称"
    placeholder="请输入昵称"
    :rules="rules.nickname"
  />
    <van-field
    v-model="user.password"
    label="密码"
    placeholder="请输入密码"
    :rules="rules.password"
  />
    <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      注册
    </van-button>
  </div>
  <p class="tips">已有账号？去<router-link to="/login">登录</router-link></p>
</van-form>
  </div>
</template>

<script>
export default {
  // 可以写3个路由钩子函数
  data() {
    return {
      user: {
        username: '',
        nickname: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          { pattern: /^\d{5,11}$/, meaasge: '用户名长度是5-11位数字', trigger: 'onChange' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          { pattern: /^\d{3,9}$/, message: '密码长度是3-9数字', trigger: 'onChange' }
        ],
        nickname: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          { pattern: /^[\u4e00-\u9fa5]{2,6}$/, message: '昵称必须是2-6位中文', trigger: 'onChange' }
        ]
      }
    }
  },
  methods: {
    async register() {
      // console.log('注册成功')
      const res = await this.$axios.post('/register', this.user)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        // 注册成功之后将会跳转到登录页面
        this.$router.push({
          name: 'login',
          params: this.user
        })
      } else {
        this.$toast.fail('注册失败')
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
</style>
