<template>
  <section>
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">Learning Plans</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Plans</li>
    </ol>

    <PlansTable />
  </section>
</template>

<script>
import PlansTable from "@/components/PlanTable";

export default {
  components: {
    PlansTable
  }
};
</script>