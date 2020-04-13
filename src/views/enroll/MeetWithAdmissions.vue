<template>
  <div class="row">
    <div class="col">
      <h3>Time to Meet with Admissions</h3>
      <p>
        Your application for
        <strong>{{ selectedPlan.title }}</strong> has been received and is
        currently processing.
      </p>
      <p>
        Your next step is to meet with an admissions counsellor to discuss your
        application and payment options.
      </p>
      <p>
        <a
          href="https://meetings.hubspot.com/christian253/codex-academy-program-selection"
          class="btn btn-primary"
          >Schedule a Meeting</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ selectedPlan: {} }),
  mounted() {
    this.selectedPlan = this.$store.getters.getSelectedPlan;
  }
};
</script>

<style></style>
