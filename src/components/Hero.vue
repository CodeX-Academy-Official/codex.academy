<template>
  <section
    class="hero-wrapper"
    :style="{
      'background-image': `url(${backgroundUrl})`,
      'min-height': height
    }"
    :class="heroClass"
  >
    <div class="hero h-100" :style="{ 'background-color': backgroundColor }">
      <slot />
    </div>
  </section>
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
    backgroundColor: String
  },
  components: {
    HeroText
  },
  computed: {
    backgroundUrl() {
      let id = this.unsplashId;
      if (this.unsplashIds) {
        id = this.unsplashIds[
          Math.floor(Math.random() * this.unsplashIds.length)
        ];
      }
      return generateUnsplashUrl(id, "1600", "1200");
    }
  }
};
</script>

<style lang="scss">
.hero-wrapper {
  background-position: center;
  background-size: cover;
}
.hero {
  position: relative;
  overflow: visible;
  height: auto;
  text-shadow: 2px 2px 5px #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1em;

  box-sizing: border-box;
  color: white;
  font-size: 1rem;

  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
    color: white;
    padding: 0px;
    max-width: 80vw;
    margin: 0;
    margin-bottom: 1.5vh;
    font-size: 8vw;
    @media (max-width: 800px) {
      font-size: 10vw;
    }
  }
  h2 {
    font-size: 6vw;
    @media (max-width: 700px) {
      font-size: 7vw;
    }
  }
  h3 {
    font-size: 4.5vw;
    @media (max-width: 800px) {
      font-size: 5.5vw;
    }
  }
  h4 {
    font-size: 3vw;
    @media (max-width: 800px) {
      font-size: 4vw;
    }
  }
  h5 {
    font-size: 1.5vw;
    @media (max-width: 800px) {
      font-size: 3vw;
    }
  }
}
</style>
