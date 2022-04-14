<template>
  <div class="product_container">
    <router-link class="product_back_button" to="/">
      <img src="../../assets/pages/product/back.png" alt="back" />
      <p>Вернуться назад</p>
    </router-link>
    <div class="product_card">
      <img
        src="../../assets/pages/product/back_mobile.png"
        alt="back"
        class="product_card_back_img"
      />
      <img
        :src="$store.getters.Product.image"
        alt="product"
        class="product_card_img"
      />
      <div class="product_card_info">
        <div class="product_card_info_decription">
          <h2 class="product_card_info_title">
            {{ $store.getters.Product.name }}
          </h2>
          <p class="product_card_description">
            {{ $store.getters.Product.compound }}
          </p>
        </div>
        <div class="product_card_info_button">
          <p class="product_weight">Вес: {{ $store.getters.Product.mass }} г</p>
          <div class="product_button_price">
            <router-link
              class="product_basket"
              to="/basket"
              @click="
                $store.dispatch('basketEditAdd_action', $store.getters.Product)
              "
            >
              <p>Корзина</p>
              <img src="../../assets/pages/product/basket.png" alt="basket" />
            </router-link>
            <h2 class="price">{{ $store.getters.Product.price }} ₽</h2>
          </div>
          <div class="product_card_compounds">
            <hr />
            <div class="product_card_compound">
              <p class="product_compound_name">Белки</p>
              <p class="product_compound_value">
                {{ $store.getters.Product.squirrels }}
              </p>
            </div>
            <div class="product_card_compound">
              <p class="product_compound_name">Жиры</p>
              <p class="product_compound_value">
                {{ $store.getters.Product.fats }}
              </p>
            </div>
            <div class="product_card_compound">
              <p class="product_compound_name">Углеводы</p>
              <p class="product_compound_value">
                {{ $store.getters.Product.carbohydrates }}
              </p>
            </div>
            <div class="product_card_compound">
              <p class="product_compound_name">Ккал</p>
              <p class="product_compound_value">
                {{ $store.getters.Product.kilocalories }}
              </p>
            </div>
            <div class="product_card_compound">
              <p class="product_compound_name">Вес</p>
              <p class="product_compound_value">
                {{ $store.getters.Product.mass }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="product_card_hr" />
    <ObjectList
      category="С ЭТИМ ТОВАРОМ ПОКУПАЮТ"
      id="ProductCard"
      :array="$store.getters.Recomendation"
    />
    <MapContacts />
  </div>
</template>

<script>
import MapContacts from "../../components/Map/Map_Contacts.vue";
import ObjectList from "../Home/ObjectList.vue";

import { get_product_id, get_recomendation } from "../../actions/actions";

export default {
  name: "ProductCard",
  components: {
    MapContacts,
    ObjectList,
  },
  mounted() {
    get_product_id(this.$route.params.id);
    get_recomendation();
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
  width: auto;
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
  position: relative;
  border-radius: 10px;
  width: 80%;
}
.product_card_back_img {
  display: none;
}
.product_card_img {
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
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(136, 136, 136, 0.6) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  margin: 40px 0;
}

@media (max-width: 1401px) {
  .product_back_button {
    margin: 40px 0 30px 6%;
  }
  .product_card {
    width: 90%;
  }
  .product_card_img {
    height: auto;
    width: 500px;
  }
}
@media (max-width: 1001px) {
  .product_card_img {
    width: 50%;
    height: auto;
  }
}
@media (max-width: 801px) {
  .product_card_img {
    width: 45%;
    height: auto;
  }
  .product_card_compound {
    margin-right: 20px;
  }
}

@media (max-width: 651px) {
  .product_back_button {
    display: none;
  }
  .product_card_back_img {
    position: absolute;
    display: flex;
    left: 10px;
    top: 10px;
    height: 37px;
    width: 37px;
  }
  .product_card_img {
    width: 100%;
    height: auto;
  }
  .product_card {
    flex-direction: column;
    border-radius: none;
    width: 100%;
  }
  .product_card_info_decription {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product_card_description {
    text-align: center;
  }
  .product_card_info_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    width: 100%;
  }
  .product_card_compounds {
    width: 90%;
    justify-content: space-between;
  }
  .product_card_compound {
    margin-right: 0;
  }
  .product_card_info {
    padding: 20px 10px 20px 10px;
  }
}
@media (max-width: 351px) {
  .product_card_compounds {
    width: 100%;
  }
  .product_card_info {
    padding: 20px 5px 20px 5px;
  }
}
</style>