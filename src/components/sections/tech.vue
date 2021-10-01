<template>
  <div class="bg-lilac pt-5 pb-5">
    <div class="container text-center">
      <h1>Knowledge is Power</h1>
      <h5>Some of the technologies you'll be learning</h5>
      <div class="mb-5 mt-5">
        <Technologies :includeName="true" :onlyImportant="true" :max="max" />
        <div class="text-center">
          <router-link class="btn btn-secondary" to="/howitworks#tech">See More Technologies</router-link>
        </div>
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import Technologies from "@/components/Technologies";
export default {
  props: {max: Number},
  components: { Technologies }
};
</script>

<style>
</style>