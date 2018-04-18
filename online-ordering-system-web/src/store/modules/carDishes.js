const carDishes = {
  state: {
    carDishesData: []
  },
  mutations: {
    updataCarDushes(state, carDishes) {
      state.carDishesData = carDishes
      localStorage.setItem('carDishes', JSON.stringify(carDishes))
    }
  }
}

export default carDishes
