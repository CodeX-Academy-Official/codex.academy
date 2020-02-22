<template>
  <div class="container">
    <h1 class="mt-4 mb-3">What our learners are saying...</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Testimonials</li>
    </ol>

    <TestimonialsCarousel />
  </div>
</template>

<script>
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default {
  components: {
    TestimonialsCarousel
  }
};
</script>