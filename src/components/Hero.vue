<template>
  <section
    class="hero-wrapper"
    :style="{'background-image': `url(${backgroundUrl})`, 'height': height}"
    :class="heroClass"
  >
    <div class="hero h-100" :style="{'background-color': backgroundColor}">
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

<style lang="scss" >
.hero-wrapper {
  background-position: center;
  background-size: cover;
}
.hero {
  overflow: visible;
  height: auto;
  text-shadow: 2px 2px 5px #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
    font-size: 6rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 3rem;
  }
  h4 {
    font-size: 2rem;
  }
  h5 {
    font-size: 1rem;
  }
}
</style>
