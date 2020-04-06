<template>
  <div>
    <slot />
    <Footer />
  </div>
</template>

<script>
import Footer from "./footer";

export default {
  components: {
    Footer
  }
};
</script>

