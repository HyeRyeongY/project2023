import { createWebHistory, createRouter } from "vue-router";
// import Default from "@/components/default/Index.vue";
import Atype from "@/layout/Atype"; // Atype

const routes = [
  {
    path: "/",
    name: "Main",
    component: Atype,
    children: [
      {
        path: "",
        name: "Magazine",
        component: () => import("../views/magazine/Index.vue"),
        meta: { id: "magazine" },
      },
      {
        path: "/windowsXp",
        name: "WindowsXp",
        component: () => import("../views/windowsXp/Index.vue"),
        meta: { id: "windowsXp" },
      },
    ],
  },

  // {
  //   path: "/:title", // 이런 식으로 작성하면 동적 라우팅이 가능함 예) $route.params.title
  //   name: "Main",
  //   component: Main,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
