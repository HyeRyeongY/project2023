import { createWebHistory, createRouter } from "vue-router";
// import Default from "@/components/default/Index.vue";
import Atype from "@/layout/Atype"; // Atype (magazine)
import Btype from "@/layout/Btype"; // Btype (windowsXP)
import Ctype from "@/layout/Ctype"; // Ctype (typography)
// import webZine from "@/layout/webZine"; // webZine (webZine)
import webZineRouter from "./modules/webZine";

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
        component: () => import("../views/windowsXP/Index.vue"),
        meta: { id: "windowsXP", text: "윈도우 XP" },
      },
    ],
  },
  {
    path: "/",
    name: "Ctype",
    component: Ctype,
    children: [
      {
        path: "/typography",
        name: "typography",
        component: () => import("../views/typography/Index.vue"),
        meta: { id: "typography", text: "타이포그래피" },
      },
    ],
  },
  {
    path: "/",
    name: "Ctype",
    component: Ctype,
    children: [
      {
        path: "/animate",
        name: "animate",
        component: () => import("../views/animate/Index.vue"),
        meta: { id: "animate", text: "애니메이션" },
      },
    ],
  },
  // {
  //   path: "/webZine",
  //   name: "webZine",
  //   // component: webZine,
  //   component: () => import("../views/webZine/Index.vue"),
  //   meta: { id: "webZine", text: "웹진" },
  // children: [
  //   {
  //     path: "/webZine",
  //     name: "webZine",
  //     component: () => import("../views/webZine/Index.vue"),
  //     meta: { id: "webZine", text: "웹진" },
  // childeren: [
  //       {
  //         path: "/webZine/human",
  //         name: "human",
  //         component: () => import("../views/webZine/human/Index.vue"),
  //         meta: { id: "human", text: "사람" },
  //       },
  //       {
  //         path: "/webZine/space",
  //         name: "space",
  //         component: () => import("../views/webZine/space/Index.vue"),
  //         meta: { id: "space", text: "공간" },
  //       },
  //     ],
  // },
  // ],
  // },
  webZineRouter,

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
