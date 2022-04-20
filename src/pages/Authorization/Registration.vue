<template>
  <div class="auth_container">
    <div class="auth_div">
      <h2>Регистрация</h2>
      <div class="login_inp">
        <Input
          placeholder="Email"
          :type="'text'"
          @updateInput="Email = $event"
        />
      </div>
      <div class="login_inp">
        <Input placeholder="Name" :type="'text'" @updateInput="Name = $event" />
      </div>
      <div class="login_inp">
        <Input
          placeholder="Password"
          :type="'password'"
          @updateInput="Password = $event"
        />
      </div>
      <div class="buttons">
        <router-link to="/login" class="button">Войти</router-link>
        <button class="button" @click="Registration">Регистрация</button>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../../components/Input/Input.vue";
import { registration } from "../../actions/actions";

export default {
  name: "Registration",
  components: {
    Input,
  },
  data() {
    return {
      Email: "",
      Name: "",
      Password: "",
    };
  },
  methods: {
    Registration() {
      registration(this.Email, this.Password, this.Name, () => {
        this.$router.push("/login");
      });
    },
  },
  mounted() {
    if (this.$store.getters.IsAuth) this.$router.push("/");
  },
};
</script>


<style scoped>
.auth_container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background: linear-gradient(360deg, #211f20 0%, #44403f 100%);
}
h2 {
  font-family: Gilroy-ExtraBold;
  font-weight: 800;
}
.auth_div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #5a5a5a;
  border: solid 1px #000;
  padding: 15px;
  border-radius: 15px;
  width: 30%;
}
.login_inp {
  width: 90%;
  margin: 10px 0;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 10px;
}
.button {
  border: none;
  background: rgba(97, 137, 103, 0.6);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 15px;
  font-family: Gilroy-ExtraBold;
  font-weight: 600;
}

@media (max-width: 1051px) {
  .auth_div {
    width: 50%;
  }
}
@media (max-width: 701px) {
  .auth_div {
    width: 80%;
  }
}
@media (max-width: 401px) {
  .auth_div {
    width: 95%;
  }
}
</style>