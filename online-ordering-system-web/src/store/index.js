import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import condition from './modules/condition'
import appState from './modules/appState'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    condition,
    appState
  },
  getters
})

export default store
