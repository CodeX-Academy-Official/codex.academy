<template>
  <div>
    <h3>Applicant Information</h3>
    <EnrollForm :plan="getSelectedPlan" @enroll="next" :applicant="applicant" />
  </div>
</template>

<script>
import EnrollForm from "@/components/EnrollForm";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getSelectedPlan", "getApplicant"])
  },
  components: {
    EnrollForm
  },
  methods: {
    next(applicant) {
      this.$store.dispatch("enroll", applicant);
      this.$router.push("payment");
    }
  },
  mounted() {
    if (!this.getSelectedPlan) {
      this.$emit("changeStage", 1);
    }
  },
  created() {
    this.$emit("changeStage", 2);
  }
};
</script>

<style lang="scss" scoped></style>
