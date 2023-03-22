import { createApp } from "vue";
import App from "./App.vue";
import router from "../routes.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzw5olXetOkW91jpoTSwzQST1N3FT_WDI",
  authDomain: "pvmgame-4fabb.firebaseapp.com",
  projectId: "pvmgame-4fabb",
  storageBucket: "pvmgame-4fabb.appspot.com",
  messagingSenderId: "756415847452",
  appId: "1:756415847452:web:eae000c02fe83e3a07d3d9",
  measurementId: "G-0T2TNJ1J6Q",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// createApp(App).mount("#app");
const myApp = createApp(App);
myApp.use(router);
myApp.mount("#app");
