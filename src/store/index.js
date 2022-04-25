import { createStore } from 'vuex'
import { product_add_basket, product_plus_basket, product_minus_basket, product_delete_basket } from '../actions/actions'

export default createStore({
  state: {
    isAuth: false,
    categories: [
      { category_id: 1, category_name: 'Горячие закуски', category_description: 'Горячие закуски' },
      { category_id: 6, category_name: 'Гриль меню', category_description: 'Гриль меню' },
      { category_id: 3, category_name: 'Мясные блюда', category_description: 'Мясные блюда' },
      { category_id: 8, category_name: 'Напитки', category_description: 'Напитки' },
      { category_id: 5, category_name: 'Рыбные блюда', category_description: 'Рыбные блюда' },
      { category_id: 4, category_name: 'Супы', category_description: 'Супы' },
      { category_id: 7, category_name: 'Фирменные блюда', category_description: 'Фирменные блюда' },
      { category_id: 2, category_name: 'Холодные закуски', category_description: 'Холодные закуски' },
    ],
    products: [
      {
        category_id: 1, product_id: 1, name: 'Индейка', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '450.00',
        carbohydrates: "22.3",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "15.4",
        image: "https://i.imgur.com/y9r5vPE.png",
        kilocalories: "22.5",
        mass: 250,
        squirrels: "40.5"
      },
      {
        category_id: 1, product_id: 2, name: 'Ягненок', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '620.00',
        carbohydrates: "25,2",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "252,2",
        image: "https://i.imgur.com/3kx3uEm.png",
        kilocalories: "43.1",
        mass: 250,
        squirrels: "155,4"
      },
      {
        category_id: 2, product_id: 2, name: 'Ягненок', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '620.00',
        carbohydrates: "22.3",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "15.4",
        image: "https://i.imgur.com/y9r5vPE.png",
        kilocalories: "22.5",
        mass: 250,
        squirrels: "40.5"
      },
      {
        category_id: 2, product_id: 1, name: 'Индейка', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '450.00',
        carbohydrates: "25,2",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "252,2",
        image: "https://i.imgur.com/3kx3uEm.png",
        kilocalories: "43.1",
        mass: 250,
        squirrels: "155,4"
      },
      {
        category_id: 3, product_id: 1, name: 'Индейка', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '450.00',
        carbohydrates: "22.3",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "15.4",
        image: "https://i.imgur.com/y9r5vPE.png",
        kilocalories: "22.5",
        mass: 250,
        squirrels: "40.5"
      },
      {
        category_id: 3, product_id: 2, name: 'Ягненок', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '620.00',
        carbohydrates: "25,2",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "252,2",
        image: "https://i.imgur.com/3kx3uEm.png",
        kilocalories: "43.1",
        mass: 250,
        squirrels: "155,4"
      },
      {
        category_id: 4, product_id: 1, name: 'Индейка', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '450.00',
        carbohydrates: "22.3",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "15.4",
        image: "https://i.imgur.com/y9r5vPE.png",
        kilocalories: "22.5",
        mass: 250,
        squirrels: "40.5"
      },
      {
        category_id: 4, product_id: 2, name: 'Ягненок', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '620.00',
        carbohydrates: "25,2",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "252,2",
        image: "https://i.imgur.com/3kx3uEm.png",
        kilocalories: "43.1",
        mass: 250,
        squirrels: "155,4"
      },
      {
        category_id: 5, product_id: 1, name: 'Индейка', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '450.00',
        carbohydrates: "22.3",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "15.4",
        image: "https://i.imgur.com/y9r5vPE.png",
        kilocalories: "22.5",
        mass: 250,
        squirrels: "40.5"
      },
      {
        category_id: 5, product_id: 2, name: 'Ягненок', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '620.00',
        carbohydrates: "25,2",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "252,2",
        image: "https://i.imgur.com/3kx3uEm.png",
        kilocalories: "43.1",
        mass: 250,
        squirrels: "155,4"
      },
      {
        category_id: 6, product_id: 1, name: 'Индейка', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '450.00',
        carbohydrates: "22.3",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "15.4",
        image: "https://i.imgur.com/y9r5vPE.png",
        kilocalories: "22.5",
        mass: 250,
        squirrels: "40.5"
      },
      {
        category_id: 6, product_id: 2, name: 'Ягненок', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '620.00',
        carbohydrates: "25,2",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "252,2",
        image: "https://i.imgur.com/3kx3uEm.png",
        kilocalories: "43.1",
        mass: 250,
        squirrels: "155,4"
      },
      {
        category_id: 7, product_id: 1, name: 'Индейка', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '450.00',
        carbohydrates: "22.3",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "15.4",
        image: "https://i.imgur.com/y9r5vPE.png",
        kilocalories: "22.5",
        mass: 250,
        squirrels: "40.5"
      },
      {
        category_id: 7, product_id: 2, name: 'Ягненок', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '620.00',
        carbohydrates: "25,2",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "252,2",
        image: "https://i.imgur.com/3kx3uEm.png",
        kilocalories: "43.1",
        mass: 250,
        squirrels: "155,4"
      },
      {
        category_id: 8, product_id: 1, name: 'Индейка', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '450.00',
        carbohydrates: "22.3",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "15.4",
        image: "https://i.imgur.com/y9r5vPE.png",
        kilocalories: "22.5",
        mass: 250,
        squirrels: "40.5"
      },
      {
        category_id: 8, product_id: 2, name: 'Ягненок', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '620.00',
        carbohydrates: "25,2",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "252,2",
        image: "https://i.imgur.com/3kx3uEm.png",
        kilocalories: "43.1",
        mass: 250,
        squirrels: "155,4"
      },
    ],
    basket: [],
    product: {
      carbohydrates: "25,2",
      compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
      description: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      fats: "252,2",
      image: "https://i.imgur.com/3kx3uEm.png",
      kilocalories: "43.1",
      mass: 250,
      name: "Ягненок",
      price: "620.00",
      product_id: 2,
      squirrels: "155,4",
    },
    recomendation: [
      {
        product_id: 1, name: 'Индейка', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '450.00',
        carbohydrates: "22.3",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "15.4",
        image: "https://i.imgur.com/y9r5vPE.png",
        kilocalories: "22.5",
        mass: 250,
        squirrels: "40.5"
      },
      {
        product_id: 2, name: 'Ягненок', description: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком', price: '620.00',
        carbohydrates: "25,2",
        compound: "помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек",
        fats: "252,2",
        image: "https://i.imgur.com/3kx3uEm.png",
        kilocalories: "43.1",
        mass: 250,
        squirrels: "155,4"
      },
    ],
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