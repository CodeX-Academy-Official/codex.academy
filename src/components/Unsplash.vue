<template>
  <img :src="fullPath" :alt="description" :class="imageClass" />
</template>

<script>
export default {
  props: {
    imageId: { type: String, default: "" },
    query: { type: String, default: "" },
    description: String,
    width: String,
    height: String,
    imageClass: { type: String, default: "img-fluid" }
  },
  computed: {
    fullPath() {
      const id = this.imageId ? `/${this.imageId}` : "";
      const query = this.query ? `/?${this.query}` : "";
      const url = `https://source.unsplash.com${id}/${this.imageDimensions}${query}`;
      return url;
    },
    imageDimensions() {
      if (this.width.indexOf("%") > -1 || this.height.indexOf("%") > -1) {
        return "700x400";
      }
      if (this.width && this.height) {
        return `${this.width}x${this.height}`;
      }
      if (this.width) {
        const multiplier = 900 / 1600;
        const height = parseInt(this.width) * multiplier;
        return `${this.width}x${height}`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
