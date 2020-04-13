<template>
  <div>
    <h3>Pay Application Fee</h3>
    <div v-if="!getApplicationFee">
      <p>
        To complete your applicaion for
        <strong>{{ getSelectedPlan.title }}</strong
        >, please submit a ${{ amount }} application fee using the button below.
      </p>
      <p>
        <i>This payment is made using a secure payment portal by Stripe.</i>
      </p>
      <PayAppFee />
    </div>
    <div v-else>
      <p>
        Your application fee has been paid and applied to your account. A
        receipt has been sent to your email address.
      </p>
      <router-link to="/enroll/admissions" class="btn btn-primary"
        >Meet with Admissions</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PayAppFee from "@/components/PayAppFee";

export default {
  computed: {
    ...mapGetters(["getSelectedPlan", "getApplicationFee", "getApplicant"])
  },
  data: () => ({
    amount: 50
  }),
  components: { PayAppFee },
  mounted() {
    if (this.$route.query.paid) {
      this.$store.dispatch("payAppFee");
      //this.$emit("completed", 3);
    }
  }
};
</script>

<style lang="scss" scoped></style>
