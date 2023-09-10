<template>
  <ContentLayout :data="contentsList" />
</template>
<script>
import ContentLayout from "@/components/webZine/ContentLayout.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import contents from "../data/contents.json";
export default {
  setup() {
    const route = useRoute();
    function setContent() {
      this.contentsList = contents;
    }
    onMounted(() => {
      // DOM이 마운트 되었을 때 이벤트 핸들러를 등록한다.
      // this.setContent();
      // console.log("meta::", this.$router.meta);
    });
    return { route, setContent, ContentLayout };
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
.content_list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  .content_list_item {
    .content_title {
      display: flex;
      gap: 10px;
      div {
        font-size: 1rem;
        padding-right: 4px;
      }
    }
  }
}
</style>
