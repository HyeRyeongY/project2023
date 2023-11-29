<template>
  <div class="about_layout">
    <section class="img_container">
      <img :src="require(`@/assets/images/webZine/about.png`)" alt="CITYPLAY" />
    </section>
    <section></section>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/webZine/variables.scss";
.about_layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  background: $primary;
  height: calc(100vh - $header_height);
  .img_container {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
