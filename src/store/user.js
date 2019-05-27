import userApi from '@/api/user'

const user = {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    login ({commit}, id) {
      userApi.detail(id).then(res => {
        commit('setUser', res.data.data)
      })
    },
    me ({commit}) {
      userApi.me().then(res => {
        const user = res.data.data
        commit('setUser', user)
        console.log(`%c拉取用户信息[${user.name}:${user.id}]`, 'color:rgb(24,145,243);font-size:1rem')
      })
    }
  }
}
export default user
