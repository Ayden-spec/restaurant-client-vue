<template>
  <div class="container_home">
    <img
      src="../../assets/pages/home/preview.png"
      alt="preview"
      class="preview_img"
    />
    <Category />
    <ObjectList
      v-for="(obj, index) in $store.getters.Categories"
      :key="index"
      :title="obj"
      :id="index"
    />
    <MapContacts />
  </div>
</template>

<script>
import Category from "./Categories.vue";
import ObjectList from "./ObjectList.vue";
import MapContacts from "../../components/Map/Map_Contacts.vue";

export default {
  name: "Home",
  components: {
    Category,
    MapContacts,
    ObjectList,
  },
  methods: {
    wheel_product_card(event, index) {
      this.$refs[`scroll_product_card_${index}`][0].scrollBy(
        2 * event.deltaY,
        0
      );
      event.preventDefault();
    },
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
