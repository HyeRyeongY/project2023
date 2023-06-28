<template>
  <div style="position: relative">
    <!-- <div>header</div> -->
    <router-view></router-view>
    <Footer />
    <NavButton :data="NavBtnList" />
  </div>
</template>
<script setup>
import Footer from "./components/Atype/Footer";
import NavButton from "./components/Atype/NavButton";

import NavBtnList from "./components/Atype/data/navButton.json";
</script>
<style lang="scss"></style>
