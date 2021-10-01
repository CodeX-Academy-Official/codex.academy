<template>
  <div class="container mt-5 text-center">
    <h1>Opportunity Awaits</h1>
    <h5>Your Options Are Looking Good</h5>
    <div class="pt-5 pb-5">
      <Stats />
      <slot/>
    </div>
  </div>
</template>

<script>
import Stats from "@/components/Stats";
export default {
  components: {
    Stats
  }
};
</script>

<style>
</style>