import { createApp } from "vue";
import App from "./App.vue";

import routers from "./router/index.js"; // [router]
// import globals from './commonGlobal/global.js' // [global]

const app = createApp(App); // [앱 생성 실시]

app.use(routers); // [라우터 사용 설정]

// app.use(globals); // [글로벌 사용 설정]

app.mount("#app"); // [main 아이디 : 렌더링 시작점]
