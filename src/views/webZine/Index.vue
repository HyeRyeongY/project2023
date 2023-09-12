<template>
  <ul class="menu_container">
    <li
      v-for="menu in menuList"
      :key="menu.menuCd"
      class="menu_item"
      @click="clickMenu(menu)"
    >
      <section
        class="menu_top"
        @mouseover="arrowHover = true"
        @mouseleave="arrowHover = false"
      >
        <div class="menu_title">
          <h1>{{ menu.text }}</h1>
          <p>{{ `[${menu.menuCd}]` }}</p>
        </div>
        <div class="menu_arrow"><span></span><span></span><span></span></div>
      </section>
      <div class="img_container">
        <img
          :src="require(`@/assets/images/webZine/${menu.img}`)"
          alt="메뉴이미지"
        />
      </div>
      <div class="menu_disc">{{ menu.disc }}</div>
    </li>
  </ul>
</template>
<script>
import menuList from "@/data/webZine/menu.json";
import contents from "./data/contents.json";
// import { onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    let contentsList = contents;
    let arrowHover;
    function clickMenu(menu) {
      // console.log("clickMenu::", "/webZine" + menu.path);
      router.push("/webZine" + menu.path);
    }
    return {
      contentsList,
      menuList,
      clickMenu,
      arrowHover, // 메뉴 클릭
    };
  },
};
</script>
<style lang="scss">
$header_height: 80px;
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
.menu_container {
  width: 100%;
  height: calc(100vh - $header_height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  background: $background_color;
}
.menu_item {
  width: 100%;
  height: 100%;
  padding: 20px;
  font-size: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  &:not(:last-child) {
    border-right: 1px solid $text_color;
  }
  .menu_top {
    display: flex;
    justify-content: space-between;
    height: 100%;
    .menu_arrow {
      position: relative;
      width: 40px;
      height: 40px;
      span {
        background: $text_color;
        position: absolute;
        width: 75%;
        height: 2px;
        top: 25%;
        left: 100%;
        transform: translate(-180%, -50%) rotate(45deg);
        opacity: 0;
        transition: all 0.4s ease-in-out;
        &:nth-child(2) {
          top: 75%;
          transform: translate(-180%, -50%) rotate(-45deg);
        }
        &:nth-child(3) {
          width: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-150%, -50%) rotate(0);
          transition: all 0.2s ease-in-out 0.2s;
        }
      }
    }
  }
  .img_container {
    img {
      filter: grayscale(100%);
      transition: all 0.4s ease-in-out 0.1s;
    }
  }
  .menu_disc {
    height: 100%;
    text-align: right;
  }
  &:hover {
    .menu_arrow {
      span {
        opacity: 1;
        transform: translate(-80%, -50%) rotate(45deg);
        &:nth-child(2) {
          transform: translate(-80%, -50%) rotate(-45deg);
        }
        &:nth-child(3) {
          width: 100%;
          transform: translate(-50%, -50%) rotate(0);
        }
      }
    }
    .img_container {
      img {
        filter: grayscale(0%);
      }
    }
  }
}
</style>
