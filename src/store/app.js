const app = {
  namespaced: true,
  state: {
    tabbar: 'local',
    title: '本地',
    showTabbar: true,
    showHeader: true
  },
  mutations: {
    setTab (state, tab) {
      const titleMap = {
        local: '本地',
        near: '附近',
        my: '我的'
      }
      state.title = titleMap[tab] || '---'
      state.tabbar = tab
    },
    setTitle (state, title) {
      state.title = title
    },
    setShowHeader (state, show) {
      state.showHeader = show
    },
    setShowTabbar (state, show) {
      state.showTabbar = show
    }
  },
  actions: {
    selectTab ({commit}, tab) {
      commit('setTab', tab)
    },
    setTtile ({commit}, title) {
      commit('setTitle', title)
    },
    hideTabbar ({commit}) {
      commit('setShowTabbar', false)
    },
    showTabbar ({commit}) {
      commit('setShowTabbar', true)
    },
    hideHeader ({commit}) {
      commit('setShowHeader', false)
    },
    showHeader ({commit}) {
      commit('setShowHeader', true)
    }
  },
  getters: {}
}
export default app
