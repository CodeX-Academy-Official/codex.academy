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
};
</script>
