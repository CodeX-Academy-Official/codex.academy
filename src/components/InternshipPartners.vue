<template>
  <div class="row justify-content-md-center">
    <div class="col-2" v-for="i in getInternshipPartners" :key="i.name">
      <img class="img-fluid" :src="`${i.logo}`" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getInternshipPartners"])
  }
};
</script>

<style lang="scss" scoped>
// .logo img {
//   object-fit: none; /* Do not scale the image */
//   object-position: center; /* Center the image within the element */
//   width: 100%;
//   max-height: 50px;
//   margin-bottom: 1rem;
// }
</style>