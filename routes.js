import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Success from "@/components/Success.vue";
import Register from "@/components/Register.vue";
import MyTeam from "@/components/MyTeam.vue";
import CreateTeam from "@/components/CreateTeam.vue";
import Play from "@/components/Play.vue";
import UserSettings from "@/components/UserSettings.vue";
import PlayerGear from "@/components/PlayerGear";

const routes = [
  { path: "/", component: Home },
  { path: "/success", component: Success },
  { path: "/MyTeam", component: MyTeam },
  { path: "/CreateTeam", component: CreateTeam },
  { path: "/UserSettings", component: UserSettings },
  { path: "/Play", component: Play },
  { path: "/PlayerGear", component: PlayerGear },
  {
    path: "/register",
    component: Register,
    meta: {
      hideNavbar: true,
    },
  },
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
