<template>
  <div class="row">
    <div class="col">
      <h3>Application Pending Approval</h3>
      <p>
        We have received your information. Your application will be reviewed
        within the next 24 hours. Please check your email for next steps.
      </p>
    </div>
  </div>
</template>

<script>
import { decode } from "@/utils/paymentToken";

export default {
  components: {},
  data: () => ({}),
  mounted() {
    const token = this.$route.query.token;
    if (token) {
      const paymentInfo = decode(token);
      if (paymentInfo.payment_type)
        this.$store.dispatch("payAppFee", paymentInfo);
    }
  },
};
</script>
