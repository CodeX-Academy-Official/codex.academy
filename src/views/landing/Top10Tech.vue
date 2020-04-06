<template>
  <div class="row technologies">
    <div class="col col-md-3 mb-3" v-for="tech in getTechnologies" :key="tech.name">
      <TechLogo :logo="tech.logo" :name="tech.name" :info="tech.info" :href="tech.url" />
    </div>
  </div>
</template>

<script>
import TechLogo from "@/components/TechLogo";
import { mapGetters } from "vuex";

export default {
  components: {
    TechLogo
  },
  computed: {
    ...mapGetters(["getTechnologies"])
  }
};
</script>

<style lang="scss" >
.tech-logo {
  text-align: center;
  img {
    max-height: 100px;
    max-width: 180px;
  }
}
</style>