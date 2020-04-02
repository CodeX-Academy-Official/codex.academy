<template>
  <div class="row">
    <div class="col">
      <h3>Time to Meet with Admissions</h3>
      <p>
        Your application for
        <strong>{{ selectedPlan.title }}</strong> has been received and is
        currently processing.
      </p>
      <p>Please check your email for information on your next steps.</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ selectedPlan: {} }),
  mounted() {
    this.selectedPlan = this.$store.getters.getSelectedPlan;
  },
  created() {
    this.$emit("changeStage", 4);
  }
};
</script>

<style></style>
