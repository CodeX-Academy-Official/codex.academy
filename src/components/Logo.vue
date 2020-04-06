<template>
  <div class="d-block" :style="{width: width}" :class="{white: color==='white'}">
    <img :src="src" :width="width" />
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    width: Number,
    orientation: String
  },
  computed: {
    src() {
      if (this.orientation === "vertical")
        return "img/logo/website_logo_transparent_background.png";
      return "img/logo/horizontal_logo.png";
    }
  }
};
</script>

<style lang="scss" scoped>
.white {
  filter: brightness(0) invert(1);
  //invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%)
  //contrast(103%);
}
</style>