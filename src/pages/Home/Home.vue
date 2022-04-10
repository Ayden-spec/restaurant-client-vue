<template>
  <div class="container_home">
    <img
      src="../../assets/pages/home/preview.png"
      alt="preview"
      class="preview_img"
    />
    <Category />
    <div
      class="product_sections"
      v-for="(obj, index) in $store.getters.Categories"
      :key="index"
    >
      <h2>{{ obj.toUpperCase() }}</h2>
      <div
        class="product_sections_scroll_product_card"
        :ref="`scroll_product_card_${index}`"
        @wheel="wheel_product_card($event, index)"
      >
        <ProductCard
          v-for="(product, index) in array"
          :key="index"
          :product="product"
        />
      </div>
    </div>
    <MapContacts />
  </div>
</template>

<script>
import Category from "./Categories.vue";
import ProductCard from "./ProductCard.vue";
import MapContacts from "../../components/Map/Map_Contacts.vue";

export default {
  name: "Home",
  components: {
    Category,
    ProductCard,
    MapContacts,
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
  data() {
    return {
      array: [
        {
          title: "Индейка",
          value: "225",
          price: "450",
          img: "https://i.imgur.com/9Azjmaf.png",
          count: 0,
          description:
            "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
          title: "Индейка",
          value: "230",
          price: "480",
          img: "https://i.imgur.com/9Azjmaf.png",
          count: 1,
          description:
            "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
          title: "Индейка",
          value: "230",
          price: "480",
          img: "https://i.imgur.com/9Azjmaf.png",
          count: 1,
          description:
            "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
          title: "Индейка",
          value: "230",
          price: "480",
          img: "https://i.imgur.com/9Azjmaf.png",
          count: 1,
          description:
            "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
          title: "Индейка",
          value: "230",
          price: "480",
          img: "https://i.imgur.com/9Azjmaf.png",
          count: 1,
          description:
            "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
          title: "Индейка",
          value: "230",
          price: "480",
          img: "https://i.imgur.com/9Azjmaf.png",
          count: 1,
          description:
            "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
          title: "Индейка",
          value: "230",
          price: "480",
          img: "https://i.imgur.com/9Azjmaf.png",
          count: 1,
          description:
            "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
          title: "Индейка",
          value: "230",
          price: "480",
          img: "https://i.imgur.com/9Azjmaf.png",
          count: 1,
          description:
            "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
          title: "Индейка",
          value: "230",
          price: "480",
          img: "https://i.imgur.com/9Azjmaf.png",
          count: 1,
          description:
            "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
        {
          title: "Индейка",
          value: "230",
          price: "480",
          img: "https://i.imgur.com/9Azjmaf.png",
          count: 1,
          description:
            "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
        },
      ],
    };
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
  width: 0px; /* ширина scrollbar'a */
  height: 0px;
}
</style>
