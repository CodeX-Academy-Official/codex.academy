<template>
  <div class="container">
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">Self-Paced</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link to="/plans">Plans</router-link>
      </li>
      <li class="breadcrumb-item active">Self-Paced</li>
    </ol>

    <div class="row d-none d-lg-block mx-auto">
      <Unsplash
        imageId="oqStl2L5oxI"
        description="Coffee-driven development"
        width="1100"
        height="200"
      />
    </div>

    <div class="row mt-5">
      <h4 class="text-center">
        At CodeX Academy, we believe the WORLD will be a better place if YOU are coding!
        Because of that, we strive to provide the most flexible options possible so that you have the best chance to learn.
      </h4>
    </div>

    <div class="row mt-5">
      <SelfPacedTable />
    </div>
  </div>
</template>

<script>
import SelfPacedTable from "@/components/SelfPacedTable";
import Unsplash from "@/components/Unsplash";

export default {
  components: {
    SelfPacedTable,
    Unsplash
  }
};
</script>

<style lang="scss" scoped>
.header-image img {
  // width: 100%;
}
</style>