<template>
  <div class="container_home">
    <img
      src="../../assets/pages/home/preview.png"
      alt="preview"
      class="preview_img"
    />
    <Category @SetActiveCategory="SetActiveCategory" />
    <ObjectList
      v-for="object in $store.getters.Categories"
      :key="object.category_id"
      :ref="`object_list_${object.category_id}`"
      :category="object.category_name"
      :array="
        $store.getters.Products.filter(
          (element) => element.category_id === object.category_id
        )
      "
      :id="object.category_id"
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
    SetActiveCategory(category_id) {
      this.$refs[`object_list_${category_id}`][0].$el.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
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
