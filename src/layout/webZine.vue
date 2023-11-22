<template>
  <div class="webZine_view">
    <Navbar />
    <main class="main_container">
      <router-view></router-view>
      <footer>
        <!-- <v-icon>mdi-instagram</v-icon> -->
        <div>COPYRIGHTⓒ2023 by CITYPLAY. ALL RIGHTS RESERVED</div>
      </footer>
    </main>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";
import Navbar from "@/layout/components/webZine/MenuBar.vue";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      console.log("router", route);
    });
    return { router, Navbar };
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

  .main_container {
    position: absolute;
    top: $header_height;
    background: $background_color;
    width: 100%;
    min-height: 100vh;
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
