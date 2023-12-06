<template>
  <header class="contents_top">
    <!-- <Arrow deg="180" @clickArrow="clickArrow" /> -->
    <!-- <div>
      <h1 class="page_title">{{ pageTitle.text }}</h1>
      <h3>{{ `[${pageTitle.id}]` }}</h3>
    </div> -->
  </header>
  <div class="content_layout">
    <aside class="content_aside">
      <div class="content_aside_header">
        <div class="page_title">{{ pageTitle.id.toUpperCase() }}</div>
        <div class="page_title_kor">{{ pageTitle.text }}</div>
      </div>
      <ul class="content_list">
        <li
          v-for="(item, idx) in data"
          :key="idx"
          class="content_list_item"
          :class="{ active: nowIdx.value === idx }"
          @click="clickContent(item, idx)"
        >
          <div class="content_title">
            {{ item.title }}
          </div>
        </li>
      </ul>
      <div class="content_aside_footer">
        <ul class="content_list">
          <li
            v-for="menu in infoMenu"
            :key="menu.menuCd"
            class="content_list_item"
            @click="clickInfoMenu(menu)"
          >
            <div class="content_title">
              {{ menu.text }}
            </div>
          </li>
        </ul>
      </div>
    </aside>
    <section class="img_section">
      <div v-for="(item, idx) in nowContents.img" :key="idx">
        <!-- {{ item + `@/assets/images/webZine/${item}` }} -->
        <img
          :src="require(`@/assets/images/webZine/${item}`)"
          alt="콘텐츠 이미지"
        />
      </div>
    </section>
    <section class="text_section">
      <div>{{ nowContents.title }}</div>
      <div>{{ nowContents.contents }}</div>
    </section>
  </div>
</template>
<script setup>
/* data */
import infoMenu from "@/data/webZine/infoMenu.json";
// import contents from "@/data/webZine/contents.json";

import { useRouter } from "vue-router";
import { onMounted, ref, defineProps } from "vue";
const props = defineProps({
  data: {
    type: Array,
    required: true, // 필수로 넣어야함
    default() {
      return [];
    },
  },
  pageTitle: {
    type: Object,
    required: false, // 필수가 아님
    default() {
      return {};
    },
  },
});
const nowContents = ref({}); // 현재 출력되는 콘텐츠(선택된 콘텐츠)
const nowIdx = ref(0);
let router = useRouter();

onMounted(() => {
  clickContent(props.data[0], 0);
});
// 뒤로가기 클릭
// function clickArrow() {
//   router.push("/webZine");
// }
// 콘텐츠 클릭
function clickContent(item, idx) {
  nowContents.value = item;
  nowIdx.value = idx ? idx : 0;
  // console.log("콘텐츠클릭, ", item, idx, nowContents.value.img, nowIdx.value);
}
// InfoMenu 클릭
function clickInfoMenu(menu) {
  router.push("/webZine" + menu.path);
  console.log("clickInfoMenu", menu, router);
}
</script>
<style lang="scss">
@import "@/assets/style/webZine/variables.scss";
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
  position: fixed;
  top: 100px;
  left: 20px;
  .page_title {
    display: inline-block;
    width: 100%;
    margin-right: 40px;
    text-align: center;
  }
}
.content_layout {
  display: grid;
  grid-template-columns: 400px 1fr 1fr;
  height: calc(100vh - $header_height);
  .content_aside {
    background: $primary;
    color: $white;
    text-align: left;
    padding-top: 16px;
    position: relative;
    .page_title,
    .page_title_kor {
      font-size: 4rem;
      padding: 0 40px;
    }
    .page_title_kor {
      font-size: 2rem;
    }
    .content_aside_footer {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
  section {
    padding: 40px;
    text-align: left;
    height: 100%;
    overflow-y: auto;
  }
  section.img_section {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  section.text_section {
    border-left: solid 1px #000;
  }
}

.content_list {
  width: 100%;
  margin: 0 auto;
  padding-top: 28px;
  cursor: pointer;
  .content_list_item {
    padding: 16px 40px;
    // margin: 20px 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border-top: 1px solid $white;
    &.active::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
      background: $white;
    }
    .content_title {
      word-break: keep-all;
      font-size: 1.5rem;
      // display: flex;
      // gap: 10px;
      div {
        font-size: 1rem;
        padding-right: 4px;
      }
    }

    .content_img_container {
      position: relative;
      width: 100%;
      padding-top: 50%; /* 1:1 = 100%, 2:1 = 50%, 1:2 = 200%, 4:3 = 75%, 16:9 = 56.25%  */
      overflow: hidden;
      .content_img {
        color: #fff;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        max-width: 100%;
        height: auto;
        .no_img {
          width: 30%;
        }
      }
    }
    .content_writer {
      text-align: right;
    }
  }
}
</style>
