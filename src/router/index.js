import { createWebHistory, createRouter } from "vue-router";
// import Default from "@/components/default/Index.vue";
import Atype from "@/layout/Atype"; // Atype (magazine)
import Btype from "@/layout/Btype"; // Btype (windowsXP)
import Ctype from "@/layout/Ctype"; // Ctype (typography)

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
        meta: { id: "magazine", text: "잡지" },
      },
      // {
      //   path: "/typography",
      //   name: "typography",
      //   component: () => import("../views/typography/Index.vue"),
      //   meta: { id: "typography", text: "타이포그래피" },
      // },
    ],
  },
  {
    path: "/",
    name: "Btype",
    component: Btype,
    // component: () => import("../views/windowsXp/Index.vue"),

    children: [
      {
        path: "/windowsXP",
        name: "windowsXP",
        component: () => import("../views/windowsXp/Index.vue"),
        meta: { id: "windowsXP", text: "윈도우 XP" },
      },
    ],
  },
  {
    path: "/",
    name: "Ctype",
    component: Ctype,
    // component: () => import("../views/windowsXp/Index.vue"),

    children: [
      {
        path: "/typography",
        name: "typography",
        component: () => import("../views/typography/Index.vue"),
        meta: { id: "typography", text: "타이포그래피" },
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
