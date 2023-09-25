import { createWebHistory, createRouter } from "vue-router";
// import Default from "@/components/default/Index.vue";
import Atype from "@/layout/Atype"; // Atype (magazine)
import Btype from "@/layout/Btype"; // Btype (windowsXP)
import Ctype from "@/layout/Ctype"; // Ctype (typography)
// import webZine from "@/layout/webZine"; // webZine (webZine)
import webZineRouter from "./modules/webZine";

const routes = [
  // {
  // path: "/404",
  // name: "notFound",
  // component: NotFound
  // },
  {
    path: "*",
    redirect: "/magazine",
    // 아래처럼 바로 NotFound 경로를 매칭해도 됨
    // component: NotFound
  },
  {
    path: "/",
    name: "Main",
    redirect: "magazine", // 메인 화면
  },
  {
    path: "/",
    name: "magazine",
    component: Atype,
    children: [
      {
        path: "/magazine",
        name: "Magazine",
        component: () => import("@/views/magazine/Index.vue"),
        meta: { id: "magazine", text: "잡지" },
      },
    ],
  },
  {
    path: "/",
    name: "Btype",
    component: Btype,
    children: [
      {
        path: "/windowsXP",
        name: "windowsXP",
        component: () => import("@/views/windowsXP/Index.vue"),
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
        component: () => import("@/views/typography/Index.vue"),
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
        component: () => import("@/views/animate/Index.vue"),
        meta: { id: "animate", text: "애니메이션" },
      },
    ],
  },
  webZineRouter, // 웹진

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
