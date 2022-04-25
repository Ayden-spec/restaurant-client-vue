<template>
  <div class="oredring_container">
    <router-link class="ordering_back" to="/basket">&lt; в корзину</router-link>
    <h1 class="ordering_title">ОФОРМЛЕНИЕ ЗАКАЗА</h1>

    <div class="ordering_form_error" v-if="error !== ''">
      <h3>{{ error }}</h3>
    </div>

    <div class="ordering_form">
      <p class="ordering_form_title">1. Контактная информация</p>
      <div class="ordering_form_inputs">
        <div class="width_49">
          <Input
            placeholder="Имя*"
            type="text"
            :value="name"
            @updateInput="name = $event"
          />
        </div>
        <div class="width_49">
          <Input
            placeholder="Телефон*"
            type="text"
            :value="phone_number"
            @updateInput="phone_number = $event"
          />
        </div>
      </div>
    </div>

    <div class="ordering_form">
      <p class="ordering_form_title">2. Доставка</p>

      <div class="ordering_form_selector">
        <div class="ordering_selector">
          <button
            @click="delivery_selector = 'delivery'"
            :class="{ active_selector_left: delivery_selector === 'delivery' }"
          >
            Доставка
          </button>
          <button
            @click="delivery_selector = 'pickup'"
            :class="{ active_selector_right: delivery_selector === 'pickup' }"
          >
            Самовывоз
          </button>
        </div>

        <div
          class="ordering_form_selector_row"
          v-if="delivery_selector === 'delivery'"
        >
          <img src="../../assets/pages/ordering/time.png" alt="time" />
          <p>Доставим через 1 час 30 минут</p>
        </div>
      </div>

      <div
        class="ordering_delivery_address"
        v-if="delivery_selector === 'delivery'"
      >
        <p class="ordering_delivery_address_title">Адрес доставки</p>

        <div class="ordering_form_inputs">
          <div class="width_64">
            <Input
              placeholder="Укажите улицу*"
              type="text"
              :value="street"
              @updateInput="street = $event"
            />
          </div>
          <div class="width_34">
            <Input
              placeholder="Номер дома*"
              type="text"
              :value="house_number"
              @updateInput="house_number = $event"
            />
          </div>
        </div>

        <div class="ordering_form_inputs">
          <div class="width_34">
            <Input
              placeholder="№ квартиры/офиса"
              type="text"
              :value="apartment_number"
              @updateInput="apartment_number = $event"
            />
          </div>
          <div class="width_31">
            <Input
              placeholder="Подъезд"
              type="text"
              :value="entrace"
              @updateInput="entrace = $event"
            />
          </div>
          <div class="width_31">
            <Input
              placeholder="Этаж"
              type="text"
              :value="floor"
              @updateInput="floor = $event"
            />
          </div>
        </div>

        <div class="ordering_form_inputs">
          <div class="width_100">
            <Input
              placeholder="Комментарий"
              type="text"
              :value="comment"
              @updateInput="comment = $event"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="ordering_form">
      <p class="ordering_form_title">3. Оплатить</p>

      <div class="ordering_form_selector">
        <div class="ordering_selector">
          <button
            @click="payed = 'online'"
            :class="{ active_selector_left: payed === 'online' }"
          >
            Онлайн
          </button>
          <button
            class="selector_middle"
            @click="payed = 'courier'"
            :class="{ active_selector_middle: payed === 'courier' }"
          >
            Картой
          </button>
          <button
            @click="payed = 'cash'"
            :class="{ active_selector_right: payed === 'cash' }"
          >
            Наличными
          </button>
        </div>
      </div>

      <div class="ordering_form_inputs" v-if="payed === 'cash'">
        <div>
          <Input
            placeholder="Сдача с"
            type="number"
            :value="change"
            @updateInput="change = $event"
          />
        </div>
      </div>
    </div>

    <div class="ordering_form">
      <p class="ordering_form_title">4. Когда доставить</p>

      <div class="ordering_form_selector">
        <div class="ordering_selector">
          <button
            @click="time_delivery = 'soon'"
            :class="{ active_selector_left: time_delivery === 'soon' }"
          >
            Ближайшее время
          </button>
          <button
            @click="time_delivery = 'time'"
            :class="{ active_selector_right: time_delivery === 'time' }"
          >
            Ко времени
          </button>
        </div>

        <div class="ordering_form_selector_row" v-if="time_delivery === 'time'">
          <div class="ordering_form_time">
            <Input
              placeholder="Укажите время*"
              type="time"
              :value="time"
              @updateInput="time = $event"
            />
          </div>
        </div>
      </div>

      <div class="couter_person">
        <h4>Кол-во персон:</h4>
        <button @click="counter = counter - 1 < 0 ? 0 : counter - 1">-</button>
        <p>{{ counter }}</p>
        <button @click="counter = counter + 1">+</button>
      </div>

      <div class="ordering_form_inputs">
        <div>
          <p class="ordering_delivery_address_title">Хотите мы позвоним?</p>
          <div>
            <Checkbox
              placeholder="Не перезванивать"
              @UpdateCheckbox="call_checkbox = $event ? 1 : call_checkbox"
              :check="call_checkbox === 1"
            />
          </div>
          <div class="checkbox">
            <Checkbox
              placeholder="Потребуется звонок оператора"
              @UpdateCheckbox="call_checkbox = $event ? 2 : call_checkbox"
              :check="call_checkbox === 2"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="ordering_form_row">
      <div>
        <Checkbox
          @UpdateCheckbox="agreement = $event"
          :check="agreement"
          placeholder="Cогласен на обработку перс. данных "
        />
        <p>Условия</p>
      </div>
      <button @click="ChangeForm">Оформить заказ</button>
    </div>
  </div>
</template>

<script>
import Input from "../../components/Input/Input.vue";
import Checkbox from "../../components/Checkbox/Checkbox.vue";
import {
  get_user_info,
  update_user_info,
  add_order,
} from "../../actions/actions";

export default {
  components: {
    Input,
    Checkbox,
  },
  mounted() {
    get_user_info((element) => {
      this.name = element.name === null ? "" : element.name;
      this.street = element.street === null ? "" : element.street;
      this.apartment_number =
        element.apartment_number === null ? "" : element.apartment_number;
      this.entrace = element.entrance === null ? "" : element.entrance;
      this.phone_number = element.number === null ? "+7" : element.number;
      this.house_number =
        element.house_number === null ? "" : element.house_number;
      this.floor = element.floor === null ? "" : element.floor;
    });
  },
  data() {
    return {
      delivery_selector: "delivery", // 'delivery', 'pickup'
      payed: "online", // 'online', 'courier', 'cash'
      time_delivery: "soon", //'soon', 'time'
      call_checkbox: 1,
      counter: 1,
      agreement: false,

      name: "",
      phone_number: "+7",
      street: "",
      house_number: "",
      apartment_number: "",
      entrace: "",
      floor: "",
      comment: "",

      change: "",

      time: "",

      error: "",
    };
  },
  methods: {
    ChangeForm() {
      if (this.delivery_selector === "pickup") {
        this.street = "";
        this.house_number = "";
        this.apartment_number = "";
        this.entrace = "";
        this.floor = "";
        this.comment = "";
      } else {
        if (this.street === "" && this.house_number === "") {
          this.error = "Заполните все поля";
          return;
        }
      }
      if (this.time_delivery === "time" && this.time === "") {
        this.error = "Заполните все поля";
        return;
      }
      if (!this.agreement) {
        this.error = "Дайте согласие на обработку персональных данных";
        return;
      }
      if(this.$store.getters.Basket.length === 0){
        this.error = "Корзину пустая!";
        return
      }
      this.error = "";
      if (this.$store.getters.IsAuth) {
        update_user_info(
          this.name,
          this.phone_number,
          this.street,
          this.house_number,
          this.apartment_number,
          this.entrace,
          this.floor
        );
      }
      add_order(
        this.phone_number,
        this.name,
        this.delivery_selector,
        this.street,
        this.house_number,
        this.apartment_number,
        this.entrace,
        this.floor,
        this.comment,
        this.payed,
        this.change,
        this.time_delivery,
        this.counter,
        this.time,
        this.call_checkbox,
        this.time,
        this.$store.getters.Basket
      );
    },
  },
};
</script>


<style scoped>
.oredring_container {
  display: flex;
  flex-direction: column;
  background: linear-gradient(360deg, #211f20 0%, #44403f 100%);
}
.ordering_back {
  margin: 30px 0 30px 10%;
  font-size: 18px;
  font-weight: 500;
  font-family: Gilroy-ExtraBold;
}
.ordering_title {
  padding: 0 0 0 20px;
  margin: 0 0 40px 10%;
  border-left: 4px solid rgba(97, 137, 103, 0.6);
  font-family: Gilroy-ExtraBold;
  font-weight: 700;
}

.ordering_form {
  width: 80%;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 15px;
  background: linear-gradient(90deg, #494544 0%, #504b4a 100%);
  align-self: center;
}
.ordering_form_title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 15px;
}
.ordering_form_inputs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

.ordering_delivery_address {
  width: 80%;
}
.ordering_delivery_address_title {
  font-size: 16px;
  font-weight: 700;
  margin: 20px 0;
}

.width_49 {
  width: 49%;
}
.width_64 {
  width: 64%;
}
.width_34 {
  width: 34%;
}
.width_31 {
  width: 31%;
}
.width_100 {
  width: 100%;
}

.ordering_form_selector {
  display: flex;
  align-items: center;
}
.ordering_form_selector img {
  height: 16px;
  width: 16px;
  margin: 0 10px 0 20px;
}
.ordering_form_time {
  margin-left: 20px;
}
.ordering_selector {
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid rgba(114, 164, 121, 1);
}
.ordering_selector button {
  padding: 20px 40px;
  border: none;
  background: transparent;
  white-space: nowrap;
}
.selector_middle {
  border-right: 2px solid #618967 !important;
  border-left: 2px solid #618967 !important;
}
.active_selector_left {
  background: linear-gradient(114.93deg, #618967 5.11%, #72a479 94%) !important;
  border-radius: 10px 0 0 10px;
}
.active_selector_middle {
  background: linear-gradient(114.93deg, #618967 5.11%, #72a479 94%) !important;
}
.active_selector_right {
  background: linear-gradient(114.93deg, #618967 5.11%, #72a479 94%) !important;
  border-radius: 0 10px 10px 0;
}

.couter_person {
  width: 24%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.couter_person button {
  font-family: Gilroy-ExtraBold;
  font-weight: 700;
  font-size: 30px;
  border: none;
  background: transparent;
}
.checkbox {
  margin-top: 10px;
}

.ordering_form_row {
  width: 80%;
  padding: 30px;
  margin-bottom: 60px;
  border-radius: 15px;
  background: linear-gradient(90deg, #494544 0%, #504b4a 100%);
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ordering_form_row div {
  display: flex;
  align-items: center;
}
.ordering_form_row div p {
  font-size: 16px;
  font-weight: 600;
  margin-left: 5px;
  color: #618967;
  text-decoration: underline;
  cursor: pointer;
}
.ordering_form_row button {
  font-size: 16px;
  font-weight: 600;
  margin-left: 5px;
  background: rgba(97, 137, 103, 1);
  padding: 15px 20px;
  border-radius: 10px;
  border: none;
}
.ordering_form_selector_row {
  display: flex;
  align-items: center;
}

.ordering_form_error {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 15px;
  background: white;
  align-self: center;
}
.ordering_form_error h3 {
  color: #cc1e1e;
  font-family: Gilroy-ExtraBold;
  font-weight: 500;
}

@media (max-width: 1051px) {
  .ordering_back {
    margin: 30px 0 30px 5%;
  }
  .ordering_title {
    margin: 0 0 40px 5%;
  }
  .ordering_form {
    width: 90%;
  }
  .ordering_form_row {
    width: 90%;
  }
}

@media (max-width: 701px) {
  .ordering_back {
    margin: 30px 0 30px 2.5%;
  }
  .ordering_title {
    margin: 0 0 40px 2.5%;
  }
  .ordering_form {
    width: 95%;
  }
  .ordering_form_row {
    width: 95%;
  }
  .ordering_form_inputs {
    flex-direction: column;
    margin: 0 0 0 0;
  }
  .width_49 {
    width: 100%;
    margin-top: 10px;
  }
  .width_64 {
    width: 100%;
    margin-top: 10px;
  }
  .width_34 {
    width: 100%;
    margin-top: 10px;
  }
  .width_31 {
    width: 100%;
    margin-top: 10px;
  }
  .width_100 {
    margin-top: 10px;
  }
  .ordering_form_inputs {
    margin-top: 10px;
    width: 100%;
  }
  .ordering_form_inputs div {
    width: 100%;
  }
  .ordering_selector {
    width: 100%;
  }
  .ordering_selector button {
    width: 50%;
  }
  .ordering_form_selector {
    flex-direction: column;
  }
  .ordering_form_selector_row {
    margin-top: 20px;
    width: 100%;
  }
  .ordering_delivery_address {
    width: 100%;
  }
  .ordering_form_time {
    width: 100%;
    margin-left: 0;
  }
  .couter_person {
    width: 100%;
  }
  .ordering_form_row {
    flex-direction: column-reverse;
  }
  .ordering_form_row button {
    margin-bottom: 20px;
  }
  .ordering_selector button {
    padding: 20px 0;
  }
  .ordering_form {
    padding: 10px;
  }
}
</style>