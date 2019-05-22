import Vuex from 'vuex'
import Vue from 'vue'
import app from './app'
import user from './user'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    app,
    user
  }
})
