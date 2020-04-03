<template>
  <img :src="fullPath" :alt="description" :class="imageClass" />
</template>

<script>
import { generateUnsplashUrl } from "@/utils/unsplash";

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
      const url = generateUnsplashUrl(this.imageId, this.width, this.height);
      return url;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
