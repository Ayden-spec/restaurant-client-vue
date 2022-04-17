<template>
  <div class="basket_container">
    <div class="basket_title_back_button">
      <router-link to="/" class="basket_button_back"
        >&lt; к выбору блюда</router-link
      >
      <div class="basket_title">
        <h1 class="title">КОРЗИНА</h1>
        <p>(в корзине {{ BasketCounter }} товара)</p>
      </div>
    </div>
    <div class="basket_list">
      <h2 v-if="BasketCounter === 0">КОРЗИНА ПУСТАЯ</h2>
      <!---->
      <div
        class="basket_product_card"
        v-for="product in $store.getters.Basket"
        :key="product.product_id"
      >
        <img :src="product.image" alt="product_img" />
        <div class="basket_img_descr">
          <div class="basket_list_title_description">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </div>
          <div class="basket_interaction">
            <div class="basket_list_interaction">
              <button
                class="interaction_button"
                @click="$store.dispatch('basketEditMinus_action', product)"
              >
                -
              </button>
              <p>{{ product.basket }}</p>
              <button
                class="interaction_button"
                @click="$store.dispatch('basketEditPlus_action', product)"
              >
                +
              </button>
            </div>
            <h3 class="basket_card_price">{{ product.price }} ₽</h3>
            <button
              class="interaction_button"
              @click="$store.dispatch('basketEditDelete_action', product)"
            >
              <img src="../../assets/pages/basket/delete.png" alt="X" />
            </button>
          </div>
        </div>
      </div>
      <!---->
    </div>
    <div class="recomendation">
      <h2 class="recomendation_title">ДОБАВИТЬ К ЗАКАЗУ</h2>
      <div class="recomendation_list" :ref="`basket_recomendation`" v-scroll>
        <!---->
        <div
          class="recomendation_card"
          v-for="product in $store.getters.Recomendation"
          :key="product.product_id"
        >
          <img :src="product.image" alt="recomendation" />
          <h5 class="recomendation_title">{{ product.name }}</h5>
          <button
            class="recomendation_button_add"
            @click="$store.dispatch('basketEditPlus_action', product)"
          >
            <p class="recomendation_button_title">Добавить</p>
            <p class="recomendation_button_img">+</p>
          </button>
          <p class="recomendation_price">{{ product.price }} ₽</p>
        </div>
        <!---->
      </div>
    </div>
    <hr class="basket_hr" />
    <div class="total_price_div">
      <div>
        <div class="price_row">
          <p class="price_name">Итого:</p>
          <h3>{{ TotalPrice }} ₽</h3>
        </div>
        <div class="price_row">
          <p class="delivery_name">До бесплатной доставки не хватет:</p>
          <p class="delivery_price">{{ thinkDeliveryPrice }} ₽</p>
        </div>
        <div class="price_row">
          <p class="delivery_name">Минимальная сума заказа 1500 ₽</p>
        </div>
      </div>
      <router-link class="total_price_button" to='/ordering'>Оформить заказ</router-link>
    </div>
  </div>
</template>

<script>
import { get_recomendation } from "../../actions/actions";

export default {
  name: "Basket",
  methods: {
    GetBasketProduct() {
      return false;
    },
  },
  mounted() {
    get_recomendation();
  },
  computed: {
    BasketCounter() {
      return this.$store.getters.Basket.length;
    },
    TotalPrice() {
      return this.$store.getters.Basket.map(
        (el) => el.basket * el.price
      ).reduce((a, b) => a + b, 0);
    },
    thinkDeliveryPrice() {
      let total_price = this.$store.getters.Basket.map(
        (el) => el.basket * el.price
      ).reduce((a, b) => a + b, 0);
      return 2000 - total_price < 0 ? 0 : 2000 - total_price;
    },
  },
};
</script>


<style scoped>
.basket_container {
  display: flex;
  flex-direction: column;
  background: linear-gradient(360deg, #211f20 0%, #44403f 100%);
}
.basket_title_back_button {
  margin: 30px 0 0 15%;
}
.basket_button_back {
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
}
.basket_title {
  display: flex;
  align-items: baseline;
}
.basket_title p {
  font-size: 15px;
  font-weight: 500;
  color: rgba(114, 164, 121, 1);
}
.title {
  font-family: Gilroy-ExtraBold;
  font-weight: 700;
  padding-left: 10px;
  border-left: solid 2px rgba(97, 137, 103, 1);
  margin: 20px 10px 40px 0;
}
.basket_list {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(90deg, #494544 0%, #504b4a 100%);
  align-self: center;
  width: 80%;
  border-radius: 10px;
  min-height: 126px;
  padding: 5px 0;
}
.basket_product_card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 126px;
  padding: 10px 0;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.basket_product_card img {
  height: 86px;
  width: 117px;
}
.basket_list_title_description {
  width: 40%;
}
.basket_img_descr {
  width: 80%;
  display: flex;
  align-items: center;
}
.basket_list_title_description h3 {
  font-family: Gilroy-ExtraBold;
  font-weight: 500;
  margin-bottom: 5px;
}
.basket_list_title_description p {
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
}
.basket_interaction {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
}
.basket_list_interaction {
  display: flex;
  align-items: center;
}
.interaction_button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Gilroy-ExtraBold;
  font-size: 32px;
  font-weight: 900;
  border: none;
  background: #72a479;
  border-radius: 50%;
  height: 38px;
  width: 38px;
}
.interaction_button img {
  height: 30px;
  width: 30px;
}
.basket_list_interaction p {
  font-size: 22px;
  font-weight: 900;
  margin: 0 10px;
}
.basket_card_price {
  font-family: Gilroy-ExtraBold;
  font-weight: 500;
  word-wrap: none;
}
.recomendation {
  width: 80%;
  align-self: center;
  margin-top: 50px;
}
.recomendation_title {
  font-family: Gilroy-ExtraBold;
  font-weight: 700;
}
.recomendation_list {
  display: flex;
  align-items: center;
  overflow-x: auto;
  background: linear-gradient(90deg, #494544 0%, #504b4a 100%);
  border-radius: 10px;
  margin: 20px 0;
}
.recomendation_list::-webkit-scrollbar {
  /* chrome based */
  display: none;
  width: 0px; /* ширина scrollbar'a */
  height: 0px;
}
.recomendation_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 35px;
  border-right: 2px solid rgba(255, 255, 255, 0.1);
}
.recomendation_card img {
  height: 123px;
  width: 209px;
  border-radius: 10px;
  margin-bottom: 15px;
}
.recomendation_button_add {
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 10px 0;
}
.recomendation_button_title {
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
}
.recomendation_button_img {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Gilroy-ExtraBold;
  font-weight: 900;
  font-size: 15px;
  height: 18px;
  width: 18px;
  background: rgba(102, 144, 108, 1);
  border-radius: 50%;
  margin-left: 5px;
}
.recomendation_price {
  font-family: Gilroy-ExtraBold;
  font-size: 14px;
  font-weight: 700;
}
.basket_hr {
  width: 75%;
  align-self: center;
  background: rgba(255, 255, 255, 0.2);
  height: 2px;
  border-width: 0;
  margin: 20px 0 60px 0;
}
.total_price_div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #494544 0%, #504b4a 100%);
  align-self: center;
  width: 50%;
  padding: 15px 40px;
  border-radius: 10px;
  margin-bottom: 60px;
}
.price_row {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-top: 5px;
}
.price_row h3 {
  font-family: Gilroy-ExtraBold;
  font-weight: 700;
  margin-left: 5px;
}
.price_name {
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}
.delivery_name {
  font-size: 12px;
  font-weight: 500;
  word-wrap: none;
}
.delivery_price {
  font-size: 12px;
  font-weight: 500;
  color: #72a479;
  margin-left: 5px;
  word-wrap: none;
}
.total_price_button {
  background: linear-gradient(114.93deg, #618967 5.11%, #72a479 94%);
  border: none;
  font-family: Gilroy-ExtraBold;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 16px;
}

@media (max-width: 1001px) {
  .basket_list_title_description p {
    display: none;
  }
  .total_price_div {
    width: 70%;
    padding: 15px 15px;
  }
  .basket_list_title_description {
    width: 40%;
  }
  .basket_img_descr {
    width: 70%;
  }
}

@media (max-width: 651px) {
  .basket_list {
    width: 95%;
  }
  .basket_product_card {
    flex-wrap: inherit;
  }
  .recomendation {
    width: 95%;
  }
  .basket_hr {
    width: 91%;
  }
  .total_price_div {
    width: 95%;
  }
  .basket_title_back_button {
    margin-left: 5%;
  }
}

@media (max-width: 601px) {
  .basket_title_back_button {
    margin-left: 2%;
  }
  .basket_img_descr {
    align-items: flex-start;
    flex-direction: column;
    margin-left: 5px;
  }
  .total_price_div {
    flex-direction: column;
    justify-content: center;
  }
  .price_row {
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
  .total_price_button {
    margin-top: 15px;
  }
  .basket_list_title_description {
    width: 100%;
    margin-bottom: 10px;
  }
  .basket_list_title_description h3 {
    font-size: 16px;
  }
  .basket_card_price {
    font-size: 16px;
  }
  .basket_interaction {
    width: 100%;
  }
  .interaction_button {
    width: 30px;
    height: 30px;
  }
}
</style>