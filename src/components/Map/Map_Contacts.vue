<template>
  <div class="map_and_contacts">
    <Map />
    <div class="contacts">
      <Contacts />
    </div>
  </div>
</template>

<script>
import Map from "./Map.vue";
import Contacts from "./Contacts.vue";

export default {
  components: {
    Map,
    Contacts,
  },
};
</script>


<style scoped>
.map_and_contacts {
  position: relative;
  height: 665px;
}
.contacts {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(20%, 30%);
}

@media (max-width: 651px) {
  .contacts {
    top: 0px;
    left: 20px;
    transform: translate(0%, 10%);
  }
}
@media (max-width: 551px) {
  .map_and_contacts {
    height: 900px;
  }
}
</style>