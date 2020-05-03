<template>
  <div class="row technologies">
    <div class="col col-md-3 mb-3" v-for="tech in techs" :key="tech.name">
      <TechLogo
        :logo="tech.logo"
        :name="tech.name"
        :info="tech.info"
        :href="tech.url"
        :noun="useNoun"
        :includeName="includeName"
      />
    </div>
  </div>
</template>

<script>
import TechLogo from "@/components/TechLogo";
import { mapGetters } from "vuex";

export default {
  props: {
    useNoun: Boolean,
    includeName: Boolean,
    onlyImportant: Boolean,
    certification: String
  },
  components: {
    TechLogo
  },
  computed: {
    ...mapGetters(["getTechnologies"]),
    techs() {
      if (this.certification) {
        return this.getTechnologies.filter(
          x => x.certifications.indexOf(this.certification) > -1
        );
      }
      if (this.onlyImportant) {
        return this.getTechnologies.filter(x => x.important);
      }

      return this.getTechnologies;
    }
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