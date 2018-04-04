const getters = {
  userInfo: state => state.user.userInfo,
  isShowBack: state => state.condition.isShowBack,
  animationType: state => state.routerStore.animationType
}

export default getters
