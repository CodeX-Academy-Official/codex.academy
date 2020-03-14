<template>
  <div class="tech-logo">
    <a :href="href" target="_blank">
      <img :src="src" :alt="alt" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    href: String,
    logo: String,
    info: String,
    name: String
  },
  computed: {
    src() {
      return `img/tech-logos/${this.logo}`;
    },
    alt() {
      return `${this.name} - ${this.info}`;
    }
  }
};
</script>

<style>
</style>