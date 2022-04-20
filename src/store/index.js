import { createStore } from 'vuex'
import { product_add_basket, product_plus_basket, product_minus_basket, product_delete_basket } from '../actions/actions'

export default createStore({
  state: {
    isAuth: false,
    categories: [],
    products: [],
    basket: [],
    product: {},
    recomendation: [],
  },
  getters: {
    IsAuth(state) { return state.isAuth },
    Categories(state) { return state.categories },
    Products(state) { return state.products },
    Basket(state) { return state.basket },

    Product(state) { return state.product },
    Recomendation(state) { return state.recomendation },
  },
  mutations: {
    SetIsAuth(state, payload) {
      state.isAuth = payload;
      if (!payload) {
        localStorage.removeItem('token');
      }
    },
    SetCategories(state, payload) { state.categories = payload },
    SetProducts(state, payload) { state.products = payload },
    SetBasket(state, payload) { state.basket = payload; localStorage.setItem('basket', JSON.stringify(payload)) },

    SetProduct(state, payload) { state.product = payload },
    SetRecomendation(state, payload) { state.recomendation = payload },
    //////////////////////////////////////////////////////////////////////////////////////
    BasketEditAdd(state, payload) {
      let find_object_index = state.basket.findIndex(el => el.product_id === payload.product_id);
      if (find_object_index === -1) {
        state.basket.push({ basket: 1, description: payload.description, image: payload.image, name: payload.name, price: payload.price, product_id: payload.product_id });
        if (state.isAuth) product_add_basket(payload.product_id);
      }
      localStorage.setItem('basket', JSON.stringify(state.basket))
    },
    BasketEditPlus(state, payload) {
      let find_object_index = state.basket.findIndex(el => el.product_id === payload.product_id);
      if (find_object_index === -1) {
        state.basket.push({ basket: 1, description: payload.description, image: payload.image, name: payload.name, price: payload.price, product_id: payload.product_id });
        if (state.isAuth) product_add_basket(payload.product_id);
      } else {
        state.basket[find_object_index].basket++;
        if (state.isAuth) product_plus_basket(payload.product_id);
      }
      localStorage.setItem('basket', JSON.stringify(state.basket))
    },
    BasketEditMinus(state, payload) {
      let find_object_index = state.basket.findIndex(el => el.product_id === payload.product_id);
      if (find_object_index !== -1) {
        if (state.basket[find_object_index].basket === 1) {
          state.basket.splice(find_object_index, 1);
          if (state.isAuth) product_delete_basket(payload.product_id);
        } else {
          state.basket[find_object_index].basket--;
          if (state.isAuth) product_minus_basket(payload.product_id);
        }
      }
      localStorage.setItem('basket', JSON.stringify(state.basket))
    },
    BasketEditDelete(state, payload) {
      let find_object_index = state.basket.findIndex(el => el.product_id === payload.product_id);
      if (find_object_index !== -1) {
        state.basket.splice(find_object_index, 1)
        if (state.isAuth) product_delete_basket(payload.product_id);
      }
      localStorage.setItem('basket', JSON.stringify(state.basket))
    },
    //////////////////////////////////////////////////////////////////////////////////////
  },
  actions: {
    setIsAuth_action({ commit }, payload) { commit('SetIsAuth', payload) },
    setCategories_action({ commit }, payload) { commit('SetCategories', payload) },
    setProducts_action({ commit }, payload) { commit('SetProducts', payload) },
    setBasket_action({ commit }, payload) { commit('SetBasket', payload) },

    setProduct_action({ commit }, payload) { commit('SetProduct', payload) },
    setRecomendation_action({ commit }, payload) { commit('SetRecomendation', payload) },
    //////////////////////////////////////////////////////////////////////////////////////
    basketEditAdd_action({ commit }, payload) { commit('BasketEditAdd', payload) },
    basketEditPlus_action({ commit }, payload) { commit('BasketEditPlus', payload) },
    basketEditMinus_action({ commit }, payload) { commit('BasketEditMinus', payload) },
    basketEditDelete_action({ commit }, payload) { commit('BasketEditDelete', payload) },
    //////////////////////////////////////////////////////////////////////////////////////
  },
  modules: {
  }
})