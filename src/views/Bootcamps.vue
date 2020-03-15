<template>
  <div class="container">
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">Bootcamps</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link to="/Plans">Plans</router-link></li>
      <li class="breadcrumb-item active">Bootcamps</li>
    </ol>

    <div class="row d-none d-lg-block">
      <Unsplash
        imageId="oqStl2L5oxI"
        align="right"
        description="Coffee-driven development"
        width="1100"
        height="200"
        class="d-none d-xl-block"
      />
    </div>

    <div class="row mt-5">
      <h4 class="text-center">
        Looking for an intense, immersive learning experience? CodeX Academy has
        a few bootcamp options to choose from, depending on how far you want to
        go.
      </h4>
    </div>

    <div class="row mt-5">
      <BootcampsTable />
    </div>
  </div>
</template>

<script>
import BootcampsTable from "@/components/BootcampsTable";
import Unsplash from "@/components/Unsplash";

export default {
  components: {
    BootcampsTable,
    Unsplash
  }
};
</script>
