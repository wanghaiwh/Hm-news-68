<template>
  <div class="user">
    <div class="header">
      <div class="avatar">
        <img src="../assets/1.jpg" alt="">
      </div>
      <div class="info">
        <div class="name">
          <span class="iconfont iconxingbienan"></span>
          <span>2020-8-29</span>
        </div>
      </div>
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script>
export default {

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
        .time {
          margin-top: 10px;
          color: #ccc;
        }
      }
    }
  }

</style>
