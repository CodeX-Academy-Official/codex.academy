<template>
  <div class="mt-5">
    <div class>
      <div class="container">
        <div class="pt-5 text-center">
          <h1>Awards & Recognition</h1>
          <div class="mt-5 pb-5">
            <h5 class="winner">Technology Emerging Winner</h5>
            <AwardModal />
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AwardModal from "@/components/AwardModal";
export default {
  components: { AwardModal },
};
</script>

<style>
.winner {
  padding-bottom: 1rem;
}
.winnerDate {
  padding-top: 1rem;
  padding-left: 2rem;
}
</style>
