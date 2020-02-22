<template>
  <div class="container">
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">Bootcamps</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Bootcamps</li>
    </ol>

    <p>
      <strong>Looking for an intense, immersive learning experience?</strong>
      CodeX Academy has a few bootcamp options to choose from, depending on how
      far you want to go.
    </p>
    <BootcampsTable />
  </div>
</template>

<script>
import BootcampsTable from "@/components/BootcampsTable";

export default {
  components: {
    BootcampsTable
  }
};
</script>
