import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/guideline",
      name: "guideline",
      component: () => import("../views/GuidelinePage.vue"),
    },
  ],
});

export default router;
