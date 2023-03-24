import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Success from "@/components/Success.vue";
import Register from "@/components/Register.vue";
// import SignIn from "@/components/SignIn.vue";
import MyTeam from "@/components/MyTeam.vue";
import CreateTeam from "@/components/CreateTeam.vue";
import Play from "@/components/Play.vue";
import UserSettings from "@/components/UserSettings.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/success", component: Success },
  { path: "/MyTeam", component: MyTeam },
  { path: "/CreateTeam", component: CreateTeam },
  { path: "/UserSettings", component: UserSettings },
  { path: "/Play", component: Play },
  {
    path: "/register",
    component: Register,
    meta: {
      hideNavbar: true,
    },
  },
  // { path: "/sign", component: SignIn },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isSignedIn = localStorage.getItem("isSignedIn") === "true";

  if (to.path !== "/register" && !isSignedIn) {
    next("/register");
  } else {
    next();
  }
});

export default router;
