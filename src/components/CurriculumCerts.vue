<template>
  <div>
    <div
      class="row bg-white mb-5 border p-4"
      v-for="cert in getCertifications"
      :key="cert.id"
    >
      <div class="col-12 col-lg-3">
        <div class="text-center">
          <div class="text-center">
            <h4 class="">{{ cert.name }}</h4>
            <p class="">{{ cert.description }}</p>
            <a :href="cert.learnMoreUrl" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div
        class="col-12 col-md-4 col-lg-3"
        v-for="pathway in levels(cert.id)"
        :key="pathway.name"
      >
        <div class="text-center">
          <h6 class="mb-3">
            {{ pathway.name }}
          </h6>
          <a :href="pathway.pathwayUrl" target="_blank">
            <img
              class=""
              :src="pathway.badgeImageUrl"
              :alt="pathway.name"
              style="width: 70%"
            />
          </a>
        </div>
      </div>
      <!-- <div class="col-12 col-lg-3 mt-3">
        <div class="text-center">
          <img
            class="card-img-top"
            :src="cert.badgeUrl"
            :alt="cert.name"
            style="width: 70%"
          />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getPathways", "getCertifications"]),
  },
  methods: {
    levels(certId) {
      return this.getPathways.filter((x) => x.cert == certId);
    },
  },
};
</script>

<style></style>
