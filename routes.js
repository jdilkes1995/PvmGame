import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Success from "@/components/Success.vue";
import Register from "@/components/Register.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/success", component: Success },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isSignedIn = localStorage.getItem("isSignedIn") === "true";
  if (to.path === "/" && isSignedIn) {
    next("/success");
  } else if (to.path !== "/" && !isSignedIn) {
    next("/");
  } else {
    next();
  }
});

export default router;
