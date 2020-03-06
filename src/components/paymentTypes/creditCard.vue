<template>
  <div :class="css">
    <h3>{{number}}. Set Up Recurring Credit Card Payment</h3>

    <p>You can set up a monthly subscription using your credit or debit card. For this, we use a service called Stripe. Please click the button below to set up your subscription.</p>
    <p>
      <a :href="url" class="btn btn-primary">
        <strong>Set Up Subscription</strong>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    paymentType: Object,
    number: Number,
    css: String
  },
  computed: {
    url() {
      return this.$store.state.testMode
        ? this.paymentType.testUrl
        : this.paymentType.url;
    }
  }
};
</script>