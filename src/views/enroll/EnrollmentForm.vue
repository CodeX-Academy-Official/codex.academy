<template>
  <div>
    <h3>Applicant Information</h3>
    <EnrollForm :plan="getSelectedPlan" @enroll="next" :initialApplicant="getApplicant" />
  </div>
</template>

<script>
import EnrollForm from "@/components/EnrollForm";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "getSelectedPlan",
      "getApplicant",
      "getStartDate",
      "getPromoCodesDisplay"
    ])
  },
  components: {
    EnrollForm
  },
  methods: {
    async next(info) {
      const program = this.getSelectedPlan || {};
      const applicant = {
        ...info,
        promoCodes: this.getPromoCodesDisplay,
        startDate: this.getStartDate,
        selectedProgram: program.title,
        selectedProgramTotal: program.total
      };
      await this.$store.dispatch("enroll", applicant);
      this.$emit("completed", 2);
    }
  }
};
</script>

<style lang="scss" scoped></style>
