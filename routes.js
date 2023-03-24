import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Success from "@/components/Success.vue";
import Register from "@/components/Register.vue";
import SignIn from "@/components/SignIn.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/success", component: Success },
  { path: "/register", component: Register },
  { path: "/sign", component: SignIn },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
