<template>
  <label>
    <input type="checkbox" :checked="check" @change="handleCheckbox" />
    <div class="border">
      <div class="check" :class="{ done: check }"></div>
    </div>
    <p>{{ placeholder }}</p>
  </label>
</template>

<script>
export default {
  name: "Checkbox",
  props: ["placeholder", "check"],
  methods: {
    handleCheckbox(e) {
      this.$emit("UpdateCheckbox", e.target.checked);
    },
  },
};
</script>

<style scoped>
label {
  display: inline-block;
  display: flex;
  flex-direction: row;
  align-items: center;
}
input {
  display: none;
}
.border {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: #fff;
  border: solid 2px rgba(114, 164, 121, 1);
  border-radius: 50%;
}
.check {
  display: inline-block;
  background: #fff;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.done {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(114, 164, 121, 1);
}
p {
  font-size: 16px;
  font-weight: 600;
  margin-left: 5px;
}
</style>
