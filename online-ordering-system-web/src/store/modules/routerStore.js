const routerStore = {
  state: {
    animationType: 'forward'
  },
  mutations: {
    updataAnimation(state, animation) {
      state.animationType = animation.type
    }
  },
  actions: {

  }
}

export default routerStore
