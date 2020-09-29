<template>
  <div>
    <TalentlyAug2020 v-if="source === 'talently'" />
    <InternationalPathriseAug2020
      v-else-if="international && source === 'pathrise'"
    />
    <PathriseAug2020 v-else-if="source === 'pathrise'" />
    <InternationalMay2020 v-else-if="international" />
    <HomeApril2020 v-else-if="loaded" />
  </div>
</template>

<script>
import LandingContainer from "../views/landing/LandingContainer.vue";
import HomeApril2020 from "../views/landing/HomeApril2020.vue";
import StudentApril2020 from "../views/landing/StudentApril2020.vue";
import IndiaMay2020 from "../views/landing/IndiaMay2020.vue";
import SummerCampMay2020 from "../views/landing/SummerCampMay2020.vue";
import InternationalMay2020 from "../views/landing/InternationalMay2020.vue";
import TalentlyAug2020 from "../views/landing/TalentlyAug2020.vue";
import PathriseAug2020 from "../views/landing/PathriseAug2020.vue";
import InternationalPathriseAug2020 from "../views/landing/InternationalPathriseAug2020.vue";

export default {
  components: {
    HomeApril2020,
    InternationalMay2020,
    TalentlyAug2020,
    PathriseAug2020,
    InternationalPathriseAug2020,
  },
  data() {
    return {
      international: false,
      campaign: false,
      source: false,
      loaded: false
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

    if (this.campaign) {
      this.international = this.campaign.indexOf("-int-") > -1;

      if (this.international) {
        this.$store.dispatch("setPriceClass", "international");
        this.$store.dispatch("setProgramTitle", "CodeX Academy International");
      }
    } else {
      this.international = this.$store.state.priceClass === "international";
    }
    this.loaded = true;
  },
};
</script>

<style>
</style>