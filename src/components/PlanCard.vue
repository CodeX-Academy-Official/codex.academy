<template>
  <div class="h-100">
    <div class="card" v-bind:class="{ 'card-outline-primary': plan.primary }" v-if="plan">
      <h3
        class="card-header text-center"
        v-bind:class="{
          'bg-primary': plan.primary,
          'text-white': plan.primary
        }"
      >{{ plan.title }}</h3>
      <div class="text-center mt-4">
        <div class="display-4">
          <Money :amount="price" />
        </div>
        <div class="font-italic">{{ plan.duration }}</div>
      </div>
      <ul class="list-group list-group-flush text-center mt-4">
        <li class="list-group-item" v-if="plan.description">
          <div class="plan-description">{{ plan.description }}</div>
        </li>
        <li class="list-group-item">{{ plan.mentorHoursPerWeek }} Hours Weekly 1:1 Mentoring</li>
        <li class="list-group-item">{{ plan.minimumWeeklyStudyHours }} Hours Weekly Study Commitment</li>

        <li class="list-group-item" v-for="d in plan.details" :key="d.text || d">
          <div :class="d.css">{{ d.text || d }}</div>
        </li>
        <li
          class="list-group-item"
        >{{ plan.monthlyEvaluations }} Monthly Micro-Certification Evaluations</li>
        <li class="list-group-item" v-if="selectable">
          <SelectPlanButton :plan="plan" text="Apply" :raiseEvent="true" @selected="selected" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SelectPlanButton from "@/components/SelectPlanButton";
import Money from "@/components/Money";

export default {
  props: {
    plan: Object,
    selectable: Boolean
  },
  components: {
    SelectPlanButton,
    Money
  },
  computed: {
    price() {
      return this.plan.total || this.plan.price;
    }
  },
  methods: {
    selected(plan) {
      this.$emit("selected", plan);
    }
  }
};
</script>

<style lang="scss" scoped>
.list-group {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
