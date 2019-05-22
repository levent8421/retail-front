<template>
  <div id="app">
    <app-header v-if="$store.state.app.showHeader"/>
    <router-view :class="$store.state.app.showHeader?'main-content':'main-content-without-header'"/>
    <app-tab-bar v-if="$store.state.app.showTabbar"/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppTabBar from '@/components/AppTabBar'

export default {
  name: 'App',
  created () {
    this.loadUserInfo()
  },
  components: {
    AppHeader,
    AppTabBar
  },
  methods: {
    loadUserInfo () {
      const userId = this.$route.params.userId
      this.$store.dispatch('user/login', userId)
    }
  }
}
</script>

<style lang="less">
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F5F5F9;
    width: 100%;

    .main-content {
      padding-top: 40px;
      width: 100%;
    }

    .main-content-without-header {
      width: 100%;
    }
  }
</style>
