<template>
  <mt-tabbar v-model="selected" :fixed="true">
    <mt-tab-item id="local">
      <img slot="icon" src="../assets/icon_setting.png">
      本地
    </mt-tab-item>
    <mt-tab-item id="near">
      <img slot="icon" src="../assets/icon_setting.png">
      附近
    </mt-tab-item>
    <mt-tab-item id="my">
      <img slot="icon" src="../assets/icon_setting.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'AppTabBar',
  data () {
    return {
      selected: 'home'
    }
  },
  watch: {
    selected (tab) {
      this.$store.dispatch('app/selectTab', tab)
    }
  }
}
</script>

<style scoped>

</style>
