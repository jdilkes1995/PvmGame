import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Success from "@/components/Success.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/success", component: Success },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
