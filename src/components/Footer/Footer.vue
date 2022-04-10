<template>
  <footer>
    <div class="footer_img_description">
      <img src="../../assets/footer/footer.png" alt="up" />
      <div class="footer_description">
        <h2>LOGOS</h2>
        <p>© ООО СК «АПШЕРОН»<br/>Все права защищены. 2010-2020</p>
        <router-link to="/" class="footer_description_link"
          >Пользовательское соглашение</router-link
        >
        <router-link to="/" class="footer_description_link"
          >Политика конфиденциальности</router-link
        >
      </div>
    </div>
    <div class="footer_link_div">
      <router-link to="/">О ресторане</router-link>
      <router-link to="/">Условия доставки</router-link>
      <router-link to="/">Возврат товара</router-link>
      <router-link to="/">Акции</router-link>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0;
  background: linear-gradient(270.7deg, #44403f 0.4%, #211f20 100%);
}
img {
  height: 64px;
  width: 64px;
}
h2 {
  font-family: Gilroy-ExtraBold;
  font-weight: 700;
  margin-bottom: 15px;
}
.footer_img_description {
  display: flex;
  align-items: center;
}
.footer_description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
}
.footer_description p {
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  color: rgba(255, 255, 255, 0.7);
}
.footer_description_link {
  margin-top: 5px;
}
.footer_link_div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  width: 50%;
}

@media (max-width: 901px) {
  .footer_link_div{
    display: none;
  }
  .footer_description{
    align-items: center;
  }
}
</style>