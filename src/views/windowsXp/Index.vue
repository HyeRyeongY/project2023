<template>
  <div class="windowsXP">
    <img src="@/assets/images/windowsXP/wXPBg.jpg" alt="배경이미지" class="background" />
    <ul class="icon-container">
      <li v-for="(icon, idx) in iconList" :key="idx">
        <img
          :src="require(`@/assets/images/windowsXP/${icon.img}.png`)"
          :alt="icon.text"
          class="icon-img"
          :class="{ folder: idx === 2 || idx === 3 || idx === 4 }"
        />
        <div class="icon-text">{{ icon.text }}</div>
      </li>
    </ul>
    <section class="taskBar">
      <div class="start">
        <img src="@/assets/images/windowsXP/wXPLogo.png" class="start-logo" />시작
      </div>
    </section>
  </div>
</template>
<script>
export default {
  setup() {
    const iconList = [
      { img: "myComputer", text: "내 컴퓨터" },
      { img: "wXPInternet", text: "인터넷" },
      { img: "folder", text: "새폴더" },
      { img: "folderDoc", text: "문서" },
      { img: "folderMusic", text: "음악" },
    ];
    return {
      iconList,
    };
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "NEXON Lv2 Gothic";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "NeoDunggeunmoPro-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/NeoDunggeunmoPro-Regular.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}
.windowsXP {
  font-family: "NEXON Lv2 Gothic";
  letter-spacing: 2px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
}
.icon-container {
  position: fixed;
  top: 30px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    padding: 4px;
  }
  .icon-img {
    min-width: 50px;
    width: 5vw;
    &.folder {
      margin-left: 8px;
    }
  }
  .icon-text {
    color: #ffffff;
    text-shadow: 1px 2px 3px rgb(0, 0, 0);
  }
}
.taskBar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  min-height: 50px;
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
  .start {
    font-family: "NeoDunggeunmoPro-Regular";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    // min-width: 100px;
    width: 150px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 20px;
    border-radius: 0 10px 10px 0;
    background: rgb(69, 163, 70);
    background: linear-gradient(
      90deg,
      rgba(69, 163, 70, 1) 0%,
      rgba(143, 198, 134, 1) 5%,
      rgba(73, 168, 73, 1) 16%,
      rgba(73, 168, 73, 1) 92%,
      rgba(25, 107, 32, 1) 100%
    );
    font-size: 24px;
    // letter-spacing: 4px;
    color: #ffffff;
    text-shadow: 1px 2px 3px #000;
    .start-logo {
      height: 60%;
      filter: drop-shadow(1px 2px 3px #000);
    }
  }
}
</style>
