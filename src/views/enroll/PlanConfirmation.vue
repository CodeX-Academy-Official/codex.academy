<template>
  <div>
    <h3>Confirm Program</h3>

    <PlanSpread :plan="selectedPlan" />

    <p class="mt-4">
      <button class="btn btn-primary" @click="confirmPlan">
        <strong>Yes, Enroll in This Program</strong>
      </button>
    </p>
    <p>
      <button class="btn btn-secondary" @click="changePlan">
        No, Change Program
      </button>
    </p>
  </div>
</template>

<script>
import Progress from "@/components/Progress";
import PlanSpread from "@/components/PlanSpread";
import EnrollForm from "@/components/EnrollForm";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedPlan: {}
    };
  },
  computed: { ...mapGetters(["getSelectedPlan"]) },
  components: {
    PlanSpread
  },
  methods: {
    confirmPlan() {
      this.$router.push("/enroll/applicant");
    },
    changePlan() {
      this.$router.push("/findplan");
    }
  },
  mounted() {
    this.selectedPlan = this.$store.getters.getSelectedPlan;
    if (!this.selectedPlan) {
      this.$router.push("/findplan");
    }
  },
  created() {
    this.$emit("changeStage", 1);
  }
};
</script>

<style lang="scss" scoped>
@import "@/variables";
</style>
