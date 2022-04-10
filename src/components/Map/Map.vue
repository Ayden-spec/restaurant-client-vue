<template>
  <yandex-map :coords="coords" :zoom="zoom" :controls="controls" class="map">
    <ymap-marker
      v-for="marker in markers"
      :key="marker.id"
      :marker-id="marker.id"
      :coords="marker.location"
      :icon="{
        layout: 'default#image',
        imageHref: 'https://i.imgur.com/cWwFIas.png',
        imageSize: [98, 112],
        imageOffset: [-15, -35],
      }"
    />
  </yandex-map>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      coords: [55.021452, 82.970744],
      controls: [], //["rulerControl", "zoomControl"]
      zoom: 15,
      markers: [
        { id: 0, location: [55.021452, 82.970744] },
      ],
    };
  },
};
</script>

<style scoped>
.map {
  height: 100%;
  filter: grayscale(1) brightness(0.8) invert(0.9);
}
</style>