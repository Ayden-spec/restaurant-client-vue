<template>
  <div class="container_home">
    <img
      src="../../assets/pages/home/preview.png"
      alt="preview"
      class="preview_img"
    />
    <Category />
    <ObjectList
      v-for="(object, index) in $store.getters.Categories"
      :key="index"
      :category="object.category_name"
      :array="
        $store.getters.Products.filter(
          (element) => element.category_id === object.category_id
        )
      "
      :id="index"
    />
    <MapContacts />
  </div>
</template>

<script>
import Category from "./Categories.vue";
import ObjectList from "./ObjectList.vue";
import MapContacts from "../../components/Map/Map_Contacts.vue";
import { get_categories_products } from "../../actions/actions";

export default {
  name: "Home",
  components: {
    Category,
    MapContacts,
    ObjectList,
  },
  methods: {
    wheel_product_card(event, index) {
      this.$refs[`scroll_product_card_${index}`][0].scrollBy(event.deltaY, 0);
      event.preventDefault();
    },
  },
  mounted() {
    get_categories_products();
  },
};
</script>

<style scoped>
.container_home {
  background: linear-gradient(360deg, #211f20 0%, #44403f 100%);
}
.preview_img {
  width: 100%;
}
</style>
