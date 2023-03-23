<template>
  <div class="register">
    <div class="register__form">
      <div class="register__form-tabs">
        <div @click="setHasAccount(true)" class="register__form-tabs__login">
          Sign in
        </div>
        <div
          @click="setHasAccount(false)"
          class="register__form-tabs__register"
        >
          Register
        </div>
      </div>
      <div v-if="!hasAccount" class="register__form-inner">
        <span class="register__form-error">{{ errMsg }}</span>
        <input type="text" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <div class="register__buttons">
          <button class="submit" @click="register">Register</button>
          <button class="google" @click="signInWithGoogle">
            Sign In With Google
          </button>
        </div>
      </div>
      <div v-if="hasAccount" class="register__form-inner">
        <input type="text" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <p v-if="errMsg">{{ this.errMsg }}</p>
        <div class="register__buttons">
          <button class="submit" @click="signIn">Login</button>

          <!-- <router-link to="/Register">Create an account</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      errMsg: null,
      hasAccount: true,
    };
  },
  computed: {
    errorMsg() {
      return this.$store.state.errorMsg;
    },
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", { email: this.email, password: this.password })
        .then(() => {
          this.$router.push("/success");
        })
        .catch((error) => {
          this.errMsg = this.errorMsg;
        });
    },
    signInWithGoogle() {
      this.$store
        .dispatch("signInWithGoogle")
        .then(() => {
          this.$router.push("/success");
        })
        .catch((error) => {
          // handle the error
        });
    },
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
    setHasAccount(value) {
      this.hasAccount = value;
      console.log("hasAccount changed:", this.hasAccount);
    },
  },
};
</script>

<style lang="scss">
.register {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("../assets/potentialBG.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  * {
    margin-bottom: 4px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    padding: 32px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    background: rgb(255, 255, 255);
    border-radius: 4px;
    min-width: 320px;

    &-tabs {
      display: flex;
      background: rgb(255, 255, 255);
      justify-content: space-evenly;
      padding: 16px 0;
      cursor: pointer;

      &__login {
        width: 50%;

        &:hover,
        &:active,
        &:focus {
          background: rgb(0, 157, 255);
          color: white;
          border-radius: 4px;
          border-right: none;
        }
      }

      &__register {
        width: 50%;

        &:hover,
        &:active,
        &:focus {
          background: rgb(0, 157, 255);
          color: white;
          border-radius: 4px;
          border-right: none;
        }
      }
    }

    &-inner {
      display: flex;
      flex-direction: column;
    }

    &-error {
      background: red;
      color: white;
    }
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
