<template>
  <div class="container">
    <h1 class="mt-4 mb-3">Help Me Decide</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Help Me Decide</li>
    </ol>

    <PlanFinder />
  </div>
</template>

<script>
import PlanFinder from "@/components/PlanFinder";

export default {
  components: { PlanFinder }
};
</script>

<style lang="scss" scoped></style>
