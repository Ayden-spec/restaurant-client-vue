<template>
  <div class="container_categories" ref="categories" @wheel="categoryWheel">
    <p
      v-for="(category, index) in $store.getters.Categories"
      :key="index"
      :class="{ active_category: index === active }"
      @click="active = index"
    >
      {{ category }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    categoryWheel(event) {
      if (event.deltaY != 0) {
        this.$refs.categories.scrollBy(2 * event.deltaY, 0);
        event.preventDefault();
      }
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