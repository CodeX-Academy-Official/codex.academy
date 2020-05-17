<template>
  <!-- Content Row -->
  <div class="row">
    <div class="col-lg-3 mb-4 plans-table" v-for="plan in plans" :key="plan.id">
      <PlanCard :plan="plan" :selectable="true" @selected="selected" />
    </div>
  </div>
  <!-- /.row -->
</template>

<script>
import PlanCard from "@/components/PlanCard";

export default {
  props: {
    plans: Array
  },
  components: {
    PlanCard
  },
  methods: {
    selected(plan) {
      this.$emit("selected", plan);
    }
  }
};
</script>

<style lang="scss">
.plans-table {
  text-align: center;
}
.selfpaced-description {
  height: 6.6rem;
}
</style>
