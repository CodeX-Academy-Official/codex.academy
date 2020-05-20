<template>
  <div>
    <h3 class="mb-3 text-center">Just a few questions...</h3>

    <div class="survey">
      <div class="form-group">
        <p for="exampleFormControlInput1" class="text-center mb-3">
          What level software developer do you want to be when you finish
          studying?
        </p>
        <CertificationSelectorGroup :certifications="getCertifications" @onSelect="setTargetLevel" />
      </div>

      <div id="select-mentoring" class="form-group" v-if="targetLevel">
        <p class="text-center mb-3">Do you plan on learning with a mentor?</p>
        <MentoringSelectorGroup @onSelect="setMentoring" />
      </div>

      <div id="select-commitment" class="form-group" v-if="mentoring === 'yes'">
        <p class="text-center mb-3">How many hours per week can you commit to studying?</p>
        <StudyCommitmentGroup @onSelect="setCommitment" />
      </div>

      <div id="select-duration" v-if="studyCommitment">
        <div class="form-group">
          <p class="text-center">In how many months do you hope to graduate?</p>
          <StudyDurationGroup @onSelect="setStudyMonths" />
        </div>
      </div>
    </div>
    <div v-if="studyMonths && !hasSuggestedPlans" class="alert alert-danger" role="alert">
      <h1>Hmmmmm</h1>
      <p>
        It looks like we don't have any plans that would help you meet your goal
        of Level-{{ targetLevel }} Developer in {{ studyMonths }} months.
      </p>
    </div>
    <div
      id="display-programs"
      v-if="(mentoring == 'no' || studyMonths) && hasSuggestedPlans"
      class="mt-5 text-center"
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
        <div class="row justify-content-center">
          <div v-for="plan in bootcamps" :key="plan.id" class="col col-md-4">
            <PlanCardHead :plan="plan" />
          </div>
        </div>
      </div>

      <div v-if="selfPaced.length > 0" class="mt-5">
        <h3 class="mb-4 subtitle">Self-Paced</h3>
        <div class="row justify-content-center">
          <div v-for="plan in selfPaced" :key="plan.id" class="col col-md-4">
            <PlanCardHead :plan="plan" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlanCardHead from "@/components/PlanCardHead";
import Unsplash from "@/components/Unsplash";
import CertificationSelectorGroup from "@/components/CertificationSelectorGroup";
import MentoringSelectorGroup from "@/components/MentoringSelectorGroup";
import StudyCommitmentGroup from "@/components/StudyCommitmentGroup";
import StudyDurationGroup from "@/components/StudyDurationGroup";
import { mapGetters } from "vuex";

export default {
  components: {
    PlanCardHead,
    Unsplash,
    CertificationSelectorGroup,
    MentoringSelectorGroup,
    StudyDurationGroup,
    StudyCommitmentGroup
  },
  data: () => ({
    mentoring: false,
    mentorHours: false,
    studyMonths: false,
    targetLevel: false,
    studyCommitment: false,
    plans: []
  }),
  computed: {
    ...mapGetters(["getCertifications"]),
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
          x.minimumWeeklyStudyHours >= studyHours &&
          (!x.durationMonths || x.durationMonths <= this.months) &&
          (!x.durationMonths ||
            x.levelPerMonth * x.durationMonths >= targetLevel)
      );

      return plans.map(p => ({ ...p })).sort((a, b) => a.total - b.total);
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
    setTargetLevel(cert) {
      this.targetLevel = cert.level;
      setTimeout(() => this.$scrollTo("#select-mentoring"), 300);
    },
    setCommitment(hours) {
      this.studyCommitment = hours;
      setTimeout(() => this.$scrollTo("#select-duration"), 300);
    },
    selectPlan(plan) {
      this.$emit("planSelected", plan);
    },
    setMentoring(option) {
      this.mentoring = option;
      if (option === "yes")
        setTimeout(() => this.$scrollTo("#select-commitment"), 300);
      else setTimeout(() => this.$scrollTo("#display-programs"), 300);
    },
    setStudyMonths(months) {
      this.studyMonths = parseInt(months);
      setTimeout(() => this.$scrollTo("#display-programs"), 300);
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
