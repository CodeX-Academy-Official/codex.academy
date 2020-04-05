<template>
  <inline-svg
    :src="src"
    @loaded="loaded($event)"
    @error="error($event)"
    width="100"
    height="100"
    fill="black"
    :aria-label="name"
  ></inline-svg>

  <!-- <img svg-inline class="icon" :src="src" :alt="name" /> -->
</template>

<script>
import InlineSvg from "vue-inline-svg";

// Your component
export default {
  components: {
    InlineSvg,
  },
  props: {
    name: { type: String, default: "agile" },
  },
  computed: {
    src() {
      //return `img/noun/${this.name.toLowerCase()}.svg`;
      //const path = `@/components/svg/noun/${this.name.toLowerCase()}.svg`;
      const path = "./svg/noun/happy.svg";
      return require(path);
    },
  },
  methods: {
    error(ev) {
      console.error(ev);
    },
    loaded(ev) {
      console.log(ev);
    },
  },
};
</script>

<style></style>
