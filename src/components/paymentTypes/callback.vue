<template>
  <div :class="css">
    <h3>{{number}}. Discuss Options with Admissions</h3>
    <p>If you'd like to discuss payment options, have a quick discussion with Admissions. Please fill out the form below to set up a call with an Admissions Counselor to go over your options.</p>
    <router-link to="/admissions-call-back" class="btn btn-primary">
      <strong>Set Up Call</strong>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    number: Number,
    css: String
  }
};
</script>