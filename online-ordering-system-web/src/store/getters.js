const getters = {
  userInfo: state => state.user.userInfo,
  isShowBack: state => state.condition.isShowBack,
  animationType: state => state.appState.animationType,
  isLoading: state => state.appState.isLoading
}

export default getters
