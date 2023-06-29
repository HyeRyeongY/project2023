<template>
  <div
    class="topBtn"
    @click="clickMore()"
    @mouseenter="btnCursor('enter')"
    @mouseleave="btnCursor('leave')"
  >
    <ul class="menulist" :class="{ active: state.activeMenu || state.clickOpen }">
      <li
        v-for="(item, idx) in itemList"
        :key="idx"
        class="menulist-item btn-text"
        @click="clickBtn(item)"
      >
        <div class="text">
          {{ item.text }}
          <span v-if="state.nowPath === item.id" class="now">Now!</span>
        </div>
      </li>
    </ul>
    <!-- <span class="btnText">want to see the menu</span> -->
    <div class="scrollToTop" :class="{ active: state.activeMenu }" @click="scrollTop()">
      <!-- ⇡ -->
      <!-- ⋮ -->
      <!-- <template v-if="state.nowPath === 'windowsXP'">
        <img src="@/assets/images/windowsXP/wXPLogo.png" class="start-logo" />시작
      </template>
      <template v-else> -->
      <span v-for="dot in 3" :key="dot" class="dot"></span>
      <!-- </template> -->
    </div>
  </div>
</template>
<script>
import { reactive, toRef } from "vue";
// onMounted
import { useRouter, useRoute } from "vue-router";
// onBeforeRouteUpdate, onBeforeRouteLeave
export default {
  props: {
    data: Array,
  },
  setup(props) {
    let router = useRouter();
    let route = useRoute();
    const itemList = toRef(props, "data");
    let state = reactive({
      activeMenu: false,
      clickOpen: false,
      nowPath: route.meta.id,
    });

    //
    function clickMore() {
      state.clickOpen = !state.activeMenu ? false : true;
    }

    // 버튼 클릭
    function clickBtn(item) {
      if (item.id === "scrollTop") {
        this.scrollTop();
      } else {
        router.push(item.path);
        state.nowPath = item.id;
        // console.log("click", state.nowPath);
      }
    }

    // 버튼에 마우스 오버 & 아웃
    function btnCursor(event) {
      state.activeMenu = event === "enter" ? true : false;
      //   console.log("event", event, state.activeMenu, itemList);
    }

    // 스크롤 맨 위로 실행 함수
    function scrollTop() {
      window.scrollTo(0, 0);
    }

    // 초기 스타일 적용
    // onMounted(() => {
    //   import("@/css/navButton/" + route.meta.id + ".scss");
    // });
    // 라우터 전환 시 SCSS 파일을 동적으로 import하고 스타일을 적용
    // onBeforeRouteUpdate((to) => {
    // if (to.meta.id !== "windowsXP") return;
    // import("@/css/navButton/" + to.meta.id + ".scss");
    // .then((module) => {
    //   module.default.apply();
    //   next();
    // })
    // .catch((error) => {
    //   console.error(error);
    //   next();
    // });
    // });

    // 컴포넌트를 떠날 때 SCSS 스타일을 해제
    // onBeforeRouteLeave((to, from, next) => {
    // SCSS 스타일을 해제하는 로직을 여기에 작성
    // next();
    // });

    return {
      clickMore,
      clickBtn,
      btnCursor,
      scrollTop,
      itemList,
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/css/navButton/magazine.scss";
</style>
