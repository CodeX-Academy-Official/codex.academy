<template>
  <div>
    <LevelUpInternationalOct2020 v-if="levelup && international" />
    <LevelUpOct2020 v-else-if="levelup" />
    <InternationalMay2020 v-else-if="international" />
    <CollegeFSDMay2021 v-else-if="college && program == 'fsd'" />
    <CollegeFEMay2021 v-else-if="college && program == 'fed'" />
    <HomeApril2020 v-else-if="loaded" />
  </div>
</template>

<script>
import LandingContainer from "../views/landing/LandingContainer.vue";
import HomeApril2020 from "../views/landing/HomeApril2020.vue";
import CollegeFEMay2021 from "../views/landing/CollegeFEMay2021.vue";
import CollegeFSDMay2021 from "../views/landing/CollegeFSDMay2021.vue";
import StudentApril2020 from "../views/landing/StudentApril2020.vue";
import IndiaMay2020 from "../views/landing/IndiaMay2020.vue";
import SummerCampMay2020 from "../views/landing/SummerCampMay2020.vue";
import InternationalMay2020 from "../views/landing/InternationalMay2020.vue";
import TalentlyAug2020 from "../views/landing/TalentlyAug2020.vue";
import PathriseAug2020 from "../views/landing/PathriseAug2020.vue";
import InternationalPathriseAug2020 from "../views/landing/InternationalPathriseAug2020.vue";
import LevelUpOct2020 from "../views/landing/LevelUpOct2020.vue";
import LevelUpInternationalOct2020 from "../views/landing/LevelUpInternationalOct2020.vue";

export default {
  components: {
    HomeApril2020,
    CollegeFEMay2021,
    CollegeFSDMay2021,
    InternationalMay2020,
    TalentlyAug2020,
    PathriseAug2020,
    InternationalPathriseAug2020,
    LevelUpOct2020,
    LevelUpInternationalOct2020,
  },
  data() {
    return {
      international: false,
      levelup: false,
      college: false,
      program: false,
      campaign: false,
      source: false,
      loaded: false,
    };
  },
  mounted() {
    const source = this.$route.query.utm_source;
    if (source) {
      this.source = source.toLowerCase();
      this.$store.dispatch("setSource", this.source);
    } else {
      this.source = this.$store.state.source;
    }

    const campaign = this.$route.query.utm_campaign;
    if (campaign) this.campaign = campaign.toLowerCase();
    const program = this.$route.query.program;
    if (program) this.program = program.toLowerCase();

    if (this.campaign) {
      this.international = this.campaign.indexOf("-int-") > -1;
      if (this.international) {
        this.$store.dispatch("setPriceClass", "international");
        this.$store.dispatch("setProgramTitle", "CodeX Academy International");
      }

      this.levelup = this.campaign.indexOf("-levelup-") > -1;
      if (this.levelup) {
        this.$store.dispatch("setAudience", "levelup");
      }

      this.college = this.campaign.indexOf("college") > -1;
      if (this.college) {
        this.$store.dispatch("setAudience", "college");
      }
    } else {
      this.levelup = this.$store.state.audience === "levelup";
      this.college = this.$store.state.audience === "college";
      this.international = this.$store.state.priceClass === "international";
    }
    this.loaded = true;
  },
};
</script>

<style></style>
