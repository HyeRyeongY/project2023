<template>
  <header class="navbar">
    <section class="logo_container">
      <!-- 로고 이미지 -->
      <!-- <div class="logo" @click="router.push('/webZine')">CITYPLAY</div> -->
      <SvgIcon :icon="'cityplay_logo'" class="logo_img" />
      <!-- <object :data="require(`@/assets/icon/svg/cityplay_logo.svg`)"></object> -->
    </section>
    <section class="nav_menu">
      <!-- 메뉴 -->
      <ul>
        <li v-for="menu in menuList" :key="menu.menuCd" class="menu_list">
          {{ menu.text }}
        </li>
      </ul>
    </section>
  </header>
</template>
<script setup>
/* components */
import SvgIcon from "@/components/webZine/SvgIcon.vue";
</script>

<script>
/* vue */
import { computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  props: {
    data: {
      type: Array,
    },
  },
  setup(props) {
    let router = useRouter();
    let route = useRoute();
    onMounted(() => {
      console.log("navbar::", router, route);
    });
    const menuList = computed(() => {
      console.log("menuList::", props.data);
      return props.data;
    });
    return { menuList, router };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/webZine/variables.scss";
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  height: $header_height;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 40px;
  font-weight: 500;
  z-index: 99;
  border-bottom: 1px solid $text_color;
  background: $background_color;
  .logo_img {
    width: 200px;
    color: $primary;
    cursor: pointer;
  }
  .nav_menu ul {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }
  .logo {
    font-family: "Bagel Fat One", cursive;
    cursor: pointer;
  }
}
</style>
