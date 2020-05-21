<template>
  <div class="card h-100">
    <div class="card-header">
      <h5 class="card-title">Weekly Tuition</h5>
    </div>
    <div class="card-body">
      <span class="around-money">You pay</span>
      <h1 class="paymentTypeAmount">
        $150
      </h1>
      <span class="around-money">per week</span>
      <p class="mt-3 card-text text-muted">
        Weekly tuition payments on your credit or debit card.
      </p>
    </div>
    <div class="card-footer">
      <button @click="click" class="btn btn-primary btn-block">
        <strong>Subscribe</strong>
      </button>
    </div>
  </div>
</template>

<script>
import Money from "@/components/Money";

export default {
  props: {
    paymentType: Object,
    number: Number,
    css: String,
  },
  components: { Money },
  methods: {
    click() {
      const applicant = this.$store.getters.getApplicant;

      const payload = {
        email: applicant.email,
        paymentType: "stripe",
      };
      this.$store.dispatch("setPaymentInfo", payload);

      const url = this.$store.state.testMode
        ? this.paymentType.testUrl
        : this.paymentType.url;
      window.open(url, "_self");
    },
  },
};
</script>
