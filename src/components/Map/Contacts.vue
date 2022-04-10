<template>
  <div class="map_contacts_container">
    <h1>Контакты</h1>
    <hr />
    <div class="contacts_description_div">
      <img src="../../assets/Map/gps.png" alt="gps" />
      <div>
        <p class="contacts_description_title">Наш адрес:</p>
        <p class="contacts_description">
          МО, городской округ Красногорск, село Ильинкое, Экспериментальная
          улица, 10
        </p>
      </div>
    </div>
    <div class="contacts_description_div">
      <img src="../../assets/Map/email.png" alt="email" />
      <div>
        <p class="contacts_description_title">Наша почта:</p>
        <p class="contacts_description">auto.wash@gmail.com</p>
      </div>
    </div>
    <hr />
    <div class="button_contact">
      <button>ЗАБРОНИРОВАТЬ СТОЛ</button>
      <div>
        <p class="number">+7 (917) 510-57-59</p>
        <p class="number_desc">Звоните или оставляйте заявку</p>
      </div>
    </div>
    <div class="contact_social">
      <p>Мы в соц сетях:</p>
      <img src="../../assets/Map/facebook.png" alt="facebook" />
      <img src="../../assets/Map/vk.png" alt="vk" />
      <img src="../../assets/Map/youtube.png" alt="youtube" />
      <img src="../../assets/Map/instagram.png" alt="instagram" />
    </div>
  </div>
</template>

<style scoped>
.map_contacts_container {
  background: rgba(46, 43, 44, 1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 500px;
  border-radius: 20px;
}
h1 {
  font-family: Gilroy-ExtraBold;
  font-weight: 700;
}
hr {
  height: 1px;
  border-width: 0;
  margin: 20px 0;
  background: linear-gradient(
    90deg,
    rgba(136, 136, 136, 0.1) 5%,
    rgba(136, 136, 136, 0.6) 15%,
    rgba(136, 136, 136, 0.6) 85%,
    rgba(136, 136, 136, 0.1) 95%
  );
}
.contacts_description_div {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px 0 10px 20px;
}
.contacts_description_div img {
  height: 24px;
  width: 24px;
  margin-right: 10px;
}
.contacts_description_title {
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  color: rgb(196, 196, 196);
}
.contacts_description {
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
}
.button_contact {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.button_contact button {
  font-family: Gilroy-ExtraBold;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  background: linear-gradient(114.93deg, #618967 5.11%, #72a479 94%);
  padding: 15px 20px;
  border: none;
  border-radius: 12px;
}
.number {
  font-family: Gilroy-ExtraBold;
  font-size: 23px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
}
.number_desc {
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
}
.contact_social {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
}
.contact_social p {
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
}
.contact_social img {
  height: 19px;
  width: 19px;
  margin-left: 7px;
}

@media (max-width: 551px) {
  .map_contacts_container {
    width: 80%;
    padding: 25px;
  }
  .contacts_description_div {
    margin: 10px 0;
  }
  .button_contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .button_contact button {
    margin-bottom: 10px;
  }
}
@media (max-width: 401px) {
  .map_contacts_container {
    width: 95%;
  }
}
</style>