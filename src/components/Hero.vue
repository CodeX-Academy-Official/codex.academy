<template>
  <section class="hero" :style="{'background-image': `url(${backgroundUrl})`, height}">
    <slot />
    <!-- <h1 class="hero-title">The Title of this Hero Module</h1> -->
  </section>
</template>

<script>
import HeroText from "@/components/HeroText";
import { generateUnsplashUrl } from "../utils/unsplash";

export default {
  props: {
    unsplashId: String,
    height: String
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
  h3 {
    display: block;
    text-align: center;
    line-height: 3.5rem;
    letter-spacing: 0.3rem;
    font-weight: 900;
    color: white;
    padding: 0px;
    text-transform: uppercase;

    max-width: 16em;
    margin: 0;
    font-size: 7vh;
    // margin-bottom: 0.5vh;
  }
  h2 {
    font-size: 3vh;
  }
  h3 {
    font-size: 2vh;
  }
}
</style>
