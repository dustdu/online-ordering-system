const appState = {
  state: {
    animationType: 'forward',
    isLoading: false,
    title: '欢迎订餐',
    isShowBack: false,
    isShowBottom: true,
    selectedBottom: 0
  },
  mutations: {
    updataAnimation(state, animation) {
      state.animationType = animation.type
    },
    updataLoadingStatus(state, loading) {
      state.isLoading = loading.status
    },
    updataShowBack(state, isShowBack) {
      state.isShowBack = isShowBack
    },
    updataTitle(state, title) {
      state.title = title
    },
    updataShowBottom(state, isShowBottom) {
      state.isShowBottom = isShowBottom
    },
    updataSelectedBottom(state, selectedBottom) {
      state.selectedBottom = selectedBottom
    }
  },
  actions: {

  }
}

export default appState
