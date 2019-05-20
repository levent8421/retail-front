<template>
  <div class="position-bar">
    <div class="icon">
      <i class="el-icon-location-information"></i>
      <span>小龙侠优品</span>
    </div>
    <div class="position-selector">
      <span>{{name}}</span>
      <span class="iconfont icon-position"></span>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    console.log('初始化定位条')
  },
  data () {
    return {name: '常州'}
  },
  name: 'PositionBar'
}
</script>

<style scoped lang="less">
  @height: 44px;
  .position-bar {
    height: @height;
    background-color: #EFEFF4;
    line-height: @height;
    color: #2697EB;
    display: flex;
    justify-content: space-between;

    .icon {
      font-size: 1.2rem;
      color: #666666;

      i {
        font-size: 1.2rem;
        margin-top: 10px;
        margin-left: 10px;
        color: #2697EB;
      }
    }

    .position-selector {
      margin-right: 10px;
      font-size: 1.2rem;
      font-weight: bold;

      i {
        font-size: 1.3rem;
      }
    }
  }
</style>
