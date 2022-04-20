<template>
  <div class="row justify-content-md-center">
    <div
      class="col-6 col-sm-4 col-md-3 col-lg-2 internship"
      @click="open(i)"
      v-for="i in getInternshipPartners"
      :key="i.name"
    >
      <div
        class="logo"
        :class="{ needsBorder: i.needsBorder }"
        :style="{ 'background-image': `url(${i.logo})` }"
      ></div>
      <!--<p class="mt-2 text-center text-muted">
        <small>{{ i.name }}</small>-->
      </p>
    </div>
    <div class="col-6 col-sm-4 col-md-3 col-lg-2 internship">
      <div class="logo d-flex">
        <h5 class="text-center" style="font-size: .9em">
          Constantly Adding More!
        </h5>
      </div>
      <p class="mt-2 text-center text-muted">
        <small>Check back tomorrow!</small>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getInternshipPartners"]),
  },
  methods: {
    open(internship) {
      window.open(internship.url, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.internship {
  cursor: pointer;
  padding: 10px;
  .logo {
    height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .needsBorder {
    background-color: white;
    padding: 5px;
    border: solid 1px #ddd;
  }
}

.internship:hover {
  border: 1px solid #ccc;
  margin: 0px;
  background-color: #ddd;
}
</style>
