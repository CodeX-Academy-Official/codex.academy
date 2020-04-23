<template>
  <div class="card h-100 text-center">
    <h4 class="card-header text-center">{{ plan.title }}</h4>
    <div class="card-body">
      <div class="text-center mt-4 mb-4">
        <div class="display-4">
          <Money :amount="price" />
        </div>
        <div v-if="plan.isBootcamp" class="font-italic mb-3">up-front</div>
        <div v-if="!plan.isBootcamp" class="font-italic">{{ plan.duration }}</div>
        <div v-if="plan.isBootcamp" class="call-out">or Pay When you get a job</div>
      </div>
      <p class="card-text">{{ plan.description }}</p>
    </div>
    <div class="card-footer">
      <SelectPlanButton :plan="plan" text="Start Application" />
    </div>
  </div>
</template>

<script>
import Money from "@/components/Money";
import SelectPlanButton from "@/components/SelectPlanButton";

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
  }
};
</script>

<style lang="scss" scoped>
@import "@/variables";

.list-group {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  .card-cta {
    min-height: 65px;
  }
}
.call-out {
  text-transform: uppercase;
  font-size: 0.8em;
  display: inline;
  background-color: $fucia;
  color: white;
  padding: 5px;
}
</style>
