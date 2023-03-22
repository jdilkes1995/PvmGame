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
  import {
    signInWithEmailAndPassword,
    getAuth,
  } from "firebase/auth";
  
  export default {
    data() {
      return {
        email: null,
        password: null,
        errMsg: null,

      };
    },
    methods: {
      signIn() {
        signInWithEmailAndPassword(getAuth(), this.email, this.password,)
          .then((data) => {  
            console.log("Signed in");
            console.log(data);
            this.$router.push("/success");
          })
          .catch((error) => {
            console.log("Error logging In");
            this.errMsg = error.message;
            switch (error.code) {
              case "auth/invalid-email":
                this.errMsg.value = "Invalid email";
                break;
              case "auth/user-not-found":
                this.errMsg.value = "No account with that email found";
                break;
              case "auth/wrong-password":
                this.errMsg.value = "Invalid password";
                break;
              default:
                this.errMsg.value = "Email or password was Incorrect"
                break; 
            
            
            
            }
          })
         
      },
    },  
  };
  </script>
  
  <style lang="scss">
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
  