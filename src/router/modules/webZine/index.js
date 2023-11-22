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
  ],
};
export default webZineRouter;
