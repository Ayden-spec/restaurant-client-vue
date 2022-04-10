<template>
  <header>
    <div class="header_container">
      <h1>LOGOS</h1>
      <label class="header_input_0">
        <img :src="gps" alt="gps" id="gps" />
        <input type="text" placeholder="Введите адрес доставки" />
        <img :src="search" alt="search" id="search" />
      </label>
      <div class="contacts_authorization">
        <div class="header_contacts">
          <img :src="phone" alt="phone" id="phone" />
          <div>
            <p class="header_contacts_title">Контакты</p>
            <p class="header_number">+7(917)510-57-59</p>
          </div>
        </div>
        <label class="header_authorization">
          <img :src="auth" alt="authorization" class="authorization_img" />
          <p>Войти</p>
        </label>
      </div>
      <button class="header_button">
        <img :src="basket" alt="basket" />
        <p class="header_button_text">Корзина</p>
        <p class="header_button_counter"><strong>4</strong></p>
      </button>
    </div>
    <label class="header_input_1">
      <img :src="gps" alt="gps" id="gps" />
      <input type="text" placeholder="Введите адрес доставки" />
      <img :src="search" alt="search" id="search" />
    </label>
  </header>
</template>

<script>
import Phone from "../../assets/header/phone.png";
import Gps from "../../assets/header/gps.png";
import Search from "../../assets/header/search.png";
import Basket from "../../assets/header/basket.png";
import Auth from "../../assets/header/authorization.svg";

export default {
  name: "Header",
  data() {
    return {
      phone: Phone,
      gps: Gps,
      search: Search,
      auth: Auth,
      basket: Basket,
    };
  },
};
</script>


<style scoped>
header {
  display: flex;
  flex-direction: column;
  background: #403c3b;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.header_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
h1 {
  font-family: Gilroy-ExtraBold;
  font-weight: 600;
}
img {
  width: 24px;
  height: 24px;
}
.header_input_0 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 10px;
  background: rgba(80, 75, 74, 1);
  border-radius: 10px;
  width: 30%;
}
.header_input_0 input {
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
  background: transparent;
  width: 100%;
}
.header_input_1 {
  display: none;
}
.contacts_authorization {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header_authorization {
  display: flex;
  align-items: center;
}
.header_authorization p {
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}
.authorization_img {
  margin-right: 5px;
  width: 32px;
  height: 32px;
}
.header_contacts {
  display: flex;
  align-items: center;
  margin-right: 15px;
  padding-right: 15px;
  border-right: solid 2px rgba(255, 255, 255, 0.5);
}
.header_contacts img {
  width: 30px;
  height: 30px;
}
.header_contacts div {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.header_contacts_title {
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: #aaaaaa;
}
.header_number {
  font-family: Gilroy-ExtraBold;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
}
.header_button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: rgba(97, 137, 103, 1);
  padding: 8px 10px;
  border-radius: 10px;
}
.header_button img {
  display: none;
}
.header_button_text {
  padding: 6px 10px 6px 0;
  border-right: solid 2px rgba(255, 255, 255, 0.3);
}
.header_button_counter {
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
}
.header_button_counter strong {
  color: rgba(0, 0, 0, 0.6);
}

@media (max-width: 1001px) {
  .header_contacts {
    display: none;
  }
  .header_input {
    width: 30%;
  }
}
@media (max-width: 701px) {
  .header_authorization p {
    display: none;
  }
}
@media (max-width: 551px) {
  .contacts_authorization {
    order: -1;
  }
  .header_input_0 {
    display: none;
  }
  .header_input_1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    align-self: center;
    margin-top: 15px;
    padding: 8px 10px;
    background: rgba(80, 75, 74, 1);
    border-radius: 10px;
    width: 85%;
  }
  .header_input_1 input {
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: 600;
    background: transparent;
    width: 100%;
  }
  .header_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    background: rgba(97, 137, 103, 1);
    padding: 4px 8px;
    border-radius: 10px;
  }
  .header_button img {
    display: flex;
    height: 24px;
    width: 24px;
  }
  .header_button_text {
    padding: 0 0;
    border-top: solid 2px rgba(255, 255, 255, 0.2);
    border-right: none;
  }
  .header_button_counter {
    display: none;
  }
}
</style>