<template>
  <div class="mt-5">
    <div class>
      <div class="container">
        <div class="pt-5 text-center">
          <h1>Here is what others have to say</h1>
          <h5>CodeX Academy is a valuable experience!</h5>
          <div class="mt-5 mb-5">
            <TestimonialsCarousel />
            <slot/>
          </div>
          
        </div>
      </div>
    </div>
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

<style>
</style>