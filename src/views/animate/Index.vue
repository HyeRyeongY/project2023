<template>
  <div>
    <div id="home">
      <img :src="require(`@/assets/images/animate/cloud_l1.png`)" id="cloud_l1" />
      <img :src="require(`@/assets/images/animate/cloud_r1.png`)" id="cloud_r1" />
      <img :src="require(`@/assets/images/animate/cloud_l2.png`)" id="cloud_l2" />
      <img :src="require(`@/assets/images/animate/mountain1.png`)" id="mountain1" />
      <!-- <h2 id="mainText">
        꾸준히<br class="br" />
        성장하는
      </h2> -->
      <img :src="require(`@/assets/images/animate/cloud_r2.png`)" id="cloud_r2" />
      <img :src="require(`@/assets/images/animate/cloud_r3.png`)" id="cloud_r3" />
      <img :src="require(`@/assets/images/animate/mountain2.png`)" id="mountain2" />
      <img :src="require(`@/assets/images/animate/cloud_l3.png`)" id="cloud_l3" />
      <img :src="require(`@/assets/images/animate/mountain3.png`)" id="mountain3" />
      <img :src="require(`@/assets/images/animate/cloud_l4.png`)" id="cloud_l4" />
      <img :src="require(`@/assets/images/animate/cloud_r4.png`)" id="cloud_r4" />
      <img :src="require(`@/assets/images/animate/mountain4.png`)" id="mountain4" />
      <img :src="require(`@/assets/images/animate/mountain5.png`)" id="mountain5" />
    </div>
    <section style="height: 100vh"></section>
    <section style="height: 100vh"></section>
  </div>
</template>
<script>
import { onMounted, onBeforeUnmount } from "vue";
export default {
  setup() {
    function effect() {
      /* #home scrolling effect */
      let cloud_l1 = document.getElementById("cloud_l1");
      let cloud_l2 = document.getElementById("cloud_l2");
      let cloud_l3 = document.getElementById("cloud_l3");
      let cloud_l4 = document.getElementById("cloud_l4");
      let cloud_r1 = document.getElementById("cloud_r1");
      let cloud_r2 = document.getElementById("cloud_r2");
      let cloud_r3 = document.getElementById("cloud_r3");
      let cloud_r4 = document.getElementById("cloud_r4");
      let mountain1 = document.getElementById("mountain1");
      let mountain2 = document.getElementById("mountain2");
      let mountain3 = document.getElementById("mountain3");
      let mountain4 = document.getElementById("mountain4");
      let mountain5 = document.getElementById("mountain5");

      window.addEventListener("scroll", function () {
        let value = window.scrollY;
        cloud_l1.style.left = value * -0.5 + "px";
        cloud_l2.style.left = value * -1.05 + "px";
        cloud_l3.style.left = value * -0.8 + "px";
        cloud_l4.style.left = value * 1 + "px";
        cloud_r1.style.left = value * 0.5 + "px";
        cloud_r2.style.left = value * 0.9 + "px";
        cloud_r3.style.left = value * 0.6 + "px";
        cloud_r4.style.left = value * 0.4 + "px";
        mountain1.style.left = value * -1 + "px";
        mountain2.style.left = value * 2.1 + "px";
        mountain3.style.left = value * -2.2 + "px";
        mountain4.style.left = value * -2.3 + "px";
        mountain5.style.left = value * 2.4 + "px";
      });
    }
    onMounted(() => {
      // DOM이 마운트 되었을 때 이벤트 핸들러를 등록한다.
      document.addEventListener("scroll", effect);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("scroll", effect);
    });
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap");
body {
  margin: 0 auto;
  background-color: #c8ecf7;
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
#home {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: padding 0.5s;
}
#home::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #c8ecf7, transparent);
  background: -webkit-linear-gradient(rgba(200, 236, 247, 0), #c8ecf7);
  z-index: 1000;
}
#home img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  pointer-events: none;
}
#home #mountain3,
#home #mountain4,
#home #mountain5 {
  z-index: 10;
}
</style>
