<template>
  <div class="photo" :class="imageClass">
    <img :src="fullPath" :alt="description" class="img-fluid rounded" />
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
    height: String
  },
  computed: {
    fullPath() {
      const id = this.imageId ? `/${this.imageId}` : "";
      const query = this.query ? `/?${this.query}` : "";
      const url = `https://source.unsplash.com${id}/${this.imageDimensions}${query}`;
      return url;
    },
    imageClass() {
      return this.align === "right" ? " float-right" : "";
    },
    imageDimensions() {
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
img {
  border: #333 solid 1px;
  padding: 0.3rem;
  width: 100%;
}
.photo {
  padding: 1rem;
}
</style>
