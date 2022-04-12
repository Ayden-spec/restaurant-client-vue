<template>
  <div class="container_product_card">
    <img :src="product.image" alt="product" />

    <div class="product_card_counter" v-if="GetBasketProduct()">
      <strong>{{ GetBasketProduct().basket }}</strong>
    </div>

    <div class="product_card_title_value">
      <h3>{{ product.name }}</h3>
      <p>Вес: {{ product.mass }} г</p>
    </div>
    <p class="product_card_description">{{ product.description }}</p>

    <div class="product_card_buttons" v-if="GetBasketProduct()">
      <button class="product_card_button" @click="$store.dispatch('basketEditMinus_action', product)">-</button>
      <p>{{ product.price }} ₽</p>
      <button class="product_card_button" @click="$store.dispatch('basketEditPlus_action', product)">+</button>
    </div>

    <div class="product_card_buttons" v-else>
      <p>{{ product.price }} ₽</p>
      <button class="product_card_basket" @click="$store.dispatch('basketEditPlus_action', product)">
        В корзину
        <img src="../../assets/pages/basket.png" alt="basket" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product_Card",
  props: {
    product: Object,
  },
  methods:{
    GetBasketProduct(){
      return this.$store.getters.Basket.find(el=>el.product_id === this.$props.product.product_id)
    }
  },
};
</script>


<style scoped>
.container_product_card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 385px;
  width: 325px;
  left: 0px;
  top: 0px;
  border-radius: 10px;
  background: linear-gradient(90deg, #494544 0%, #504b4a 100%);
  margin-right: 35px;
}
.container_product_card img {
  height: 227px;
  width: 325px;
}
.product_card_counter {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(97, 137, 103, 1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  right: -14px;
  top: -14px;
}
.product_card_title_value {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
}
.product_card_title_value h3 {
  font-family: Gilroy-ExtraBold;
  font-weight: 600;
}
.product_card_title_value p {
  font-size: 13px;
  font-weight: 500;
  color: #cfcfcf;
}
.product_card_description {
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  color: rgba(207, 207, 207, 1);
  width: 90%;
}
.product_card_buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 76%;
  margin-bottom: 20px;
}
.product_card_button {
  background: rgba(97, 137, 103, 1);
  font-size: 30px;
  font-family: Gilroy-ExtraBold;
  font-weight: bold;
  padding: 0px 20px;
  border: none;
  border-radius: 10px;
}
.product_card_buttons p {
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
}

.product_card_basket {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;

  background: rgba(97, 137, 103, 1);
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
}

.product_card_basket img {
  width: 24px;
  height: 24px;
}
</style>