<template>
  <!-- Page Content -->
  <div class="container">
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">CodeX Academy Method</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Portfolio 1</li>
    </ol>

    <mentorDriven />
    <hr />
    <selfPaced />
    <hr />
    <remote />
    <hr />
    <mastery-based />
    <hr />
    <internship />

    <hr />

    <!-- Pagination -->
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </div>
  <!-- /.container -->
</template>

<script>
import mentorDriven from "@/components/method/mentor-driven";
import selfPaced from "@/components/method/self-paced";
import remote from "@/components/method/remote";
import masteryBased from "@/components/method/mastery-based";
import internship from "@/components/method/internship";

export default {
  components: {
    mentorDriven,
    internship,
    masteryBased,
    remote,
    selfPaced
  }
};
</script>