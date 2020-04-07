<template>
  <div class="card h-100 text-center">
    <h4 class="card-header text-center">{{ plan.title }}</h4>
    <div class="card-body">
      <div class="text-center mt-4 mb-4">
        <div class="display-4">${{ price }}</div>
        <div class="font-italic">{{ plan.duration }}</div>
      </div>
      <p class="card-text">{{ plan.description }}</p>
    </div>
    <div class="card-footer">
      <SelectPlanButton :plan="plan" text="Start Application" />
    </div>
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
      return numberWithCommas(this.plan.total || this.plan.price);
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
