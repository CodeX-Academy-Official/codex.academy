<template>
  <!-- Project One -->
  <div class="row text-left">
    <div
      v-if="iconSide === 'left' || !iconSide"
      class="col-md-2 text-center align-middle"
    >
      <font-awesome-icon :icon="icon" class="fa-3x" />
      <!-- <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt /> -->
    </div>
    <div class="col">
      <h3>{{ title }}</h3>
      <p>
        {{ description }}
      </p>
      <!-- <a class="btn btn-primary" href="#">
        Enroll Now
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a> -->
    </div>
    <div v-if="iconSide === 'right'" class="col-md-2 text-center">
      <font-awesome-icon :icon="icon" class="fa-7x" />
      <!-- <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt /> -->
    </div>
  </div>
  <!-- /.row -->
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    icon: Object,
    iconSide: String
  }
};
</script>
