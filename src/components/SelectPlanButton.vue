<template>
  <button :class="buttonClass" @click="selectPlan">
    <strong>{{text}}</strong>
  </button>
</template>

<script>
export default {
  props: {
    plan: Object,
    text: String,
    buttonClass: { type: String, default: "btn btn-primary" }
  },
  methods: {
    selectPlan() {
      this.$store.dispatch("selectPlan", this.plan);
      this.$router.push("/enroll");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>