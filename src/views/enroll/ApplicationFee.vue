<template>
  <div>
    <h3>Pay Application Fee</h3>
    <div v-if="!getApplicationFee">
      <p>
        To complete your application for
        <strong>{{ getActivePlan.name }}</strong>
        , please submit a ${{ amount }} application fee using the button below.
      </p>
      <p>
        <i>This payment is made using a secure payment portal by Stripe.</i>
      </p>
      <PayAppFee :applicant="getApplicant" />
    </div>
    <div v-else>
      <p>
        Your application fee has been paid and applied to your account. A
        receipt has been sent to your email address.
      </p>
      <p>You may now proceed to the next step.</p>
      <!-- <router-link to="/enroll/admissions" class="btn btn-primary"
        >Meet with Admissions</router-link
      > -->
      <router-link to="/enroll/waitForApproval" class="btn btn-primary"
        >Next</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PayAppFee from "@/components/PayAppFee";

export default {
  computed: {
    ...mapGetters(["getActivePlan", "getApplicationFee", "getApplicant"]),
  },
  data: () => ({
    amount: 50,
  }),
  components: { PayAppFee },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
