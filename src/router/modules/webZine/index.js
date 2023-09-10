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
      path: "/webZine/human",
      name: "human",
      component: () => import("@/views/webZine/human/Index.vue"),
      meta: { id: "human", text: "사람" },
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
