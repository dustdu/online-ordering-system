const getters = {
  userInfo: state => state.user.userInfo,
  isShowBack: state => state.appState.isShowBack,
  title: state => state.appState.title,
  isShowBottom: state => state.appState.isShowBottom,
  animationType: state => state.appState.animationType,
  isLoading: state => state.appState.isLoading,
  carDishes: state => state.carDishes.carDishesData,
  selectedBottom: state => state.appState.selectedBottom
}

export default getters
