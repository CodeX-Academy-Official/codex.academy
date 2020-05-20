<template>
  <form @submit.prevent="confirmProgram">
    <h3>Confirm Program</h3>

    <div class="table-responsive">
      <table class="table">
        <tr>
          <th style="width: 30%">Program:</th>
          <td>
            <span v-if="activePlan.isFixed">{{ activePlan.name }}</span>
            <select
              id="activePlan"
              class="inputLikeText"
              placeholder="Select a Program"
              v-model="activePlanId"
              @change="changedActivePlan"
              v-if="!activePlan.isFixed"
            >
              <option
                v-for="c in availablePrograms"
                :key="c.name"
                :value="c.id"
                >{{ c.name }}</option
              >
            </select>
          </td>
        </tr>
        <tr>
          <th>Description:</th>
          <td>{{ activePlan.description }}</td>
        </tr>
        <tr>
          <th>Weekly Study:</th>
          <td>
            <select
              v-if="!isMonthly && !activePlan.isFixed"
              id="studyHours"
              class="inputLikeText"
              placeholder="Weekly Study Hours"
              v-model="studyHours"
            >
              <option :value="10">10 Hours/Week or Less</option>
              <option :value="20">Around 20 Hours/Week</option>
              <option :value="30">Around 30 Hours/Week</option>
              <option :value="40">40 Hours/Week or More</option>
            </select>
            <p v-if="isMonthly || activePlan.isFixed">
              {{ studyHours }} Hours/Week
            </p>
          </td>
        </tr>
        <tr>
          <th>Weekly Mentor Hours:</th>
          <td>
            <span title="Calculated from your weekly study hours."
              >{{ calculatedMentorHours }} hours</span
            >
          </td>
        </tr>
        <tr v-if="calculatedProgramMonths > 1">
          <th>Approximate Program Duration:</th>
          <td>
            <span title="Calculated from your weekly study hours."
              >{{ calculatedProgramMonths }} months</span
            >
          </td>
        </tr>
        <tr>
          <th>Start Date:</th>
          <td>
            <input
              type="date"
              v-model="startDate"
              class="inputLikeText"
              :class="{ error: !isValid(startDate) }"
            />
            <div
              class="mt-2 text-danger"
              role="alert"
              v-if="startDate && !isValid(startDate)"
            >
              Start date must be in the future.
            </div>
          </td>
        </tr>
        <tr>
          <th>Promo Code:</th>
          <td>
            <input
              style="width: 100px"
              class="inputLikeText"
              v-model="promoCode"
            />
            <button
              class="btn btn-sm btn-outline-secondary ml-2"
              @click.prevent="applyPromoCode"
            >
              Apply
            </button>
            <p v-if="getPromoCodesDisplay" class="small muted">
              {{ getPromoCodesDisplay.toUpperCase() }} applied
            </p>
          </td>
        </tr>
      </table>
    </div>
    <p class="mt-4 text-center">
      <button class="btn btn-primary">
        <strong>Continue Application</strong>
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
import { getNextDeadlineFormatted, getNextDeadline } from "@/utils/dates";
import { mapToActivePlan } from "../../store/plans";
import { mapCertificationToPlan } from "../../store/certifications";

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
      activePlanId: 0,
      activePlan: {},
      startDate: getNextDeadlineFormatted(),
      promoCode: "",
      studyHours: 40,
    };
  },
  computed: {
    ...mapGetters([
      "getActivePlan",
      "getCertifications",
      "getStartDate",
      "getPromoCodesDisplay",
      "getSelfPaced",
    ]),
    isMonthly() {
      return this.activePlan && this.activePlan.isMonthly;
    },
    availablePrograms() {
      if (this.isMonthly) {
        return this.getSelfPaced.map((x) =>
          mapToActivePlan(x, this.getStartDate)
        );
      }
      return this.getCertifications.map((x) =>
        mapCertificationToPlan(x, this.getStartDate)
      );
    },
    calculatedMentorHours() {
      if (this.activePlan.isFixed) return this.activePlan.mentorHours;
      return this.studyHours / 8;
    },
    calculatedProgramMonths() {
      const weeks = this.activePlan.totalStudyHours / this.studyHours;
      return (weeks / 52) * 12;
    },
  },
  components: {
    PlanSpread,
  },
  methods: {
    changedActivePlan() {
      if (this.isMonthly) {
        this.studyHours = this.activePlan.studyHours;
      }
      this.activePlan = this.availablePrograms.find(
        (x) => x.id === this.activePlanId
      );
    },
    isValid(startDate) {
      return new Date(startDate) > getYesterday();
    },
    confirmProgram() {
      if (this.isValid(this.startDate)) {
        this.applyPromoCode();
        const activePlan = mapToActivePlan(this.activePlan, this.startDate);

        this.$store.dispatch("setActivePlan", {
          ...this.activePlan,
          startDate: this.startDate,
          studyHours: this.studyHours,
          mentorHours: this.calculatedMentorHours,
          months: this.calculatedProgramMonths,
        });
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
    },
  },
  mounted() {
    this.activePlan = this.getActivePlan;
    if (!this.activePlan) {
      this.$router.push("/");
    }

    if (this.activePlan) {
      this.activePlanId = this.activePlan.id;

      if (this.activePlan.studyHours)
        this.studyHours = this.activePlan.studyHours;

      if (this.activePlan.startDate) this.startDate = this.activePlan.startDate;
    }

    if (this.getStartDate) {
      this.startDate = this.getStartDate;
    }
  },
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
.inputLikeText {
  background-color: transparent;
  border: none;
  border-bottom: solid 1px #eee;
}
</style>
