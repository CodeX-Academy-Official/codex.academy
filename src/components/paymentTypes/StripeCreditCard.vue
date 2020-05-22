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
      <p class="mt-3 card-text text-muted">
        Monthly tuition payments on your credit or debit card.
      </p>
    </div>
    <div class="card-footer">
      <StripeCheckoutButton
        :isSubscription="true"
        :paymentType="paymentType"
        :applicant="applicant"
        ><strong>Subscribe</strong></StripeCheckoutButton
      >
    </div>
  </div>
</template>

<script>
import Money from "@/components/Money";
import StripeCheckoutButton from "@/components/StripeCheckoutButton";

export default {
  props: {
    paymentType: Object,
    applicant: Object,
    number: Number,
    css: String,
  },
  components: { Money, StripeCheckoutButton },
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
