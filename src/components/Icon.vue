<template>
  <inline-svg
    id="svg1"
    :src="require(`./svg/noun/${name}.svg`)"
    width="100"
    height="100"
    :fill="true"
    :aria-label="name"
    @loaded="loaded($event)"
    @error="error($event)"
    :class="iconClass"
  ></inline-svg>
</template>

<script>
import InlineSvg from "vue-inline-svg";

// Your component
export default {
  components: {
    InlineSvg
  },
  props: {
    name: { type: String, default: "happy" },
    iconClass: String
  },
  methods: {
    error(ev) {
      console.error(ev);
    },
    loaded(ev) {}
  }
};
</script>

<style></style>
