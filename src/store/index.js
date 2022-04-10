import { createStore } from 'vuex'

export default createStore({
  state: {
    categories:['Холодные закуски', 'Горячие закуски', 'Мясные блюда', 'Супы', 'Рыбные блюда', 'Гриль меню', 'Фирменные блюда', 'Напитки']
  },
  getters:{
    Categories: state=>{return state.categories}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
