<template>
  <div class="webZine_view">
    <header class="logo_container">
      <div class="logo" @click="router.push('/webZine')">CITYPLAY</div>
      <div v-if="route.path !== '/webZine'">
        <h1 class="page_title">{{ route.meta.text }}</h1>
        <p class="page_sub_title">{{ `[${route.meta.id}]` }}</p>
      </div>
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
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    return { router, route };
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
$background_color: #f5f5f5dd;
$text_color: #333;

* {
  font-family: "SUIT-Regular";
  box-sizing: border-box;
}
.webZine_view {
  color: $text_color;

  .logo_container {
    height: $header_height;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
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
    .page_title {
      font-size: 2rem;
    }
    .page_sub_title {
      font-size: 1rem;
      font-weight: 400;
    }
  }
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
