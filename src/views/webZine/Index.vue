<template>
  <ul class="content_list">
    <li v-for="(item, idx) in contentsList" :key="idx" class="content_list_item">
      <h1 class="content_title">
        <div>{{ idx + 1 }}</div>
        {{ item.title }}
      </h1>
      <h3 class="content_writer">{{ item.writer }}</h3>
      <img :src="require(`@/assets/images/webZine/img1_1.jpg`)" alt="대표이미지" />
    </li>
  </ul>
</template>
<script>
import contents from "./data/contents.json";
export default {
  setup() {
    let contentsList = contents;
    return {
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
* {
  font-family: "Josefin Sans", sans-serif;
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
