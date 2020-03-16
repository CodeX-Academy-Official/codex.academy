<template>
  <div :class="alignedClass">
    <img :src="fullPath" :alt="description" :width="width" />
  </div>
</template>

<script>
export default {
  props: {
    imageId: { type: String, default: "" },
    query: { type: String, default: "coding" },
    align: { type: String, default: "right" },
    description: String,
    width: String,
    height: String,
    imageClass: String,
    thumbnail: { type: Boolean, default: true }
  },
  computed: {
    fullPath() {
      const id = this.imageId ? `/${this.imageId}` : "";
      const query = this.query ? `/?${this.query}` : "";
      const url = `https://source.unsplash.com${id}/${this.imageDimensions}${query}`;
      return url;
    },
    alignedClass() {
      const alignment = this.align === "right" ? " float-right" : "";

      if (this.thumbnail) {
        return `thumbnail ${this.imageClass} ${alignment}`;
      }
      return `${this.imageClass} ${alignment}`;
    },
    imageDimensions() {
      if (this.width.indexOf("%") > -1 || this.height.indexOf("%" > -1)) {
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
.thumbnail {
  padding: 1rem;
  img {
    border: #333 solid 1px;
    padding: 0.3rem;
    width: 100%;
  }
}
</style>
