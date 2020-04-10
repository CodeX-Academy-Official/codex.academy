<template>
  <inline-svg
    id="svg1"
    :src="require(`./svg/noun/${name}.svg`)"
    :width="size"
    :height="size"
    :fill="true"
    :aria-label="name"
    @loaded="loaded($event)"
    @error="error($event)"
    :class="iconClass"
    :style="{ fill: color }"
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
    iconClass: String,
    size: { type: Number, default: 100 },
    color: String
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
