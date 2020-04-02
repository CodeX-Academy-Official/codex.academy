<template>
  <div>
    <h3>Pay Application Fee</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getSelectedPlan", "getApplicant"])
  },
  components: {},
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
