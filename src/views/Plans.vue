<template>
  <div class="container">
    <h1 class="mt-4 mb-3">Learning Plans</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Plans</li>
    </ol>

    <p>
      At CodeX Academy the WORLD will be a better place if YOU are coding!
      Because of that, we strive to provide the most flexible options possible
      so that you have the best chance to learn.
    </p>
    <PlansTable />
  </div>
</template>

<script>
import PlansTable from "@/components/PlanTable";

export default {
  components: {
    PlansTable
  }
};
</script>

<style scoped>
.bootcamp-description {
  height: 2rem;
}
</style>
