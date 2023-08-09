<template>
  <div id="typography">
    <article>
      <ul class="chapters">
        <li v-for="item in chapters" :key="item" class="chapters-item">{{ item.text }}</li>
      </ul>
    </article>
    <article>
      <section id="hello">
        <div>
          <p>Hello <span>👋</span></p>
          <p>My name is</p>
          <p>Yoon Hye Ryeong</p>
        </div>
      </section>
      <section id="enjoy">
        <div>
          <p>The one who enjoys wins <span>🏆</span></p>
        </div>
      </section>
      <section id="justDoIt">
        <div>
          <p>Don't think too long <span>🤔</span></p>
          <p>Let's just do it <span>👊</span></p>
        </div>
      </section>
      <section id="dream">
        <div>
          <p>Let's dream <span>💫</span></p>
        </div>
      </section>
      <section id="comeTrue">
        <div>
          <p>As you think,<br />as you say,<br />as you dream,<br />it will come true.</p>
        </div>
      </section>
    </article>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  setup() {
    const chapters = [
      { text: "Hello!" },
      { text: "Enjoy!" },
      { text: "JustDoIt!" },
      { text: "Let's dream!" },
      { text: "It will come true!" },
    ];
    const scrollTop = ref(0);

    function scrollHandler() {
      console.log("scrollHandler has been triggered!");
    }

    onMounted(() => {
      document?.getElementById("typography")?.addEventListener("scroll", scrollHandler);
    });

    return {
      chapters,
      scrollTop,
    };
  },
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap");
body {
  margin: 0 auto;
  background: #000;
}
body::-webkit-scrollbar {
  width: 0px;
}
p {
  margin: 0;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;
}
* {
  font-family: "Josefin Sans", sans-serif;
}
::-webkit-scrollbar-track {
  display: none;
}
::-webkit-scrollbar-thumb {
  color: #fff;
}
</style>
<style lang="scss" scoped>
#typography {
  width: 100%;
  height: 100%;
  background: #000;
  color: #fff;
  section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10rem !important;
    font-weight: 400;
  }
}

.chapters {
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 8px;
  &-item {
    font-size: 2rem;
    font-weight: 400;
    padding: 0 8px;
    border-radius: 100px;
    // border: 2px solid #fff;
  }
}
</style>
