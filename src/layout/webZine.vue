<template>
  <div class="webZine_view">
    <MenuBar :data="menuData" />
    <main class="main_container">
      <router-view></router-view>
      <!-- <footer>
        <div>COPYRIGHTⓒ2023 by CITYPLAY. ALL RIGHTS RESERVED</div>
      </footer> -->
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
import MenuBar from "./components/webZine/MenuBar.vue";
</script>
<script>
/* vue */
import { useRouter, useRoute } from "vue-router";
import { onMounted, watch } from "vue";

/* data */
import infoMenu from "@/data/webZine/infoMenu.json";
import menu from "@/data/webZine/menu.json";
export default {
  components: { MenuBar },
  setup() {
    const router = useRouter();
    const route = useRoute();
    let menuData = infoMenu;
    onMounted(() => {
      console.log("router", route.path);
    });
    watch(
      () => route.path,
      (now) => {
        menuData = now !== "/webZine" ? menu : infoMenu;
        console.log("watch:::", route.path, menuData);
      }
    );
    return { router, menuData };
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&display=swap");
@font-face {
  font-family: "SUIT-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}
@import "@/assets/style/webZine/variables.scss";

* {
  font-family: "SUIT-Regular";
  box-sizing: border-box;
}
.webZine_view {
  color: $text_color;
  position: relative;

  .main_container {
    position: absolute;
    top: $header_height;
    background: $background_color;
    width: 100%;
    height: calc(100vh - $header_height);
  }
  footer {
    height: 100px;
    background: $background_color;
    border-top: 1px solid $text_color;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
