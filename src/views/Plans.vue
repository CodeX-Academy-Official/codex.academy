<template>
  <div class="container">
    <!-- <IntroBlock /> -->
    <h1 class="mt-4 mb-3">CodeX Academy Plans</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Plans</li>
    </ol>

    <div class="row mt-5">
      <PlanCompareTable />
    </div>
  </div>
</template>

<script>
import PlanCompareTable from "@/components/PlanCompareTable";
import Unsplash from "@/components/Unsplash";

export default {
  components: {
    PlanCompareTable,
    Unsplash
  }
};
</script>

<style scoped>
.bootcamp-description {
  height: 2rem;
}
</style>
