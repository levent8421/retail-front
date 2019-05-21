<template>
  <mt-tab-container v-model="selected" :active.sync="selected">
    <mt-tab-container-item id="local">
      <local v-if="selected === 'local'"/>
    </mt-tab-container-item>
    <mt-tab-container-item id="near">
      <near v-if="selected === 'near'"/>
    </mt-tab-container-item>
    <mt-tab-container-item id="my">
      <my v-if="selected === 'my'"/>
    </mt-tab-container-item>
  </mt-tab-container>
</template>

<script>
import Local from './local/Index'
import Near from './near/Index'
import My from './my/Index'

export default {
  name: 'Index',
  components: {
    Local,
    Near,
    My
  },
  created () {
    this.$store.dispatch('app/showTabbar')
    this.$store.dispatch('app/showHeader')
    this.$store.dispatch('app/selectTab', 'local')
  },
  data () {
    return {}
  },
  computed: {
    selected: {
      get () {
        return this.$store.state.app.tabbar
      },
      set (tab) {
        this.$store.dispatch('app/selectTab', tab)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .index {
    padding: 0;
    height: 100%;

    .main-tab-container {
      width: 100%;
      height: 100%;

      .main-tab-container-wrapper {
        height: 100%;
      }
    }
  }
</style>
