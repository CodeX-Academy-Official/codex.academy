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
    height: String,
    heroClass: String,
    backgroundColor: String
  },
  components: {
    HeroText
  },
  computed: {
    backgroundUrl() {
      return generateUnsplashUrl(this.unsplashId, "1600", "900");
    }
  }
};
</script>

<style lang="scss" >
.hero-wrapper {
  background-position: center;
}
.hero {
  overflow: visible;
  height: auto;
  font-size: 3vh;
  text-shadow: 2px 2px 5px #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1em;

  box-sizing: border-box;
  color: white;

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
  }
  h2 {
    font-size: 6vw;
  }
  h3 {
    font-size: 4.5vw;
  }
  h4 {
    font-size: 3vw;
  }
  h5 {
    font-size: 1.5vw;
  }
}
</style>
