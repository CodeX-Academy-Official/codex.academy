<template>
  <progressive-background
    class="hero-wrapper"
    :src="backgroundUrl"
    :style="{
      'min-height': height,
    }"
    :class="heroClass"
    :fallback="fallback"
    :placeholder="fallback"
    no-ratio
  >
    <div
      slot="content"
      class="hero h-100"
      :style="{
        'min-height': height,
        'background-color': backgroundColor,
      }"
    >
      <slot />
    </div>
  </progressive-background>
</template>

<script>
import HeroText from "@/components/HeroText";
import { generateUnsplashUrl } from "../utils/unsplash";

export default {
  props: {
    unsplashId: String,
    unsplashIds: Array,
    height: String,
    heroClass: String,
    backgroundColor: String,
  },
  components: {
    HeroText,
  },
  computed: {
    fallback() {
      let imgs = [
        "/img/code.jpg",
        "/img/kid-coding.jpg",
        "/img/desk.jpg",
        "/img/100-days-of-code.jpg",
      ];
      const img = imgs[Math.floor(Math.random() * imgs.length)];
      return img;
    },

    backgroundUrl() {
      let id = this.unsplashId;
      if (this.unsplashIds) {
        id = this.unsplashIds[
          Math.floor(Math.random() * this.unsplashIds.length)
        ];
      }
      return generateUnsplashUrl(id, "1600", "1200");
    },
  },
};
</script>

<style lang="scss">
.hero-wrapper {
  background-position: center;
  background-size: cover;
  position: relative;
}
.hero {
  position: relative;
  overflow: visible;
  height: auto;
  text-shadow: 2px 2px 5px #333;
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  padding: 1em;

  box-sizing: border-box;
  color: white;

  font-size: 1rem;
  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
    color: white;
    padding: 0px;
    max-width: 80vw;
    margin: 0px auto;
    font-size: 5em;
  }
  h2 {
    font-size: 4em;
  }
  h3 {
    font-size: 3.2em;
  }
  h4 {
    font-size: 2.5em;
  }
  h5 {
    font-size: 1.3em;
  }
}
</style>
