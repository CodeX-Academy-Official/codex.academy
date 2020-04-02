<template>
  <img svg-inline class="icon" :src="src" :alt="name" />
</template>

<script>
export default {
  props: {
    name: { type: String, default: "agile" }
  },
  computed: {
    src() {
      return `img/noun/${this.name.toLowerCase()}.svg`;
    }
  }
};
</script>

//Docs: https://www.npmjs.com/package/vue-svg-inline-loader

<style></style>
