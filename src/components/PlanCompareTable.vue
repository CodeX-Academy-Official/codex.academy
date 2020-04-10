<template>
  <!-- Content Row -->
  <div class="row mb-4">
    <div class="col-12 col-md-4 text-center mb-5" v-for="plan in plans" :key="plan.id">
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

<style lang="scss"></style>
