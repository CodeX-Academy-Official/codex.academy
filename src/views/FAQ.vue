<template>
  <!-- Page Content -->
  <div class="container">
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">
      Frequently Asked Questions
      <small>Subheading</small>
    </h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">FAQ</li>
    </ol>

    <div class="mb-4" id="accordion" role="tablist" aria-multiselectable="true">
      <div class="card">
        <div class="card-header" role="tab" id="headingOne">
          <h5 class="mb-0">
            <a
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >What can I expect as a full-time student?</a>
          </h5>
        </div>

        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
          <div class="card-body">
            <expectations />
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" role="tab" id="headingTwo">
          <h5 class="mb-0">
            <a
              class="collapsed"
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >What technologies will I learn in CodeX Academy?</a>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
          <div class="card-body">
            <technologies />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.container -->
</template>

<script>
import expectations from "@/components/FAQ/expectations";
import technologies from "@/components/FAQ/technologies";

export default {
  components: {
    expectations,
    technologies
  }
};
</script>