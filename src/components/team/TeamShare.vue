<template>
  <div class="team-share">
    <div class="cell">
      <h4>扫码组建团队</h4>
      <p>扫描下方二维码加入团队</p>
    </div>
    <img src="../../assets/qrcode.png" alt="" class="qr-code">
  </div>
</template>

<script>
export default {
  name: 'TeamShare',
  created () {
    this.$store.dispatch('app/hideTabbar')
    this.$store.dispatch('app/setTitle', '组建团队')
  }
}
</script>

<style scoped lang="less">
  .team-share {
    height: 100%;

    .cell {
      @border: 1px solid #DDDDDD;
      border-bottom: @border;
      border-top: @border;
      margin-top: 100px;
      background-color: white;
      text-align: center;

      h4 {
        color: #666666;
        font-weight: normal;
        font-size: 1.1rem;
        margin: 10px 0;
        padding: 0;
      }

      p {
        color: #666666;
        font-size: .8rem;
      }
    }

    .qr-code {
      width: 80%;
      margin: 100px auto;
      display: block;
    }
  }
</style>
