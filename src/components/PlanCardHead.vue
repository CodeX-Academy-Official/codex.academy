<template>
  <div class="card h-100">
    <h4 class="card-header text-center">{{ plan.title }}</h4>
    <div class="text-center mt-4 mb-4">
      <div class="display-4">${{ price }}</div>
      <div class="font-italic">{{ plan.duration }}</div>
    </div>
    <ul class="list-group list-group-flush text-center h-100">
      <li class="list-group-item">
        <div class="plan-description">{{ plan.description }}</div>
      </li>
      <li class="list-group-item">
        <SelectPlanButton :plan="plan" text="Sign Up" />
      </li>
    </ul>
  </div>
</template>

<script>
import SelectPlanButton from "@/components/SelectPlanButton";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default {
  props: {
    plan: Object,
    selectable: Boolean
  },
  components: {
    SelectPlanButton
  },
  computed: {
    price() {
      return numberWithCommas(
        this.plan.price * (this.plan.durationMonths || 1)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.list-group {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  .card-cta {
    min-height: 65px;
  }
}
</style>
