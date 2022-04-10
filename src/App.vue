<template>
  <Header />
  <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue"

export default {
  mame: "App",
  components: {
    Header,
    Footer,
  },
};
</script>


<style>
@font-face {
    font-family: Gilroy;
    src: url('./assets/fonts/gilroy/Gilroy-Light.otf');
}

@font-face {
    font-family: Gilroy-ExtraBold;
    src: url('./assets/fonts/gilroy/Gilroy-ExtraBold.otf');
}
* {
  margin: 0;
  padding: 0;
  color: rgb(100, 100, 100);
  box-sizing: border-box;
  font-family: Gilroy;
  color: white;
}
#nav{background: #555;}
</style>
