<template>
  <form>
    <div class="survey">
      <h3 class="mb-3">Just a few questions...</h3>
      <div class="form-group">
        <label for="exampleFormControlInput1">
          What level software developer to you want to be when you finish
          studying?
        </label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="targetLevel"
        >
          <option value></option>
          <option value="3">Front-End Developer (Level 3)</option>
          <option value="6">Full-Stack Developer (Level 6)</option>
          <option value="9">Full-Stack Agile Engineer (Level 9)</option>
        </select>
      </div>

      <div class="form-group" v-if="targetLevel">
        <label for="exampleFormControlInput1"
          >Do you plan on learning with a mentor?</label
        >
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="mentoring"
        >
          <option value></option>
          <option value="yes">Yes, I want to work with a mentor!</option>
          <option value="no">No, I plan on going it alone.</option>
        </select>
      </div>

      <div v-if="mentoring == 'yes'">
        <div class="form-group">
          <label for="exampleFormControlSelect1"
            >In how many months do hope to graduate?</label
          >
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            v-model="studyMonths"
          >
            <option></option>
            <option v-if="targetLevel == '3'" value="3">3 months</option>
            <option value="6">6 months</option>
            <option value="9">9 months</option>
            <option value="12">12 months</option>
          </select>
        </div>
      </div>
    </div>
    <div
      v-if="studyMonths && !hasSuggestedPlans"
      class="alert alert-danger"
      role="alert"
    >
      <h1>Hmmmmm</h1>
      <p>
        It looks like we don't have any plans that would help you meet your goal
        of Level-{{ targetLevel }} Developer in {{ studyMonths }} months.
      </p>
    </div>
    <div
      v-if="(mentoring == 'no' || studyMonths) && hasSuggestedPlans"
      class="mt-5"
    >
      <h3>Here are some programs that would work:</h3>
      <!-- <ul>
        <li>
          We suggest you complete {{ suggestedLevelPerMonth }}
          {{ suggestedLevelPerMonth === 1 ? "level" : "levels" }} per month to
          meet your goals.
        </li>
        <li>
          You'll need a plan with at least
          {{ suggestedHours }} study-hours/week.
        </li>
      </ul>-->

      <div v-if="bootcamps.length > 0" class="mt-5">
        <h3 class="mb-4 subtitle">Bootcamps</h3>
        <div class="row">
          <div v-for="plan in bootcamps" :key="plan.id" class="col col-md-4">
            <PlanCardHead :plan="plan" />
          </div>
        </div>
      </div>

      <div v-if="selfPaced.length > 0" class="mt-5">
        <h3 class="mb-4 subtitle">Self-Paced</h3>
        <div class="row">
          <div v-for="plan in selfPaced" :key="plan.id" class="col col-md-4">
            <PlanCardHead :plan="plan" />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import PlanCardHead from "@/components/PlanCardHead";
import Unsplash from "@/components/Unsplash";

export default {
  components: { PlanCardHead, Unsplash },
  data: () => ({
    mentoring: false,
    mentorHours: false,
    studyMonths: false,
    targetLevel: false,
    plans: []
  }),
  computed: {
    hasSuggestedPlans() {
      return this.suggestedPlans.length > 0;
    },
    bootcamps() {
      return this.suggestedPlans.filter(x => x.isBootcamp).splice(0, 3);
    },
    selfPaced() {
      return this.suggestedPlans.filter(x => !x.isBootcamp).splice(0, 3);
    },
    months() {
      const studyMonths = parseInt(this.studyMonths);
      return studyMonths;
    },
    suggestedPlans() {
      const isMentoring = this.mentoring == "yes";
      const isIndependent = this.mentoring == "no";

      if (isIndependent) {
        return this.plans.filter(x => !x.isMentoring);
      }

      const studyHours = this.suggestedHours;
      const suggestedLevelPerMonth = this.suggestedLevelPerMonth;
      const targetLevel = parseInt(this.targetLevel);

      let plans = this.plans.filter(
        x =>
          x.levelPerMonth >= suggestedLevelPerMonth &&
          x.minimumWeekyStudyHours >= studyHours &&
          (!x.durationMonths || x.durationMonths <= this.months) &&
          (!x.durationMonths ||
            x.levelPerMonth * x.durationMonths >= targetLevel)
      );

      return plans
        .map(p => ({ ...p, total: p.price * p.durationMonths || this.months }))
        .sort((a, b) => a.total - b.total);
    },
    suggestedLevelPerMonth() {
      const targetLevel = parseInt(this.targetLevel);
      let studyMonths = parseInt(this.studyMonths);
      const studyHours = parseInt(this.studyHours);

      if (studyMonths) {
        return targetLevel / studyMonths;
      }

      const monthHours = 40;
      const hoursFromLevels = targetLevel * monthHours;
      studyMonths = hoursFromLevels / studyHours;
      return targetLevel / studyMonths;
    },
    suggestedHours() {
      const studyMonths = parseInt(this.studyMonths);
      if (!studyMonths) return parseInt(this.studyHours);
      const targetLevel = parseInt(this.targetLevel);
      const levelHours = targetLevel * 40;
      const studyHours = levelHours / studyMonths;
      return studyHours;
    }
  },
  methods: {
    selectPlan(plan) {
      this.$emit("planSelected", plan);
    }
  },

  mounted() {
    this.plans = this.$store.getters.getPlans;
  }
};
</script>

<style lang="scss" scoped>
.survey {
  padding: 20px;
  background-color: #f8f9fa;
}
.subtitle {
  color: #999;
}
</style>
