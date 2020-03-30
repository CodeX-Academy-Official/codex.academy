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
  // methods: {
  //   async startEnrollment(form) {
  //     console.log(form);
  //     this.$store.dispatch("enroll", form);
  //     await sendToHubspot(
  //       "7092117",
  //       "c4c04dcc-7c42-4552-86df-cd3d25294c79",
  //       form
  //     );

  //     var nextRoute = this.financialAid
  //       ? "enroll-financialaid"
  //       : "enroll-tuition";
  //     this.$router.push(nextRoute);
  //   }
  // },
  computed: { ...mapGetters(["getSelectedPlan"]) },
  components: {
    PlanSpread
    // EnrollForm
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

// .hs-button {
//   background-color: $primary;
// }
</style>
