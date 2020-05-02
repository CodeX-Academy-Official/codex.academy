<template>
  <div>
    <h3>Applicant Information</h3>
    <EnrollForm
      :plan="getProgram"
      @applicationFormSubmitted="next"
      :initialApplicant="getApplicant"
    />
  </div>
</template>

<script>
import EnrollForm from "@/components/EnrollForm";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getProgram", "getApplicant", "getPromoCodesDisplay"])
  },
  components: {
    EnrollForm
  },
  methods: {
    async next(formData) {
      const p = this.getProgram || {};
      const programFields = {};
      Object.keys(p).forEach(key => (programFields[`program_${key}`] = p[key]));

      const applicant = {
        ...formData,
        ...programFields,
        promoCodes: this.getPromoCodesDisplay
      };
      await this.$store.dispatch("enroll", applicant);
      this.$emit("completed", 2);
    }
  }
};
</script>

<style lang="scss" scoped></style>
