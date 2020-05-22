<template>
  <div class="row">
    <div class="col">
      <h3>Hooray!</h3>
      <p>
        We have received your information. Please check your email for next
        steps.
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
      this.$store.dispatch("setPaymentInfo", paymentInfo);
    }
  },
};
</script>
