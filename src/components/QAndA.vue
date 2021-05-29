<template>
  <div class="card mb-3">
    <div class="card-header" role="tab" id="headingOne">
      <h5 class="mb-0">
        <a
          data-toggle="collapse"
          data-parent="#accordion"
          :href="'#' + id"
          aria-expanded="true"
          aria-controls="collapseOne"
          >{{ question }}</a
        >
      </h5>
    </div>

    <div
      :id="id"
      class="collapse hide"
      role="tabpanel"
      aria-labelledby="headingOne"
    >
      <div class="card-body text-left">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    id: String,
  },
};
</script>
