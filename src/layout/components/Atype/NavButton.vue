<template>
  <div
    class="topBtn"
    @mouseenter="btnCursor('enter')"
    @mouseleave="btnCursor('leave')"
  >
    <ul class="menulist" :class="{ active: state.activeMenu }">
      <li
        v-for="(item, idx) in itemList"
        :key="idx"
        class="menulist-item btn-text"
        @click="clickBtn(item)"
      >
        <div class="text">{{ item.text }}</div>
      </li>
    </ul>
    <!-- <span class="btnText">want to see the menu</span> -->
    <div
      class="scrollToTop"
      :class="{ active: state.activeMenu }"
      @click="scrollTop()"
    >
      <!-- ⇡ -->
      <!-- ⋮ -->
      <span v-for="dot in 3" :key="dot" class="dot"></span>
    </div>
  </div>
</template>
<script>
import { reactive, toRef } from "vue";
export default {
  props: {
    data: Array,
  },
  setup(props) {
    const itemList = toRef(props, "data");
    let state = reactive({
      activeMenu: false,
    });

    function clickBtn(item) {
      console.log("click", item.id, item.path);
      if (item.id === "scrollTop") {
        this.scrollTop();
      } else {
        document.querySelector(".");
        this.$router.push(item.path);
      }
    }

    function btnCursor(event) {
      state.activeMenu = event === "enter" ? true : false;
      //   console.log("event", event, state.activeMenu, itemList);
    }

    // 스크롤 맨 위로 실행 함수
    function scrollTop() {
      window.scrollTo(0, 0);
    }
    return {
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
.topBtn {
  position: fixed;
  bottom: 30px;
  right: 30px;

  .menulist {
    position: absolute;
    bottom: 60px;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 180px;
    background-color: #efe8df;
    box-shadow: 0 0 8px rgba(101, 88, 78, 0.8);
    color: #64574d;
    border: 1px solid #64574d;
    border-radius: 8px;
    overflow: hidden;
    opacity: 0;
    transition: 0.2s ease-in-out;
    &.active {
      opacity: 1;
    }
    .menulist-item {
      padding: 4px 0;
      &:hover {
        cursor: pointer;
        background-color: #64574d;
        color: #efe8df;
      }
    }
  }

  .scrollToTop {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    font-size: 35px;
    padding: 5px 8px;
    border: 1px solid #64574d;
    box-shadow: 0 0 8px rgba(101, 88, 78, 0.8);
    background-color: #efe8df;
    color: #64574d;
    transform: rotate(-90deg);
    transition: all 0.5s;
    position: relative;
    .dot {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #64574d;
      &:nth-child(1) {
        left: 30%;
      }
      &:nth-child(3) {
        left: 70%;
      }
    }
    &.active {
      transform: rotate(0deg);
    }
  }
  .btnText {
    font-size: 16px;
    color: #64574d;
    padding-right: 10px;
    vertical-align: bottom;
    opacity: 0;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }
  &:hover {
    .scrollToTop {
      cursor: pointer;
    }
    .btnText {
      opacity: 1;
    }
  }
}
</style>
