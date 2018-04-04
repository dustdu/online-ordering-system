const appState = {
  state: {
    animationType: 'forward',
    isLoading: false
  },
  mutations: {
    updataAnimation(state, animation) {
      state.animationType = animation.type
    },
    updataLoadingStatus(state, loading) {
      state.isLoading = loading.status
    }
  },
  actions: {

  }
}

export default appState
