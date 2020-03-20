<template>
  <div class="row">
    <div class="col col-12 col-md-4" v-for="t in getThreeTestimonials" :key="t.name">
      <testimonial
        :name="t.name"
        :location="t.location"
        :headshot="t.headshot"
        :comments="t.comments"
      />
    </div>
  </div>
</template>

<script>
import testimonial from "@/components/testimonial";
import { mapGetters } from "vuex";

export default {
  components: {
    testimonial
  },
  computed: {
    ...mapGetters(["getThreeTestimonials"])
  }
};
</script>