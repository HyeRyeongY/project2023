<template>
  <div
    class="arrow_icon"
    :style="`transform: rotate(${deg}deg);`"
    @click="$emit('clickArrow')"
  >
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: "Arrow",
  props: {
    deg: {
      type: String,
      default: "0",
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
$text_color: #333;
.arrow_icon {
  position: relative;
  width: 40px;
  height: 40px;
  span {
    background: $text_color;
    position: absolute;
    width: 75%;
    height: 2px;
    top: 25%;
    left: 100%;
    transform: translate(-80%, -50%) rotate(45deg);
    opacity: 1;
    transition: all 0.4s ease-in-out;
    &:nth-child(2) {
      top: 75%;
      transform: translate(-80%, -50%) rotate(-45deg);
    }
    &:nth-child(3) {
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(0);
      transition: all 0.2s ease-in-out 0.2s;
    }
  }
  &:hover {
    .active {
      span {
        transform: translate(-80%, -50%) rotate(45deg);
        &:nth-child(2) {
          transform: translate(-80%, -50%) rotate(-45deg);
        }
        &:nth-child(3) {
          width: 100%;
          transform: translate(-50%, -50%) rotate(0);
        }
      }
    }
  }
}
// .active {
//   span {
//     opacity: 1;
//     transform: translate(-80%, -50%) rotate(45deg);
//     &:nth-child(2) {
//       transform: translate(-80%, -50%) rotate(-45deg);
//     }
//     &:nth-child(3) {
//       width: 100%;
//       transform: translate(-50%, -50%) rotate(0);
//     }
//   }
// }
</style>
