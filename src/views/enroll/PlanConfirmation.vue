<template>
  <form @submit.prevent="confirmProgram">
    <h3>Confirm Program</h3>

    <div class="table-responsive">
      <table class="table">
        <tr>
          <th style="width: 30%">Program:</th>
          <td>
            <select
              id="program"
              class="inputLikeText"
              placeholder="Select a Certification"
              v-model="certification"
            >
              <option v-for="c in getCertifications" :key="c.name" :value="c">{{c.name}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>Description:</th>
          <td>{{ certification.description }}</td>
        </tr>
        <tr>
          <th>Weekly Study:</th>
          <td>
            <select
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
          </td>
        </tr>
        <tr>
          <th>Weekly Mentor Hours:</th>
          <td>
            <span title="Calculated from your weekly study hours.">{{ calculatedMentorHours }} hours</span>
          </td>
        </tr>
        <tr>
          <th>Approximate Program Duration:</th>
          <td>
            <span
              title="Calculated from your weekly study hours."
            >{{ calculatedProgramMonths }} months</span>
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
            <span
              class="alert alert-danger ml-3"
              role="alert"
              v-if="!isValid(startDate)"
            >Start date must be in the future.</span>
          </td>
        </tr>
        <tr>
          <th>Promo Code:</th>
          <td>
            <input style="width: 100px" class="inputLikeText" v-model="promoCode" />
            <button
              class="btn btn-sm btn-outline-secondary ml-2"
              @click.prevent="applyPromoCode"
            >Apply</button>
            <p
              v-if="getPromoCodesDisplay"
              class="small muted"
            >{{ getPromoCodesDisplay.toUpperCase() }} applied</p>
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
      certification: {},
      startDate: getNextDeadlineFormatted(),
      promoCode: "",
      studyHours: 40
    };
  },
  computed: {
    ...mapGetters([
      "getCertification",
      "getCertifications",
      "getStartDate",
      "getPromoCodesDisplay"
    ]),
    calculatedMentorHours() {
      return this.studyHours / 8;
    },
    calculatedProgramMonths() {
      const weeks = this.certification.studyHours / this.studyHours;
      return (weeks / 52) * 12;
    }
  },
  components: {
    PlanSpread
  },
  methods: {
    isValid(startDate) {
      return new Date(startDate) > getYesterday();
    },
    confirmProgram() {
      if (this.isValid(this.startDate)) {
        this.applyPromoCode();
        this.$store.dispatch("setProgram", {
          startDate: this.startDate,
          weeklyStudyHours: this.studyHours,
          weeklyMentorHours: this.calculatedMentorHours,
          months: this.calculatedProgramMonths,
          ...this.certification
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
    }
  },
  mounted() {
    this.certification = this.getCertification;
    if (!this.certification) {
      this.$router.push("/programs");
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
.inputLikeText {
  background-color: transparent;
  border: none;
  border-bottom: solid 1px #eee;
}
</style>
