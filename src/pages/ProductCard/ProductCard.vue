<template>
  <div class="product_container">
    <button class="product_back_button">
      <img src="../../assets/pages/product/back.png" alt="back" />
      <p>Вернуться назад</p>
    </button>
    <div class="product_card">
      <img src="https://i.imgur.com/9Azjmaf.png" alt="product" />
      <div class="product_card_info">
        <div>
          <h2 class="product_card_info_title">Title</h2>
          <p class="product_card_description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ex
            dolores atque dolore iusto dicta, mollitia molestias, tempore
            pariatur minima esse, aperiam deleniti corrupti non aliquid maiores
            ipsam qui alias.
          </p>
        </div>
        <div class="product_card_info_button">
          <p class="product_weight">Вес: 210 г</p>
          <div class="product_button_price">
            <button class="product_basket">
              <p>Корзина</p>
              <img src="../../assets/pages/product/basket.png" alt="basket" />
            </button>
            <h2 class="price">259 ₽</h2>
          </div>
          <div class="product_card_compounds">
            <hr />
            <div class="product_card_compound">
              <p class="product_compound_name">Белки</p>
              <p class="product_compound_value">17.23</p>
            </div>
            <div class="product_card_compound">
              <p class="product_compound_name">Жиры</p>
              <p class="product_compound_value">17.23</p>
            </div>
            <div class="product_card_compound">
              <p class="product_compound_name">Углеводы</p>
              <p class="product_compound_value">17.23</p>
            </div>
            <div class="product_card_compound">
              <p class="product_compound_name">Ккал</p>
              <p class="product_compound_value">17.23</p>
            </div>
            <div class="product_card_compound">
              <p class="product_compound_name">Вес</p>
              <p class="product_compound_value">17.23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="product_card_hr" />
    <MapContacts />
  </div>
</template>

<script>
import MapContacts from "../../components/Map/Map_Contacts.vue";

export default {
  name: "ProductCard",
  components: {
    MapContacts,
  },
};
</script>


<style scoped>
.product_container {
  background: linear-gradient(360deg, #211f20 0%, #44403f 100%);
  display: flex;
  flex-direction: column;
}
.product_back_button {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
  border: none;
  margin: 40px 0 30px 11%;
}
.product_back_button img {
  height: 26px;
  width: 26px;
  margin-right: 10px;
}
.product_card {
  background: linear-gradient(90deg, #494544 0%, #504b4a 100%);
  display: flex;
  flex-direction: row;
  align-self: center;
  border-radius: 10px;
  width: 80%;
}
.product_card img {
  height: 400px;
  width: 600px;
}
.product_card_info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 30px 20px 30px;
}
.product_card_info_title {
  font-family: Gilroy-ExtraBold;
  font-weight: 700;
  margin-bottom: 10px;
}
.product_card_description {
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  color: rgba(255, 255, 255, 0.6);
}
.product_weight {
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
}
.product_button_price {
  display: flex;
  align-items: center;
}
.product_basket {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  background: linear-gradient(114.93deg, #618967 5.11%, #72a479 94%);
  padding: 7px 10px;
}
.product_basket p {
  padding: 10px 10px 10px 0;
  border-right: solid 2px rgba(255, 255, 255, 0.4);
}
.product_basket img {
  height: 19px;
  width: 19px;
  margin-left: 12px;
}
.price {
  font-family: Gilroy-ExtraBold;
  font-weight: 700;
  margin-left: 40px;
}
.product_card_compounds {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-top: 35px;
}
.product_card_compounds hr {
  position: absolute;
  width: 100%;
  height: 1px;
  border-width: 0;
  background: rgba(255, 255, 255, 0.1);
}
.product_card_compound {
  margin-right: 40px;
}
.product_compound_name {
  font-size: 12px;
  font-weight: 300;
  line-height: 14px;
  letter-spacing: 0em;
  margin-bottom: 8px;
}
.product_compound_value {
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
}
.product_card_hr {
  width: 100%;
  height: 1px;
  border-width: 0;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(136,136,136,0.6) 50%, rgba(255,255,255,0) 100%);
  margin: 40px 0;
}
</style>