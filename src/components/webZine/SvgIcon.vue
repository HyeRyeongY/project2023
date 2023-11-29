<template>
  <div>
    <img
      :src="require(`@/assets/icon/svg/${icon}.svg`)"
      alt="SVG Icon"
      style="color: #fff"
    />
  </div>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
    },
  },
};
</script>
