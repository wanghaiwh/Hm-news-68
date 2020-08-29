<template>
  <div class="nav-item">
      <div class="title"><slot></slot></div>
      <div class="content"><slot name="content"></slot></div>
      <div class="arrow">
          <span class="iconfont iconjiantou1"></span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.nav-item {
    display: flex;
    border: 1px solid #ccc;
    height: 50px;
    align-items: center;
    margin-left: 10px;
    padding-right: 10px;
    font-size: 12px;
    .content {
        flex: 1;
        text-align: right;
        color: #666;
    }
    .arrow {
        padding-left: 10px;
    }
}

</style>
