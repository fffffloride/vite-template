import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Layout",
    path: "/",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "home",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
