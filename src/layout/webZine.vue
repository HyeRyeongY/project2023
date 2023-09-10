<template>
  <div class="webZine_view">
    <header class="logo_container">
      <div class="logo" @click="router.push('/webZine')">CITYPLAY</div>
    </header>
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
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    return { router };
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
$header_height: 80px;
$background_color: #f5f5f5;
$text_color: #333;

* {
  font-family: "SUIT-Regular";
  box-sizing: border-box;
}
.webZine_view {
  background: $background_color;
  color: $text_color;
  height: 100vh;
  width: 100vw;

  .logo_container {
    height: $header_height;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    font-size: 40px;
    font-weight: 500;
    z-index: 99;
    border-bottom: 1px solid $text_color;
    // backdrop-filter: blur(10px);
    background: $background_color;
    .logo {
      font-family: "Bagel Fat One", cursive;
      cursor: pointer;
    }
  }
  .main_container {
    position: absolute;
    top: $header_height;
    width: 100%;
    // left: 50%;
    // transform: translateX(-50%);
    // width: calc(100% - 100px);
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
