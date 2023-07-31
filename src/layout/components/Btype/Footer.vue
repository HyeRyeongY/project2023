<template>
  <footer class="taskBar">
    <NavButton :data="NavBtnList" class="start" />

    <div class="copy">
      이 페이지는 상업용이 아닌 개인 포트폴리오용으로 제작되었습니다. <br />
      COPYRIGHTⓒ2023 by yoonhyeryeong. ALL RIGHTS RESERVED
    </div>
  </footer>
</template>
<script setup>
import NavBtnList from "./data/navButton.json";
import NavButton from "./NavButton";
</script>

<style lang="scss" scoped>
.taskBar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 50px;
  background: rgb(36, 94, 220);
  background: linear-gradient(
    0deg,
    rgba(36, 94, 220, 1) 69%,
    rgba(36, 106, 220, 1) 81%,
    rgba(36, 128, 220, 1) 88%,
    rgba(36, 145, 220, 1) 92%,
    rgba(36, 141, 220, 1) 94%,
    rgb(67, 100, 138) 97%
  );

  .copy {
    color: #c4c4c4;
    word-break: keep-all;
    position: absolute;
    bottom: 100%;
    right: 0;
    text-align: right;
  }
}
</style>
