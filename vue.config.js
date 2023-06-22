const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // lintOnSave: false, // vue 파일 이름을 두글자 이상으로 설정해야하는 오류 해제
});
