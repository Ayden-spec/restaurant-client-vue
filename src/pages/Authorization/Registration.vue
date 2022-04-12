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
      <button class="login_button" @click="Authorization">Войти</button>
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
    Authorization() {
      registration(this.Email,this.Password,this.Name,()=>{console.log('Готово!')});
    },
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
</style>