<template>
  <!-- Content Row -->
  <div class="row">
    <div class="col-lg-3 mb-4 plans-table" v-for="plan in plans" :key="plan.id">
      <PlanCard :plan="plan" selectable="true" />
    </div>
  </div>
  <!-- /.row -->
</template>

<script>
import PlanCard from "@/components/PlanCard";

export default {
  components: {
    PlanCard
  },
  computed: {
    plans() {
      return this.$store.state.plans.filter(x => !x.isBootcamp);
    }
  }
};
</script>

<style lang="scss">
.plans-table {
  text-align: center;
}
</style>
