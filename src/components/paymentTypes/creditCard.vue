<template>
  <div class="card h-100">
    <div class="card-header">
      <h5 class="card-title">Monthly Tuition</h5>
    </div>
    <div class="card-body">
      <span class="around-money">You pay</span>
      <h1 class="paymentTypeAmount">
        <Money :amount="paymentType.monthlyCharge" />
      </h1>
      <span class="around-money">per month</span>
      <p class="mt-3 card-text text-muted">Monthly tuition payments on your credit or debit card.</p>
    </div>
    <div class="card-footer">
      <a :href="url" class="btn btn-primary btn-block">
        <strong>Subscribe</strong>
      </a>
    </div>
  </div>
</template>

<script>
import Money from "@/components/Money";

export default {
  props: {
    paymentType: Object,
    number: Number,
    css: String
  },
  components: { Money },
  computed: {
    url() {
      return this.$store.state.testMode
        ? this.paymentType.testUrl
        : this.paymentType.url;
    }
  }
};
</script>