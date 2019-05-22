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
    }
  }
}
export default user
