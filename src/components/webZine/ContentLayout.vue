<template>
  <header class="contents_top">
    <Arrow deg="180" @clickArrow="clickArrow" />
    <h1>{{ pageTitle }}</h1>
  </header>
  <ul class="content_list">
    <li v-for="(item, idx) in data" :key="idx" class="content_list_item">
      <h1 class="content_title">
        <div>{{ idx + 1 }}</div>
        {{ item.title }}
      </h1>
      <h3 class="content_writer">{{ item.writer }}</h3>
      <img
        :src="require(`@/assets/images/webZine/img1_1.jpg`)"
        alt="대표이미지"
      />
    </li>
  </ul>
</template>
<script>
// import { onMounted } from "vue";
// import contents from "@/data/webZine/contents.json";

import { useRouter } from "vue-router";
// import { toRef } from "vue";
export default {
  name: "ContentsList",
  props: {
    data: {
      type: Array,
      required: true, // 필수로 넣어야함
      default() {
        return [];
      },
    },
    pageTitle: {
      type: String,
      required: false, // 필수가 아님
      default: "",
    },
  },
  setup() {
    let router = useRouter();
    function clickArrow() {
      router.push("/webZine");
    }
    return {
      clickArrow,
    };
  },
};
</script>
<style lang="scss">
$background_color: #f5f5f5;
$text_color: #333;
body {
  margin: 0;
  padding: 0;
  background: #ffffff;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0px;
}
p,
h1,
h2,
h3,
h4,
h5 {
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
* {
  font-family: "Josefin Sans", sans-serif;
}
.contents_top {
  display: flex;

  align-items: center;
  padding: 20px;
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
