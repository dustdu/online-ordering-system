import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import condition from './modules/condition'
import routerStore from './modules/routerStore'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    condition,
    routerStore
  },
  getters
})

export default store
