<template>
  <div class="magazine-page">
    <main>
      <section ref="home" id="home">
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
              <div class="mobile" :class="{ active: menuData.mobileMenu }">
                <div class="button" @click="menuData.mobileMenu = !menuData.mobileMenu">
                  <span v-for="idx in 3" :key="idx"></span>
                </div>

                <div class="menuSide">
                  <ul>
                    <li
                      v-for="menu in menuData.menuList"
                      :key="menu.text"
                      @click="menuData.mobileMenu = false"
                    >
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
            <img
              :src="require(`@/assets/images/main/home_2-1.jpg`)"
              alt="home2-1"
              class="home2-1"
            />
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
            <img
              :src="require(`@/assets/images/main/home_2-2.jpg`)"
              alt="home2-2"
              class="home2-2"
            />
          </div>
        </article>
      </section>

      <section ref="About" id="About" class="wrap scroll">
        <div class="flex info">
          <div>
            <div class="about">About</div>
            <img
              :src="require(`@/assets/images/main/page01_1.jpg`)"
              alt="page01_1"
              class="infoImg"
            />
          </div>

          <div class="infoText">
            <div class="list">
              <div v-for="item in aboutData" :key="item.name">
                <h2 class="title">{{ item.name }}</h2>
                <template v-if="item.name !== 'SKILL'">
                  <ul>
                    <li v-for="(list, idx) in item.list" :key="idx">
                      <div class="name">
                        {{ list.id ? list.id : list.period ? list.period : "" }}
                      </div>
                      <div class="content">
                        {{ list.content ? list.content : "" }} <br />
                        <span v-if="list.detail" class="small">{{ "(" + list.detail + ")" }}</span>
                      </div>
                    </li>
                  </ul>
                </template>
                <!-- skill -->
                <template v-else>
                  <div class="skillGrp">
                    <ul class="skill flex">
                      <li v-for="(list, idx) in item.list" :key="idx">
                        <ul class="horiz">
                          <li>
                            <div class="numAnimation" :percent="list.percent">0<span>%</span></div>
                          </li>
                          <li>
                            <div class="lang">{{ list.lang }}</div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- <section ref="Portfolio" id="Portfolio" class="scroll">
      <div class="wrap">
        <div class="portfolio">Portfolio</div>
      </div>
    </section> -->

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
  </div>
</template>
<script>
import { reactive, onMounted } from "vue";
import data from "./data/about.json";

export default {
  setup() {
    const aboutData = data;
    const menuData = reactive({
      menuList: [
        { text: "Home", path: "#home" },
        { text: "About", path: "#About" },
        { text: "Portfolio", path: "#Portfolio" },
        { text: "Contact", path: "#Contact" },
      ],
      mobileMenu: false,
      aboutH: null,
      nowH: null,
    });
    // 스크롤 위치
    function getHeightInfo() {
      this.aboutH = document.getElementById("About").offsetTop;
      this.nowH = window.scrollY;
      let topBtn = document.querySelector(".topBtn");
      let page = document.querySelector(".magazine-page");
      if (this.aboutH - 700 < this.nowH) {
        topBtn.className = "topBtn under";
        page.className = "magazine-page under";
        // document.body.style = "transition: all .28s ease-in-out; background-color: #64574d";
      } else {
        topBtn.className = "topBtn";
        page.className = "magazine-page";
        // document.body.style = "transition: all .28s ease-in-out; background-color: #efe8df";
      }
    }
    let numAnimation = document.querySelectorAll(".numAnimation");

    function changNum(idx) {
      let num = 0;
      let targetNum = numAnimation[idx].getAttribute("percent");
      setTimeout(function () {
        let timer = setInterval(function () {
          ++num;
          numAnimation[idx].innerText = num + "%";
          if (num == targetNum) {
            clearInterval(timer);
          }
        }, 40);
      }, 2000);
    }
    for (var i = 0; i < numAnimation.length; i++) {
      changNum(i);
    }

    // 스크롤 맨 위로 실행 함수
    function scrollTop() {
      window.scrollTo(0, 0);
    }
    onMounted(() => {
      // DOM이 마운트 되었을 때 이벤트 핸들러를 등록한다.
      document.addEventListener("scroll", getHeightInfo);
    });
    return {
      aboutData,
      menuData,
      getHeightInfo,
      scrollTop,
      changNum,
    };
  },
};
</script>
<style lang="scss" scoped>
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
}
.magazine-page {
  background-color: #efe8df;
  transition: all 1s ease;
  &.under {
    background-color: #64574d;
  }
}
header {
  padding: 20px 30px;
  #logo {
    h1 {
      width: 100px;
      height: 50px;
      border: 2px solid #64574d;
      border-radius: 100%;
      font-size: 35px;
      font-weight: bold;
      color: #64574d;
      line-height: 47px;
    }
  }
}
header #menu {
  .pc {
    ul {
      li {
        margin: 0px 4px;
        a {
          color: #64574d;
          padding: 0px 8px;
          font-size: 18px;
          border-radius: 5px;
        }
        &:hover a {
          color: whitesmoke;
          background-color: #64574d;
        }
      }
    }
  }
  .mobile {
    .button {
      width: 45px;
      height: 45px;
      position: relative;
      &:hover {
        cursor: pointer;
      }
      span {
        z-index: 999;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 28px;
        height: 3px;
        background-color: #64574d;
        transition: all 0.5s;
        &:nth-child(1) {
          transform: translate(-50%, -50%) translateY(-10px);
        }
        &:nth-child(3) {
          transform: translate(-50%, -50%) translateY(10px);
        }
      }
    }
    .menuSide {
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

    &.active {
      .button {
        span {
          &:nth-child(1) {
            transform: translate(-50%, -50%) rotate(45deg);
            background-color: #efe8df;
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:nth-child(3) {
            transform: translate(-50%, -50%) rotate(-45deg);
            background-color: #efe8df;
          }
        }
      }
      .menuSide {
        transform: translateY(0%);
        ul {
          height: 100vh;
          display: flex;
          justify-content: center;
          flex-direction: column;
          li {
            a {
              font-family: "Italiana", serif;
              font-style: italic;
              font-size: 40px;
              font-weight: bold;
              line-height: 45px;
              margin: 30px 0px;
              color: #efe8df;
            }
            &:hover {
              a {
                width: 100%;
                color: #a59176;
                text-decoration: underline;
              }
            }
          }
        }
        #logo {
          h1 {
            position: absolute;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            color: #efe8df;
            border: 2px solid #efe8df;
          }
        }
      }
    }
  }
}

main {
  #home {
    .homeTitle {
      font-family: "Italiana", serif;
      position: relative;
      height: 100%;
      .mainImg {
        margin: 30px 10px;
        .home1 {
          width: 38vw;
        }
        .home1-1 {
          width: 25vw;
        }
      }
      .mainText {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: inherit;
        z-index: 3;
        .developer {
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
        .nothing {
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
      }
    }
    .subTitle {
      font-family: "NanumBarunGothic";
      margin: 100px 0px;
      padding: 0px 10px;
      width: 100%;
      .home2 {
        width: 60%;
        margin: 0px 30px;
      }
      .home2-1 {
        width: 30%;
        margin: 0px 30px;
      }
      .home2-2 {
        width: 50%;
        margin: 0px 50px;
      }
      .introduce {
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
        .subject {
          font-family: "Raleway", sans-serif;
          font-size: 26px;
        }
      }
      .introduce1 {
        text-align: left;
        padding: 0px 30px;
        width: 40%;
      }
      .intro2 {
        width: 70%;
      }
      .introduce2 {
        text-align: right;
        padding: 0px 30px;
      }
      .introduce3 {
        text-align: left;
        padding: 0px 30px;
      }
      .introduce4 {
        width: 50%;
        text-align: center;
        .iLink {
          height: 50px;
          line-height: 48px;
          padding: 0px 15px;
          border: 2px solid #64574d;
          border-radius: 50px;
          text-align: center;
          margin-bottom: 2px;
          transition: padding 0.5s;
          position: relative;
          &:hover {
            padding-right: 45px;
            &:after {
              opacity: 1;
            }
          }
          &:after {
            content: "⇢";
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            opacity: 0;
            transition: opacity 0.5s;
          }
        }
      }
    }
  }
  #About {
    margin: 100px 0px;
    color: #efe8df;
    .flex {
      padding: 0px 10px;
      justify-content: space-evenly;
    }
    .about {
      font-family: "Italiana", serif;
      font-style: italic;
      font-size: 130px;
      line-height: 130px;
      text-align: left;
      margin-bottom: -21px;
    }
    .info {
      .infoImg {
        width: 100%;
      }
      .infoText {
        margin-top: 30px;
        padding: 0px 20px;
        .list {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0px;
          }
          .title {
            padding-top: 20px;
            text-align: left;
            font-size: 26px;
            letter-spacing: 1.2px;
          }
          ul {
            margin-top: 10px;
            li {
              display: grid;
              grid-template-columns: 150px 1fr;
              .name {
                text-align: left;
                font-size: 18px;
              }
              .content {
                text-align: left;
                font-size: 18px;
                .small {
                  font-size: 14px;
                  opacity: 60%;
                }
              }
            }
          }
        }
      }
    }
    .skillGrp {
      margin: 20px 10px;
      .title {
        font-size: 26px;
        letter-spacing: 1.2px;
        text-align: left;
        font-weight: bold;
      }
      .skill {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
      }
    }
  }
}

main #About .skillGrp .skill > li .horiz {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
main #About .skillGrp .skill > li .horiz > li {
  text-align: left;
  margin-top: 10px;
}
main #About .skillGrp .skill > li .horiz > li .numAnimation {
  font-size: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}
main #About .skillGrp .skill > li .horiz > li .lang {
  font-size: 18px;
  font-weight: bold;
}
main #About .skillGrp .skill > li .horiz > li .con {
  font-size: 16px;
}

main #Portfolio {
  margin: 100px 0px;
  color: #efe8df;
}
main #Portfolio .portfolio {
  font-family: "Italiana", serif;
  font-style: italic;
  font-size: 130px;
  line-height: 130px;
  text-align: left;
}

main #Contact {
  margin: 100px 0px;
  color: #efe8df;
  position: relative;
  .contact {
    margin-top: 200px;
    font-family: "Italiana", serif;
    font-style: italic;
    font-size: 130px;
    line-height: 130px;
    text-align: left;
  }
  form {
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 30px;
      padding: 50px 30px;
      margin: 100px 0px 200px;
      li {
        opacity: 0;
        margin-top: 50px;
        transition: all 1s;
        .mailBox {
          width: 100%;
          border: 2px solid #fff;
          background-color: transparent;
          color: #fff;
          line-height: 48px;
          padding-left: 10px;
          margin-bottom: 21px;
          &:last-child {
            margin-bottom: 0px;
          }
        }
        textarea {
          width: 100%;
          min-height: 200px;
          max-height: 200px;
          border: 2px solid #fff;
          background-color: transparent;
          color: #fff;
          padding: 10px;
          line-height: 1.5;
        }
        .sendButton {
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
          &:hover {
            background-color: #fff;
            color: #000;
            cursor: pointer;
            transform: rotate(360deg);
          }
        }
      }
    }
  }
  &.active {
    form {
      .grid {
        li {
          opacity: 1;
          margin-top: 0px;
          &:nth-child(1) {
            transition-delay: 0.4s;
          }
          &:nth-child(2) {
            transition-delay: 0.6s;
          }
          &:nth-child(3) {
            transition-delay: 0.8s;
          }
        }
      }
    }
  }
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

  .scrollToTop {
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
  &.under {
    .scrollToTop {
      background-color: #efe8df;
      color: #64574d;
    }
    .btnText {
      color: #efe8df;
    }
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

footer {
  .copy {
    color: #a39c93;
  }
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

  main #About {
    margin: 0px;
    margin-bottom: 100px;
  }
  main #About > .flex {
    flex-direction: column;
  }
  main #About .info .infoText .list .title {
    text-align: center;
  }
  main #About .info .infoText .list ul li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    .name {
      text-align: right;
    }
  }
  main #About .skillGrp {
    .title {
      text-align: center;
    }
    .skill {
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      padding: 0px 200px;
    }
  }
  main #About .skillGrp .skill > li .horiz {
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

  main #About .skillGrp .skill {
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

  main #About .skillGrp .skill {
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

  main #About .skillGrp .skill {
    grid-template-columns: 1fr;
  }
}
</style>
