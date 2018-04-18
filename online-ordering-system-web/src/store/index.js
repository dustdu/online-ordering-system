import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import appState from './modules/appState'
import carDishes from './modules/carDishes'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    appState,
    carDishes
  },
  getters
})

export default store
