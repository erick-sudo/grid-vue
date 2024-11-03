import { createRouter, createWebHistory } from "vue-router";
import Signup from "../components/auth/Signup.vue";
import Signin from "../components/auth/Signin.vue";
import HomeView from "../pages/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/signup", component: Signup },
  { path: "/signin", component: Signin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
