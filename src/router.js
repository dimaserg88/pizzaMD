import { createRouter, createWebHistory } from "vue-router";
import Home from "./Views/Home.vue";
import Restaurant from "./Views/Restaurant.vue";

const About = { template: "<div>About</div>" };

const routes = [
  { path: "/", component: Home },
  { path: "/restaurant/:slug", component: Restaurant },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
