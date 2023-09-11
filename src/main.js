import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index.js"; // [router]
// import globals from './commonGlobal/global.js' // [global]

/* 전역 컴포넌트 */
import ContentLayout from "@/components/webZine/ContentLayout.vue";
import Arrow from "@/components/webZine/Arrow.vue";

const app = createApp(App); // [앱 생성 실시]

app.use(router); // [라우터 사용 설정]

app.component("ContentLayout", ContentLayout); // 전역 컴포넌트 등록
app.component("Arrow", Arrow); // 전역 컴포넌트 등록
// app.use(globals); // [글로벌 사용 설정]

app.mount("#app"); // [main 아이디 : 렌더링 시작점]
