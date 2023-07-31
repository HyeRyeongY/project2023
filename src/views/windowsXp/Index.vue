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
</style>
