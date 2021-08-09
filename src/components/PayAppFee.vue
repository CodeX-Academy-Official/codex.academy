<template>
  <StripeCheckoutButton
    :isSubscription="true"
    :paymentType="paymentType"
    :applicant="applicant"
    successRoute="waitForApproval"
    cancelRoute="appfee"
    ><strong>Pay Application Fee</strong></StripeCheckoutButton
  >
</template>

<script>
import StripeCheckoutButton from "@/components/StripeCheckoutButton";

export default {
  components: { StripeCheckoutButton },
  props: {
    applicant: Object,
  },
  data: () => ({
    paymentType: {
      stripeSku: "sku_HKFWFhfuSLJiEQ",
      testStripeSku: "price_1JMcYqLzpK0DhepDdCqi9EY4",
    },
  }),
  methods: {},
};
</script>
