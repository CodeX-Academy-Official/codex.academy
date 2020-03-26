<template>
  <div class="hero-title middle row">
    <div class="col-3 d-none d-md-block"></div>
    <div class="col d-flex">
      <div class="align-self-center">
        <p class="mb-5">
          <i>
            Quickly gain the skills you need to enter the technology
            workforce.
          </i>
        </p>
        <h3 class="mb-4">Learn to code in 6 months</h3>
        <SelectPlanButton
          :plan="getBootcamp6"
          text="Enroll Now"
          buttonClass="btn btn-primary btn-lg"
        />
      </div>
    </div>
    <div class="col-3 d-none d-md-block"></div>
  </div>
</template>

<script>
import SelectPlanButton from "@/components/SelectPlanButton";
import { mapGetters } from "vuex";

export default {
  computed: { ...mapGetters(["getBootcamp6"]) },
  components: { SelectPlanButton }
};
</script>
<style lang="scss" scoped>
.hero-title {
  color: white;
  height: inherit;
  position: relative;
  width: 100%;
  z-index: 5;
  position: relative;
  left: 15px;

  h3 {
    font-size: 3.5rem;
    line-height: 4.2rem;
    letter-spacing: 0.3rem;
    font-weight: 900;
    color: white;
    padding: 0px;
    text-transform: uppercase;
  }
  p {
    font-style: italic;
    font-size: 1.2rem;
    position: relative;
    top: 20px;
  }
}
</style>
