<template>
    
    <div class="login">
        
        <form @Sumbit.prevent="login">
        <input type="text" placeholder="Email" v-model="email"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <button class="submit" @click="login">Login</button>
        <p>Not registered? <router-link to="/">Register here</router-link></p>
        </form>

    </div>

</template>


<script>

import { 
    getAuth, 
    signInWithEmailAndPassword 
} from "firebase/auth";

export default {
    data() {
    return {
      email: null,
      password: null,
    };
},

    methods: {
        signin() {
        signInWithEmailAndPassword(getAuth(), email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        this.$router.push("/success");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
                });
            },
        },
    };
</script>

<style>

</style>