<template>
  <div class="photo" :class="imageClass" :style="imageStyle">
    <img :src="fullPath" :alt="description" class="img-fluid rounded" />
  </div>
</template>

<script>
export default {
  props: {
    filename: String,
    align: String,
    description: String,
    width: String
  },
  computed: {
    fullPath() {
      return `/img/photos/${this.filename}`;
    },
    imageClass() {
      return this.align === "right" ? " float-right" : "";
    },
    imageStyle() {
      return `width: ${this.width}`;
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  border: #333 solid 1px;
  padding: 0.3rem;
  width: 100%;
}
.photo {
  padding: 1rem;
}
</style>
