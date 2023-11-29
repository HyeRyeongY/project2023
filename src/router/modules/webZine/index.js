import webZine from "@/layout/webZine"; // webZine (webZine)

const webZineRouter = {
  path: "/",
  name: "",
  component: webZine,
  //   meta: {id: 'webZine', title: '모니터링' },
  children: [
    {
      path: "/webZine",
      name: "webZine",
      component: () => import("@/views/webZine/Index.vue"),
      meta: { id: "webZine", text: "웹진" },
    },
    {
      path: "/webZine/life",
      name: "life",
      component: () => import("@/views/webZine/life/Index.vue"),
      meta: { id: "life", text: "일상" },
    },
    {
      path: "/webZine/work",
      name: "work",
      component: () => import("@/views/webZine/work/Index.vue"),
      meta: { id: "human", text: "일" },
    },
    {
      path: "/webZine/space",
      name: "space",
      component: () => import("@/views/webZine/space/Index.vue"),
      meta: { id: "space", text: "공간" },
    },
    {
      path: "/webZine/about",
      name: "about",
      component: () => import("@/views/webZine/about/Index.vue"),
      meta: { id: "about", text: "어바웃" },
    },
    {
      path: "/webZine/contact",
      name: "contact",
      component: () => import("@/views/webZine/contact/Index.vue"),
      meta: { id: "contact", text: "콘텍트" },
    },
  ],
};
export default webZineRouter;
