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
    ...mapGetters(["getSelectedPlan", "getApplicant", "getStartDate"])
  },
  components: {
    EnrollForm
  },
  methods: {
    async next(applicant) {
      const applicantWithStartDate = {
        ...applicant,
        startDate: this.getStartDate
      };
      await this.$store.dispatch("enroll", applicantWithStartDate);
      this.$router.push("appfee");
    }
  },
  mounted() {
    if (!this.getSelectedPlan || !this.getStartDate) {
      this.$router.push("/enroll");
    }
  },
  created() {
    this.$emit("changeStage", 2);
  }
};
</script>

<style lang="scss" scoped></style>
