<template>
  <div class="product_sections">
    <h2>{{ category.toUpperCase() }}</h2>
    <div class="product_sections_scroll_product_card" v-scroll>
      <ProductCard
        v-for="product in array"
        :key="product.product_id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  name: "ObjectList",
  components: {
    ProductCard,
  },
  props: ["category", "id", "array"],
};
</script>

<style scoped>
.product_sections {
  width: 96%;
  margin-left: 2%;
  padding: 30px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.product_sections h2 {
  padding: 0 20px;
  border-left: 4px solid rgba(97, 137, 103, 0.6);
  font-family: Gilroy-ExtraBold;
  font-weight: 700;
  margin-bottom: 20px;
}
.product_sections_scroll_product_card {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  overflow-x: scroll;
}
.product_sections_scroll_product_card::-webkit-scrollbar {
  /* chrome based */
  display: none;
  width: 0px; /* ширина scrollbar'a */
  height: 0px;
}
</style>
