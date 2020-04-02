<template>
  <div>
    <h3>Pay Application Fee</h3>
    <p>
      To complete your applicaion for
      <strong>{{ getSelectedPlan.title }}</strong
      >, please submit a ${{ amount }} application fee using the button below.
    </p>
    <p><i>This payment is made using a secure payment portal by Stripe.</i></p>
    <PayAppFee />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PayAppFee from "@/components/PayAppFee";

export default {
  computed: {
    ...mapGetters(["getSelectedPlan", "getApplicant"])
  },
  data: () => ({
    amount: 50
  }),
  components: { PayAppFee },
  methods: {
    async next(applicant) {
      await this.$store.dispatch("enroll", applicant);
      this.$router.push("payment");
    }
  },
  mounted() {
    if (!this.getSelectedPlan) {
      this.$emit("changeStage", 1);
    } else if (!this.getApplicant) {
      this.$emit("changeStage", 2);
    }
  },
  created() {
    this.$emit("changeStage", 3);
  }
};
</script>

<style lang="scss" scoped></style>
