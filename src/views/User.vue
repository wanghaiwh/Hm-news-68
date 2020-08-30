<template>
  <div class="user">
    <div class="header">
      <div class="avatar">
        <!-- 路径必须拼成绝对路径 -->
        <img :src="base + user.head_img" alt="">
      </div>
      <div class="info">
        <div class="name">
          <span v-if="user.gender === 1" class="iconfont iconxingbienan"></span>
          <span v-else class="iconfont iconxingbienv"></span>
          <!-- <span class="iconfont" :class="user.gender === 1 ? 'iconxingbienan': 'iconxingbienv'"></span> -->
          <span>{{user.nickname}}</span>
        </div>
        <div class="time">
          {{user.create_date | time}}
        </div>
      </div>
      <div class="arrow">
        <span class="iconfont iconjiantou1"></span>
      </div>

    </div>
     <!-- 导航条 -->
      <hm-navitem to="/follow">
        <template>我的关注</template>
        <template #content>关注的用户</template>
      </hm-navitem>
      <hm-navitem>
        <template>我的跟帖</template>
        <template #content>跟帖/回复</template>
      </hm-navitem>
      <hm-navitem>
        <template>我的收藏</template>
        <template #content>文章/视频</template>
      </hm-navitem>
      <hm-navitem to="/edit">设置</hm-navitem>
      <div style="padding:20px" @click="logout">
      <van-button type="warning" block>退出</van-button>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    base() {
      return this.$axios.defaults.baseURL
    }
  },
  data() {
    return {
      user: ''
    }
  },
  async created() {
    // token必须要放到请求头中 请求头Authorzation
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const res = await this.$axios.get(`/user/${userId}`, {
      headers: {
        Authorization: token
      }
    })
    const { statusCode, data } = res.data
    if (statusCode === 200) {
      this.user = data
    } else if (statusCode === 401) {
      this.$toast('用户验证失败')
      this.$router.push('/login')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
    }
  },
  methods: {
    async logout() {
      try {
        await this.$dialog.confirm({
          title: '温馨提示',
          message: '确定要退出吗？'
        })
      } catch {
      //  弹出框
        return this.$toast('取消退出')
      }
      // 如果执行到这里说明点了确定
      console.log('确定')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      this.$router.push('/login')
      this.$toast.success('退出成功')
    }
  }
}
</script>

<style lang="less" scoped>
  .user {
    .header {
      display: flex;
      align-items: center;
      padding: 20px 10px;
      border-bottom: 3px solid #ccc;
      .avatar {
        width: 70px;
        height: 70px;
        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
      }
      .info {
        flex: 1;
        padding-left: 20px;
        font-size: 14px;
        .iconfont {
          color: skyblue;
        }
        .iconxingbienv {
          color: pink;
        }
        .time {
          margin-top: 5px;
          color: #ccc;
        }
      }
    }
  }

</style>
