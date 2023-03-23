<template>
  <div class="register">
    <div class="register__form">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <p v-if="errMsg">{{ this.errMsg }}</p>
      <div class="register__buttons">
        <button class="submit" @click="signIn">Login</button>

        <p><router-link to="/Register">Create an account</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

export default {
  data() {
    return {
      email: null,
      password: null,
      errMsg: null,
    };
  },
  computed: {
    errorMsg() {
      return this.$store.state.errorMsg;
    },
  },
  methods: {
    signIn() {
      this.$store
        .dispatch("signIn", { email: this.email, password: this.password })
        .then(() => {
          this.$router.push("/success");
        })
        .catch((error) => {
          this.errMsg = this.errorMsg;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    margin-bottom: 4px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    padding: 32px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  }
  &__buttons {
    button {
      padding: 8px 16px;
      width: auto;
      border: none;
      margin-top: 8px;
      margin-right: 8px;
      font-weight: 700;
      cursor: pointer;
      border-radius: 4px;

      &:hover,
      &:focus,
      &:active {
        text-decoration: underline;
      }
    }

    .submit {
      background: rgb(0, 157, 255);
      color: white;
    }

    .google {
      background: rgba(0, 157, 255, 0.216);
      color: black;
    }
  }
  input {
    width: auto;
    padding: 4px 8px;
    border: none;

    &:hover,
    &:focus,
    &:active {
      border: rgb(0, 157, 255) solid 2px;
      border-radius: 5px;
      font-size: 16px;
    }
  }
}
</style>
