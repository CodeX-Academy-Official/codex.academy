<template>
  <button class="btn btn-primary program-select-button" :class="buttonClass" @click="selectPlan">
    <strong>{{ text }}</strong>
  </button>
</template>

<script>
export default {
  props: {
    plan: Object,
    text: String,
    buttonClass: { type: String, required: false },
    raiseEvent: Boolean
  },
  methods: {
    selectPlan() {
      if (this.raiseEvent) {
        this.$emit("selected", this.plan);
      } else {
        this.$store.dispatch("setActivePlan", this.plan);

        const hasProgram = this.$store.getters.getSelectedPlan;
        if (hasProgram) return this.$router.push("/enroll");

        this.$router.push("/findplan");
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/variables";

.program-select-button {
  .btn {
    background-color: $primary;
    border: none;
  }
  .btn:hover {
    background-color: $fucia;
  }
}
</style>
