<template>
  <div id="typography">
    <article>
      <ul class="chapters">
        <li v-for="item in chapters" :key="item" class="chapters-item">{{ item.text }}</li>
      </ul>
    </article>
    <article>
      <section id="Hello">
        <div>Hello <span>👋</span></div>
        <div>My name is</div>
        <div>Yoon Hye Ryeong</div>
      </section>
      <section id="Enjoy">
        <div>the one who enjoys wins <span>🏆</span></div>
      </section>
      <section id="JustDoIt">
        <div>Don't think too long <span>🤔</span></div>
        <div>Let's just do it <span>👊</span></div>
      </section>
      <section id="GoGo">
        <div>GABOJAGO</div>
        <div>Let's go <span>🏃‍♀️🏃🏃‍♂️</span></div>
      </section>
    </article>
  </div>
</template>
<script>
export default {
  setup() {
    const chapters = [{ text: "Hello" }, { text: "Enjoy" }, { text: "JustDoIt" }, { text: "GoGo" }];

    return {
      chapters,
    };
  },
};
</script>
<style>
body {
  margin: 0 auto;
}
</style>
<style lang="scss" scoped>
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;
}

#typography {
  width: 100%;
  height: 100%;
  background: #000;
  color: #fff;
  section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10rem;
  }
}

.chapters {
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  &-item {
    font-size: 2rem;
    font-weight: 400;
    padding: 0 8px;
    border-radius: 100px;
    border: 2px solid #fff;
  }
}
</style>
