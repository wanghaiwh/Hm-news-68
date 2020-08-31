<template>
  <div class="hm-header">
      <div class="back" @click="back">
          <span class="iconfont iconjiantou2"></span>
      </div>
      <div class="title"><slot></slot></div>
      <div class="extra"></div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
    .hm-header {
        display: flex;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
        text-align: center;
        .back,
        .extra {
            height: 50px;
        }
        .iconfont {
            font-size: 16px;
        }
        .title {
            flex: 1;
            font-size: 18px;
            font-weight: 700;
        }
    }

</style>
