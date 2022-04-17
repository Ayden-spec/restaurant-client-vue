<template>
  <div class="container_categories" v-scroll>
    <p
      v-for="category in $store.getters.Categories"
      :key="category.category_id"
      :class="{ active_category: category.category_id === active }"
      @click="setActivCategory(category.category_id)"
    >
      {{ category.category_name }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    setActivCategory(index) {
      this.active = index;
      this.$emit("SetActiveCategory", index);
    },
  },
};
</script>

<style scoped>
.container_categories {
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  scroll-behavior: smooth;
}

.container_categories::-webkit-scrollbar {
  /* chrome based */
  display: none;
  width: 0px; /* ширина scrollbar'a */
  height: 0px;
}

p {
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  padding: 15px 0;
  margin: 0 3%;
}

.active_category {
  border-bottom: #618967;
  border-bottom-style: solid;
}
</style>