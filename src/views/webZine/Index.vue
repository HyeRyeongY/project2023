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
          <div class="eng">{{ menu.menuCd }}</div>
          <p>{{ menu.text }}</p>
        </div>

        <div class="menu_arrow"><span></span><span></span><span></span></div>
      </section>
      <div class="img_container">
        <img :src="require(`@/assets/images/webZine/${menu.img}`)" alt="" />
        <!-- <div class="content_img_container">
            <div class="content_img">
              <object :data="require(`@/assets/icon/svg/noImg.svg`)" class="no_img"></object> -->

        <!-- <svg
            :src="require(`@/assets/icon/svg/noImg.svg`)"
            alt="이미지없음"
            class="no_img"
          /> -->
        <!-- </div>
          </div> -->
      </div>
    </li>
  </ul>
</template>
<script>
/* vue */
// import { onMounted } from "vue";
import { useRouter } from "vue-router";
/* data */
import menuList from "@/data/webZine/menu.json";
import contents from "./data/contents.json";
export default {
  setup() {
    const router = useRouter();
    let contentsList = contents;
    let arrowHover;
    function clickMenu(menu) {
      console.log("clickMenu::", "/webZine" + menu.path);
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
  padding: 40px 60px 60px;
  font-size: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  cursor: pointer;
  &:not(:last-child) {
    border-right: 1px solid $text_color;
  }
  .menu_top {
    display: flex;
    justify-content: space-between;
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
    overflow: hidden;
    // img {
    //   filter: grayscale(100%);
    //   transition: all 0.4s ease-in-out 0.1s;
    // }
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
    // .img_container {
    //   img {
    //     filter: grayscale(0%);
    //   }
    // }
  }
}
</style>
