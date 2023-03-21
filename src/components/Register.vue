<template>
<p><input type="text" placeholder="Email" v-model="email" /></p>
<p><input type="password" placeholder="Password" v-model="password" /></p>
<p><button @click="register">Submit</button></p>
<p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>




<script setup>
import { ref } from "vue";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const email = ref("");
const password = ref("");
const register = () => {

    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Registeration Done");
        })
        .catch((error) => {
            console.log("Error Registering")
            alert(error.message);
        })

};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(result.user);
    })
    .catch((error) => {
            //handle the error
    });
}



</script>





<style></style>
