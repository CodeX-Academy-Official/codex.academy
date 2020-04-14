<template>
  <form @submit.prevent="confirmPlan">
    <h3>Confirm Program</h3>

    <div class="table-responsive">
      <table class="table">
        <tr>
          <th style="width: 30%">Program:</th>
          <td>{{ selectedPlan.title }}</td>
        </tr>
        <tr>
          <th>Description:</th>
          <td>{{ selectedPlan.description }}</td>
        </tr>
        <tr>
          <th>Weekly Commitment:</th>
          <td>{{ selectedPlan.minimumWeeklyStudyHours }} hours</td>
        </tr>
        <tr>
          <th>Weekly Mentor Hours:</th>
          <td>{{ selectedPlan.mentorHoursPerWeek }} hours</td>
        </tr>
        <!-- <tr>
          <th>Monthly:</th>
          <td><Money :amount="selectedPlan.price" /></td>
        </tr>
        <tr>
          <th>Total:</th>
          <td><Money :amount="selectedPlan.total" /></td>
        </tr>-->
        <tr v-if="selectedPlan.isBootcamp">
          <th>Program Duration:</th>
          <td>{{ selectedPlan.durationMonths }} months</td>
        </tr>
        <tr>
          <th>Start Date:</th>
          <td>
            <input
              type="date"
              v-model="startDate"
              :class="{ error: !isValid(startDate) }"
            />
            <span
              class="alert alert-danger ml-3"
              role="alert"
              v-if="!isValid(startDate)"
              >Start date must be in the future.</span
            >
          </td>
        </tr>
        <tr>
          <th>Promo Code:</th>
          <td>
            <input style="width: 100px" v-model="promoCode" />
            <button
              class="btn btn-sm btn-outline-secondary"
              @click.prevent="applyPromoCode"
            >
              Apply
            </button>
            <p v-if="getPromoCodes" class="small muted">
              {{ getPromoCodes.join(", ") }} applied
            </p>
          </td>
        </tr>
      </table>
    </div>
    <p class="mt-4">
      <button class="btn btn-primary">
        <strong>Yes, Apply to This Program</strong>
      </button>
    </p>
    <p>
      <button class="btn btn-secondary" @click.prevent="changePlan">
        No, Change Program
      </button>
    </p>
  </form>
</template>

<script>
import Progress from "@/components/Progress";
import PlanSpread from "@/components/PlanSpread";
import EnrollForm from "@/components/EnrollForm";
import axios from "axios";
import { mapGetters } from "vuex";
import { getNextDeadlineFormatted } from "@/utils/dates";

function getFutureDate() {
  var d = new Date();
  d.setDate(d.getDate() + 365);
  return d;
}

function getYesterday() {
  var d = new Date();
  d.setDate(d.getDate() - 1);
  return d;
}

export default {
  data() {
    return {
      selectedPlan: {},
      startDate: getNextDeadlineFormatted(),
      promoCode: ""
    };
  },
  computed: {
    ...mapGetters(["getSelectedPlan", "getStartDate", "getPromoCodes"])
  },
  components: {
    PlanSpread
  },
  methods: {
    isValid(startDate) {
      return new Date(startDate) > getYesterday();
    },
    confirmPlan() {
      if (this.isValid(this.startDate)) {
        this.applyPromoCode();
        this.$store.dispatch("setStartDate", this.startDate);
        this.$emit("completed", 1);
      }
    },
    changePlan() {
      this.$router.push("/findplan");
    },
    applyPromoCode() {
      if (!this.promoCode) return;
      this.$store.dispatch("applyPromoCode", this.promoCode);
      this.promoCode = "";
    }
  },
  mounted() {
    this.selectedPlan = this.$store.getters.getSelectedPlan;
    if (!this.selectedPlan) {
      this.$router.push("/findplan");
    }

    if (this.$store.getters.getStartDate) {
      this.startDate = this.$store.getters.getStartDate;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/variables";
.error {
  border-color: red;
  background: #fdd;
}

.error:focus {
  outline-color: #f99;
}
</style>
