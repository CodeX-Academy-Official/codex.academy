<template>
  <!-- Page Content -->
  <div class="container">
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">Curriculum</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Curriculum</li>
    </ol>

    <CurriculumTable />
  </div>
  <!-- /.container -->
</template>

<script>
import CurriculumTable from "@/components/CurriculumTable";

export default {
  components: {
    CurriculumTable
  }
};
</script>

<style lang="scss" scoped></style>
