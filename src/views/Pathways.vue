<template>
<div>
<Hero :unsplashIds="['-fGqsewtsJY', 'u_RiRTA_TtY', 'xRDuEeG1TVI']" height="40vh">
      <h2>How it Works</h2>
      <h5>What makes CodeX Academy Tick?</h5>
    </Hero>
    <div class="container mt-5 pt-5">
    
    <h1 class="text-center">Certification Pathways</h1>
    <p class="text-center">
        CodeX Academy learners pass from level to level, accumulating knowledge, skills and certifications. Each level builds on the previous and leads to the next. 
    </p>
    <div class="row bg-white mb-5 border p-4" v-for="cert in getCertifications" :key="cert.id">
        <div class="col-12 col-lg-3">
        <div class="text-center">
          <div class="text-center">
            <h4 class="">{{cert.name}}</h4>
            <p class="">{{cert.description}}</p>
            </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-2" v-for="pathway in levels(cert.id)" :key="pathway.name">
        <div class="text-center">
            <h6 class="mb-3">
                {{pathway.name}}
            </h6>
            <a :href="pathway.pathwayUrl" target="_blank">
                <img class="" :src="pathway.badgeImageUrl" :alt="pathway.name" style="width: 70%;" />
            </a>
        </div>
      </div>
      <div class="col-12 col-lg-3 mt-3">
        <div class="text-center">
          <img class="card-img-top" :src="cert.badgeUrl" :alt="cert.name" style="width: 70%"/>
        </div>
      </div>
    
    </div>
    
  </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Hero from "@/components/Hero";

export default {
  computed: {
    ...mapGetters(["getPathways", "getCertifications"])
  },
  components: {
    Hero,

  },
  methods: {
      levels(certId){
          return this.getPathways.filter(x=> x.cert == certId);
      }
  }
};
</script>

<style lang="scss" scoped>
.card-text {
  min-height: 7rem;
}
</style>
