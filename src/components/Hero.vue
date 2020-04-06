<template>
  <section
    class="hero"
    :style="{'background-image': `url(${backgroundUrl})`, 'height': height}"
    :class="heroClass"
  >
    <slot />
  </section>
</template>

<script>
import HeroText from "@/components/HeroText";
import { generateUnsplashUrl } from "../utils/unsplash";

export default {
  props: {
    unsplashId: String,
    height: String,
    heroClass: String
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

<style lang="scss">
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#logo {
  text-decoration: none;
  color: white;
  font-size: 5vh;
  font-weight: bold;
}

#menu-icon {
  font-family: Geneva, sans-serif;
  font-size: 6vh;
}

// hero

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
  background: url(https://images.unsplash.com/photo-1500417148159-68083bd7333a)
    center center no-repeat;
  background-size: cover;

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
