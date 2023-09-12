<template>
  <ContentLayout :data="contentsList" :pageTitle="route.meta.text" />
</template>
<script>
import { useRoute } from "vue-router";
import contents from "../data/contents.json";
export default {
  setup() {
    const route = useRoute();
    const contentsList = contents;
    return {
      route,
      contentsList,
    };
  },
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: #ffffff;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0px;
}
p {
  margin: 0;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;
}
img {
  display: block;
  width: 100%;
}
</style>
