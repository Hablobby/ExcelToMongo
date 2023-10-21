import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import "primevue/resources/themes/lara-light-teal/theme.css";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
