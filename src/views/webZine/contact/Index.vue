<template>
  <div class="about_layout">
    <section>
      <img :src="require(`@/assets/images/webZine/about.png`)" alt="CITYPLAY" />
    </section>
    <section></section>
  </div>
</template>
<style lang="scss">
.about_layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
