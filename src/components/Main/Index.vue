<template>
  <!-- <header>
    <div class="flex">
      <a href="#" id="logo"><h1>HRY</h1></a>
      <nav id="menu">
        <div class="pc">
          <ul>
            <li v-for="menu in menuData.menuList" :key="menu.text">
              <a :href="menu.path">{{ menu.text }}</a>
            </li>
          </ul>
        </div>
        <div class="mobile">
          <div class="button" @click="clickMobileBtn">
            <span v-for="idx in 3" :key="idx"></span>
          </div>

          <div class="menuSide">
            <ul>
              <li v-for="menu in menuData.menuList" :key="menu.text" @click="clickMobileMenu">
                <a :href="menu.path">{{ menu.text }}</a>
              </li>
            </ul>
            <div id="logo"><h1>HRY</h1></div>
          </div>
        </div>
      </nav>
    </div>
  </header> -->
  <main>
    <section id="home">
      <header>
        <div class="flex">
          <a href="#" id="logo"><h1>HRY</h1></a>
          <nav id="menu">
            <div class="pc">
              <ul>
                <li v-for="menu in menuData.menuList" :key="menu.text">
                  <a :href="menu.path">{{ menu.text }}</a>
                </li>
              </ul>
            </div>
            <div class="mobile">
              <div class="button" @click="clickMobileBtn">
                <span v-for="idx in 3" :key="idx"></span>
              </div>

              <div class="menuSide">
                <ul>
                  <li v-for="menu in menuData.menuList" :key="menu.text" @click="clickMobileMenu">
                    <a :href="menu.path">{{ menu.text }}</a>
                  </li>
                </ul>
                <div id="logo"><h1>HRY</h1></div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <article class="homeTitle">
        <div class="mainImg">
          <div class="flex">
            <img :src="require(`@/assets/images/main/home_1.jpg`)" alt="home1" class="home1" />
            <img
              :src="require(`@/assets/images/main/home_1-1.jpg`)"
              alt="home1-1"
              class="home1-1 media600"
            />
          </div>
        </div>

        <div class="mainText">
          <div class="developer">Developer<br />who enjoys challenges.</div>
          <div class="nothing">Nothing ventured,<br />nothing gained.</div>
        </div>
      </article>

      <article class="subTitle">
        <div class="flex">
          <div class="introduce introduce1">
            <span class="subject">
              Life is a continuation of learning,<br />and the excitement in it.<br />
            </span>
          </div>
          <img :src="require(`@/assets/images/main/home_2.jpg`)" alt="home2" class="home2" />
        </div>

        <div class="flex">
          <img :src="require(`@/assets/images/main/home_2-1.jpg`)" alt="home2-1" class="home2-1" />
          <div class="introduce introduce2 intro2">
            <span class="subject"> Communication and collaboration.<br /> </span>
          </div>
          <div class="introduce introduce3 intro2">
            <span class="subject">
              2 years of experience in starting a business,<br />feeling responsible.<br />
            </span>
          </div>
        </div>

        <div class="flex">
          <div class="introduce introduce4">
            <a target="_blank" class="iLink">
              <!-- href="https://drive.google.com/file/d/1dng_Z5jGW-TCXOa-kHnMBZH1rBVfOCcP/view?usp=sharing" -->
              자기소개서 전문 읽기</a
            >
          </div>
          <img :src="require(`@/assets/images/main/home_2-2.jpg`)" alt="home2-2" class="home2-2" />
        </div>
      </article>
    </section>

    <section id="page01" class="wrap scroll">
      <div class="flex info">
        <div>
          <div class="about">About</div>
          <img :src="require(`@/assets/images/main/page01_1.jpg`)" alt="page01_1" class="infoImg" />
        </div>

        <div class="infoText">
          <div class="list">
            <h2 class="title">PROFILE</h2>
            <ul>
              <li>
                <div class="name">NAME</div>
                <div class="content">윤혜령</div>
              </li>
              <li>
                <div class="name">AGES</div>
                <div class="content">26 (1998)</div>
              </li>
              <li>
                <div class="name">ADDRESS</div>
                <div class="content">부산광역시</div>
              </li>
              <li>
                <div class="name">SPECIALITY</div>
                <div class="content">드로잉, 악기연주</div>
              </li>
            </ul>
          </div>

          <div class="list">
            <h2 class="title">STUDY & EXPERIENCE</h2>
            <ul>
              <li>
                <div class="name">2021.05-09</div>
                <div class="content">
                  더조은컴퓨터아카데미<br /><span class="small"
                    >(웹퍼블리싱, 반응형웹디자인 포트폴리오 과정 수료)</span
                  >
                </div>
              </li>
              <li>
                <div class="name">2019-2021</div>
                <div class="content">
                  YoungYouAre studio<br /><span class="small">(media art project team)</span>
                </div>
              </li>
              <li>
                <div class="name">2017.03-2022.02</div>
                <div class="content">동서대학교 디지털콘텐츠학부</div>
              </li>
            </ul>
          </div>

          <div class="list">
            <h2 class="title">LICENSE</h2>
            <ul>
              <li>
                <div class="name">2021.09</div>
                <div class="content">웹 디자인 기능사</div>
              </li>
              <li>
                <div class="name">2016.03</div>
                <div class="content">GTQ그래픽기술자격 2급</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="skillGrp">
        <div class="title">SKILL</div>
        <ul class="skill flex">
          <li>
            <ul class="horiz">
              <li>
                <div class="numAnimation" percent="90">0<span>%</span></div>
              </li>
              <li>
                <div class="lang">HTML</div>
              </li>
            </ul>
          </li>
          <li>
            <ul class="horiz">
              <li>
                <div class="numAnimation" percent="75">0<span>%</span></div>
              </li>
              <li>
                <div class="lang">CSS</div>
              </li>
            </ul>
          </li>
          <li>
            <ul class="horiz">
              <li>
                <div class="numAnimation" percent="55">0<span>%</span></div>
              </li>
              <li>
                <div class="lang">JavaScript</div>
              </li>
            </ul>
          </li>
          <li>
            <ul class="horiz">
              <li>
                <div class="numAnimation" percent="65">0<span>%</span></div>
              </li>
              <li>
                <div class="lang">VUE</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <section id="page02" class="scroll">
      <div class="wrap">
        <div class="portfolio">Portfolio</div>
      </div>
    </section>

    <section id="page03" class="scroll">
      <div class="wrap">
        <div class="contact">Contact</div>

        <form action="./mail/mail.php" method="post" onsubmit="return send(this);">
          <ul class="grid">
            <li>
              <input type="text" name="name" placeholder="NAME" class="mailBox" />
              <input type="text" name="email" placeholder="EMAIL" class="mailBox" />
              <input type="text" name="tel" placeholder="TEL" class="mailBox" />
            </li>
            <li>
              <textarea name="text" placeholder="CONTENTS"></textarea>
            </li>
            <li>
              <input type="submit" value="SEND MAIL" class="sendButton" />
            </li>
          </ul>
        </form>
      </div>
    </section>

    <div class="topBtn">
      <span class="btnText">want to see the menu</span>
      <span class="scrollToTop" @click="scrollTop()">⇡</span>
    </div>
  </main>

  <footer>
    <div class="copy">
      이 페이지는 상업용이 아닌 개인 포트폴리오용으로 제작되었습니다. <br />
      COPYRIGHTⓒ2022 by HRY. ALL RIGHTS RESERVED
    </div>
  </footer>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const menuData = reactive({
      menuList: [
        { text: "Home", path: "#home" },
        { text: "About", path: "#About" },
        { text: "Portfolio", path: "#Portfolio" },
        { text: "Contact", path: "#Contact" },
      ],
      mobileMenu: false,
    });
    const clickMobileBtn = () => {
      this.menuData.mobileMenu = !this.menuData.mobileMenu;
      const mobileBtn = document.querySelector("header .mobile");
      // mobileBtn.className = mobileBtn.className === "mobile" ? "mobile active" : "mobile";
      console.log("메뉴클릭", mobileBtn.className, this.menuData.mobileMenu);
    };
    const clickMobileMenu = () => {
      let menu = document.querySelector("header .mobile .menuSide li");
      menu.className = "mobile";
    };

    // 스크롤 맨 위로 실행 함수
    const scrollTop = () => {
      window.scrollTo(0, 0);
    };
    return {
      menuData,
      scrollTop,
      clickMobileBtn,
      clickMobileMenu,
    };
  },
};
</script>
<style scoped>
@import url("@/css/setup.css");

@font-face {
  font-family: "NanumBarunGothic";
  font-style: normal;
  font-weight: 400;
  src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot");
  src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix")
      format("embedded-opentype"),
    url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff") format("woff"),
    url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf") format("truetype");
}

body {
  font-family: "Raleway", sans-serif;
  background-color: #efe8df;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}

header {
  padding: 20px 30px;
}
header #logo {
}
header #logo h1 {
  width: 100px;
  height: 50px;
  border: 2px solid white;
  border-radius: 100%;
  font-size: 35px;
  font-weight: bold;
  color: white;
  line-height: 47px;
}

header #menu {
}
header #menu .pc {
}
header #menu .pc ul {
}
header #menu .pc ul li {
  margin: 0px 4px;
}
header #menu .pc ul li a {
  color: #64574d;
  padding: 0px 8px;
  font-size: 18px;
  border-radius: 5px;
}
header #menu .pc ul li:hover a {
  color: whitesmoke;
  background-color: #64574d;
}

header #menu .mobile {
}
header #menu .mobile .button {
  width: 45px;
  height: 45px;
  position: relative;
}
header #menu .mobile .button:hover {
  cursor: pointer;
}
header #menu .mobile .button span {
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 28px;
  height: 3px;
  background-color: #64574d;
  transition: all 0.5s;
}
header #menu .mobile .button span:nth-child(1) {
  transform: translate(-50%, -50%) translateY(-10px);
}
header #menu .mobile .button span:nth-child(3) {
  transform: translate(-50%, -50%) translateY(10px);
}
header #menu .mobile.active .button span:nth-child(1) {
  transform: translate(-50%, -50%) rotate(45deg);
  background-color: #efe8df;
}
header #menu .mobile.active .button span:nth-child(2) {
  opacity: 0;
}
header #menu .mobile.active .button span:nth-child(3) {
  transform: translate(-50%, -50%) rotate(-45deg);
  background-color: #efe8df;
}

header #menu .mobile .menuSide {
  z-index: 888;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #3b3530;
  transform: translateY(200%);
  transition: transform 0.5s;
}
header #menu .mobile.active .menuSide {
  transform: translateY(0%);
}
header #menu .mobile .menuSide ul {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
header #menu .mobile .menuSide ul li {
}
header #menu .mobile .menuSide ul li a {
  font-family: "Italiana", serif;
  font-style: italic;
  font-size: 40px;
  font-weight: bold;
  line-height: 45px;
  margin: 30px 0px;
  color: #efe8df;
}
header #menu .mobile .menuSide ul li:hover a {
  width: 100%;
  color: #a59176;
  text-decoration: underline;
}
header #menu .mobile .menuSide #logo {
}
header #menu .mobile .menuSide #logo h1 {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: #efe8df;
  border: 2px solid #efe8df;
}

main {
}
main #home {
}
main #home .homeTitle {
  font-family: "Italiana", serif;
  position: relative;
  height: 100%;
}
main #home .homeTitle .mainImg {
  margin: 30px 10px;
}
main #home .homeTitle .mainImg .home1 {
  width: 38vw;
}
main #home .homeTitle .mainImg .home1-1 {
  width: 25vw;
}

main #home .homeTitle .mainText {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: inherit;
  z-index: 3;
}
main #home .homeTitle .mainText .developer {
  position: absolute;
  top: 10px;
  right: 15px;
  width: 100%;
  text-align: right;
  font-size: 160px;
  font-weight: 300;
  font-style: italic;
  line-height: 0.9em;
  color: #64574d;
  mix-blend-mode: screen;
  transition: font-size 0.5s;
}
main #home .homeTitle .mainText .nothing {
  position: absolute;
  width: 100%;
  bottom: 50px;
  left: 40vw;
  text-align: left;
  font-size: 140px;
  font-weight: 300;
  font-style: italic;
  line-height: 0.9em;
  color: #64574d;
  transition: font-size 0.5s;
}

main #home .subTitle {
  font-family: "NanumBarunGothic";
  margin: 100px 0px;
  padding: 0px 10px;
  width: 100%;
}

main #home .subTitle .home2 {
  width: 60%;
  margin: 0px 30px;
}
main #home .subTitle .home2-1 {
  width: 30%;
  margin: 0px 30px;
}
main #home .subTitle .home2-2 {
  width: 50%;
  margin: 0px 50px;
}

main #home .subTitle .introduce {
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #64574d;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 11; /* ellipsis line */
  -webkit-box-orient: vertical;
  /*
    line-height: 1.2em;
	height: 13.5em;
*/
}
main #home .subTitle .introduce .subject {
  font-family: "Raleway", sans-serif;
  font-size: 26px;
}
main #home .subTitle .introduce1 {
  text-align: left;
  padding: 0px 30px;
  width: 40%;
}
main #home .subTitle .intro2 {
  width: 70%;
}
main #home .subTitle .introduce2 {
  text-align: right;
  padding: 0px 30px;
}
main #home .subTitle .introduce3 {
  text-align: left;
  padding: 0px 30px;
}
main #home .subTitle .introduce4 {
  width: 50%;
  text-align: center;
}
main #home .subTitle .introduce4 .iLink {
  height: 50px;
  line-height: 48px;
  padding: 0px 15px;
  border: 2px solid #64574d;
  border-radius: 50px;
  text-align: center;
  margin-bottom: 2px;
  transition: padding 0.5s;
  position: relative;
}
main #home .subTitle .introduce4 .iLink:hover {
  padding-right: 45px;
}
main #home .subTitle .introduce4 .iLink:after {
  content: "⇢";
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.5s;
}
main #home .subTitle .introduce4 .iLink:hover:after {
  opacity: 1;
}

main #page01 {
  margin: 100px 0px;
  color: #efe8df;
}
main #page01 > .flex {
  padding: 0px 10px;
  justify-content: space-evenly;
}

main #page01 .about {
  font-family: "Italiana", serif;
  font-style: italic;
  font-size: 130px;
  line-height: 130px;
  text-align: left;
  margin-bottom: -21px;
}

main #page01 .info .infoImg {
  width: 100%;
}
main #page01 .info .infoText {
  margin-top: 30px;
  padding: 0px 20px;
}
main #page01 .info .infoText .list {
  margin-bottom: 20px;
}
main #page01 .info .infoText .list:last-child {
  margin-bottom: 0px;
}
main #page01 .info .infoText .list .title {
  text-align: left;
  font-size: 26px;
  letter-spacing: 1.2px;
}
main #page01 .info .infoText .list ul {
  margin-top: 10px;
}
main #page01 .info .infoText .list ul li {
  display: grid;
  grid-template-columns: 150px 1fr;
}
main #page01 .info .infoText .list ul li .name {
  text-align: left;
  font-size: 18px;
}
main #page01 .info .infoText .list ul li .content {
  text-align: left;
  font-size: 18px;
}
main #page01 .info .infoText .list ul li .content .small {
  font-size: 14px;
  opacity: 60%;
}

main #page01 .skillGrp {
  margin: 20px 10px;
}
main #page01 .skillGrp .title {
  font-size: 26px;
  letter-spacing: 1.2px;
  text-align: left;
  font-weight: bold;
}
main #page01 .skillGrp .skill {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
main #page01 .skillGrp .skill > li {
}
main #page01 .skillGrp .skill > li .horiz {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
main #page01 .skillGrp .skill > li .horiz > li {
  text-align: left;
  margin-top: 10px;
}
main #page01 .skillGrp .skill > li .horiz > li .numAnimation {
  font-size: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}
main #page01 .skillGrp .skill > li .horiz > li .lang {
  font-size: 18px;
  font-weight: bold;
}
main #page01 .skillGrp .skill > li .horiz > li .con {
  font-size: 16px;
}

main #page02 {
  margin: 100px 0px;
  color: #efe8df;
}
main #page02 .portfolio {
  font-family: "Italiana", serif;
  font-style: italic;
  font-size: 130px;
  line-height: 130px;
  text-align: left;
}
main #page02 .monitor {
  max-height: 0px;
  margin-top: 50px;
  overflow: hidden;
  transition: max-height 1s 0s;
}
main #page02 .monitor.view {
  max-height: 300px;
}
main #page02 .monitor .swiper-slide {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 30px;
}
main #page02 .monitor .swiper-slide .img {
  overflow-y: hidden;
  width: 100%;
  height: 300px;
  border-radius: 10px;
}
main #page02 .monitor .swiper-slide .img img {
  width: 100%;
}
main #page02 .monitor .swiper-slide .img:hover {
  cursor: pointer;
}
main #page02 .monitor .swiper-slide .title {
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
main #page02 .monitor .swiper-slide .title .name {
  font-size: 20px;
  font-weight: bold;
  color: #efe8df;
  margin: 0px 10px;
}
main #page02 .monitor .swiper-slide .title .shortcut a {
  width: 100px;
  height: 40px;
  font-weight: bold;
  text-align: center;
  line-height: 36px;
  font-size: 16px;
  border: 2px solid #efe8df;
  border-radius: 20px;
  margin: 20px 0px;
}
main #page02 .monitor .swiper-slide .title .shortcut a:hover {
  color: #ffa500;
  border: 2px solid #efe8df;
}
main #page02 .monitor .swiper-slide .title .date {
  margin: 0px 10px;
  color: #a39c93;
}

main #page02 .list {
  margin-top: 30px;
}
main #page02 .swiper-slide {
  opacity: 0;
  margin-top: 50px;
  transition: all 1s;
}
main #page02.active .swiper-slide {
  opacity: 1;
  margin-top: 0px;
}
main #page02 .swiper-slide .box {
  width: 100%;
}
main #page02 .swiper-slide .box .img {
}
main #page02 .swiper-slide .box .img img {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: #eee;
  border-radius: 10px;
}

main #page02 .swiper-slide .box .title {
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding: 5px 10px;
}
main #page02 .swiper-slide .box .title .name {
  font-size: 16px;
  color: #efe8df;
}
main #page02 .swiper-slide .box .title .date {
  font-size: 13px;
  color: #a39c93;
}

main #page03 {
  margin: 100px 0px;
  color: #efe8df;
  position: relative;
}
main #page03 .contact {
  margin-top: 200px;
  font-family: "Italiana", serif;
  font-style: italic;
  font-size: 130px;
  line-height: 130px;
  text-align: left;
}
main #page03 form {
}
main #page03 form .grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 50px 30px;
  margin: 100px 0px 200px;
}
main #page03 form .grid li {
  opacity: 0;
  margin-top: 50px;
  transition: all 1s;
}
main #page03.active form .grid li {
  opacity: 1;
  margin-top: 0px;
}
main #page03.active form .grid li:nth-child(1) {
  transition-delay: 0.4s;
}
main #page03.active form .grid li:nth-child(2) {
  transition-delay: 0.6s;
}
main #page03.active form .grid li:nth-child(3) {
  transition-delay: 0.8s;
}
main #page03 form .grid li .mailBox {
  width: 100%;
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  line-height: 48px;
  padding-left: 10px;
  margin-bottom: 21px;
}
main #page03 form .grid li .mailBox:last-child {
  margin-bottom: 0px;
}
main #page03 form .grid li textarea {
  width: 100%;
  min-height: 200px;
  max-height: 200px;
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  padding: 10px;
  line-height: 1.5;
}
main #page03 form .grid li .sendButton {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  line-height: 1.5;
  transform: rotate(0deg);
  transition: transform 1s;
}
main #page03 form .grid li .sendButton:hover {
  background-color: #fff;
  color: #000;
  cursor: pointer;
  transform: rotate(360deg);
}
input::placeholder {
  color: #fff;
}
textarea::placeholder {
  color: #fff;
}

main .topBtn {
  position: fixed;
  bottom: 50px;
  right: 50px;
}
main .topBtn .scrollToTop {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 35px;
  padding: 5px 15px;
  background-color: #64574d;
  color: #efe8df;
  border: none;
  transition: all 0.5s;
}
main .topBtn:hover .scrollToTop {
  cursor: pointer;
}
main .topBtn .btnText {
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
main .topBtn:hover .btnText {
  opacity: 1;
}

footer {
}
footer .copy {
  color: #a39c93;
}

@media only screen and (min-width: 100px) and (max-width: 1600px) {
  main #home .homeTitle .mainText .developer,
  main #home .homeTitle .mainText .nothing {
    font-size: 100px;
  }
  main #home .subTitle {
    grid-auto-rows: minmax(250px, auto);
  }
  main #home .subTitle .introduce {
    font-size: 20px;
  }
  main #home .subTitle .introduce .subject {
    font-size: 24px;
  }
}
@media only screen and (min-width: 100px) and (max-width: 1400px) {
  main #home .homeTitle .mainText .developer,
  main #home .homeTitle .mainText .nothing {
    font-size: 95px;
  }
  main #home .subTitle .introduce {
    font-size: 18px;
    margin-top: 20px;
  }
  main #home .subTitle .introduce .subject {
    font-size: 22px;
  }
}
@media only screen and (min-width: 100px) and (max-width: 1200px) {
  main #home .homeTitle .mainText .developer,
  main #home .homeTitle .mainText .nothing {
    font-size: 85px;
  }
  main #home .subTitle .home2,
  main #home .subTitle .home2-1 {
    margin-top: 50px;
  }

  main #page01 {
    margin: 0px;
    margin-bottom: 100px;
  }
  main #page01 > .flex {
    flex-direction: column;
  }
  main #page01 .info .infoText .list .title {
    text-align: center;
  }
  main #page01 .info .infoText .list ul li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  main #page01 .info .infoText .list ul li .name {
    text-align: right;
  }

  main #page01 .skillGrp {
  }
  main #page01 .skillGrp .title {
    text-align: center;
  }
  main #page01 .skillGrp .skill {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding: 0px 200px;
  }
  main #page01 .skillGrp .skill > li .horiz {
    grid-template-columns: 80px 1fr;
    grid-gap: 20px;
  }
}
@media only screen and (min-width: 100px) and (max-width: 1000px) {
  main #home .homeTitle .mainText .developer,
  main #home .homeTitle .mainText .nothing {
    font-size: 70px;
  }
  main #home .subTitle {
    grid-template-columns: 1fr;
  }
  main #home .subTitle .introduce {
    font-size: 16px;
  }
  main #home .subTitle .introduce .subject {
    font-size: 18px;
  }

  main #page01 .skillGrp .skill {
    padding: 0px 100px;
  }
}
@media only screen and (min-width: 100px) and (max-width: 800px) {
  main #home .homeTitle .mainText .developer,
  main #home .homeTitle .mainText .nothing {
    font-size: 56px;
  }

  main #home .subTitle > .flex {
    flex-direction: column-reverse;
  }
  main #home .subTitle > .flex:nth-child(2) {
    flex-direction: column;
  }
  main #home .subTitle .home2,
  main #home .subTitle .home2-1,
  main #home .subTitle .home2-2,
  main #home .subTitle .introduce1,
  main #home .subTitle .introduce2,
  main #home .subTitle .introduce3,
  main #home .subTitle .introduce4 {
    width: 100%;
    margin-top: 30px;
  }
  main #home .subTitle .introduce3 {
    margin-top: 50px;
  }
  main #home .subTitle .introduce4 {
    font-size: 15px;
  }

  main #page01 .skillGrp .skill {
    padding: 0px 50px;
  }
}
@media only screen and (min-width: 100px) and (max-width: 600px) {
  main #home .homeTitle .mainImg .home1 {
    width: 65vw;
    padding: 80px 0px;
  }
  main #home .homeTitle .mainImg .media600 {
    display: none;
  }

  main #home .homeTitle .mainText .developer,
  main #home .homeTitle .mainText .nothing {
    font-size: 45px;
  }
  main #home .homeTitle .mainText .nothing {
    left: 10px;
    bottom: 10px;
  }

  main #page01 .skillGrp .skill {
    grid-template-columns: 1fr;
  }
}
</style>
