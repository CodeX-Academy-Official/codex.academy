<template>
  <div class="container">
    <h1 class="mt-4 mb-3">Self-Paced Mentoring Plans</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Self-Paced</li>
    </ol>

    <div class="row d-none d-lg-block">
      <Unsplash
        imageId="ieic5Tq8YMk"
        align="right"
        description="Coffee-driven development"
        width="1100"
        height="200"
        class="d-none d-xl-block"
      />
    </div>

    <div class="row mt-5">
      <h4 class="text-center">
        At CodeX Academy the WORLD will be a better place if YOU are coding!
        Because of that, we strive to provide the most flexible options possible
        so that you have the best chance to learn.
      </h4>
    </div>
    <div class="row mt-5">
      <PlansTable />
    </div>
  </div>
</template>

<script>
import PlansTable from "@/components/PlanTable";
import Unsplash from "@/components/Unsplash";

export default {
  components: {
    PlansTable,
    Unsplash
  }
};
</script>

<style scoped>
.bootcamp-description {
  height: 2rem;
}
</style>
