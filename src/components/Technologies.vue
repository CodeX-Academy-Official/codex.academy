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
    certification: String,
    max: Number
  },
  components: {
    TechLogo,
  },
  computed: {
    ...mapGetters(["getTechnologies"]),
    techs() {
      let output = [];
      if (this.certification) {
        output = this.getTechnologies.filter(
          (x) => x.certifications.indexOf(this.certification) > -1
        );
      } else if (this.onlyImportant) {
        output = this.getTechnologies.filter((x) => x.important);
      } else {
        output = this.getTechnologies;
      }
      if (this.max) return output.slice(0, this.max);
      return output;
    },
  },
};
</script>

<style lang="scss">
.tech-logo {
  text-align: center;
  img {
    max-height: 100px;
    max-width: 180px;
  }
}
</style>
