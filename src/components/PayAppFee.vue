<template>
  <button @click="navigate" class="btn btn-primary">
    <strong>Pay Application Fee</strong>
  </button>
</template>

<script>
export default {
  methods: {
    navigate() {
      const test = "https://app.hubspot.com/sales-checkout/test_ih6q_gq2";
      const prod = "https://app.hubspot.com/sales-checkout/ETjWnNGc";
      const url = this.$store && this.$store.state.testMode ? test : prod;
      window.location.href = url;
    }
  }
};
</script>
