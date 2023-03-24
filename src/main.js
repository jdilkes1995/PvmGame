import { createApp } from "vue";
import App from "./App.vue";
import router from "../routes.js";
import store from "../store";
import 'material-icons/iconfont/material-icons.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebaseConfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const myApp = createApp(App);
myApp.use(router);
myApp.use(store); // add the Vuex store to the app
myApp.mount("#app");
