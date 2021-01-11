<template>
  <a @click="selected" class="btn btn-primary" id="selectProgram">
    <strong>{{text}}</strong>
  </a>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    certification: Object
  },

  computed: {
    ...mapGetters(["getApplicant"]),
    text() {
      return this.getApplicant ? "Select Program" : "Start Application";
    }
  },
  methods: {
    selected() {
      this.$emit("certificationSelected", this.certification);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>