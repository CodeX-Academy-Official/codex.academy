<template>
  <!-- Content Row -->
  <div class="row">
    <div class="col-lg-4 mb-4 plans-table" v-for="plan in plans" :key="plan.id">
      <PlanCompare :plan="plan" :selectable="true" />
    </div>
  </div>
  <!-- /.row -->
</template>

<script>
import PlanCompare from "@/components/PlanCompare";

export default {
  components: {
    PlanCompare
  },
  computed: {
    plans() {
      return this.$store.getters.getPlanOptions;
    }
  }
};
</script>

<style lang="scss">
.plans-table {
  text-align: center;
}
</style>
