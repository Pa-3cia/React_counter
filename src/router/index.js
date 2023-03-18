import { createWebHistory, createRouter } from "vue-router";
import Counter from "../views/counter-view.vue";
import NotFound from "../views/not-found-view.vue";

const routes = [
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
