<template>
  <div>
    <h3>Applicaant Information</h3>
    <EnrollForm :plan="getSelectedPlan" @enroll="next" :applicant="applicant" />
  </div>
</template>

<script>
import EnrollForm from "@/components/EnrollForm";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    applicant: undefined
  }),
  computed: {
    ...mapGetters(["getSelectedPlan"])
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
      this.$router.push("1");
    }
    this.applicant = this.$store.getters.getApplicant;
  },
  created() {
    this.$emit("changeStage", 2);
  }
};
</script>

<style lang="scss" scoped></style>
