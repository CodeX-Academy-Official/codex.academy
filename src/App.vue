<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const default_layout = "default";

export default {
  beforeCreate() {
    if (this.$route.query.p) {
      this.$router.push(this.$route.query.p);
    }
  },

  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
  mounted() {
    if (this.$route.query.promo) {
      this.$store.dispatch("applyPromoCode", this.$route.query.promo);
    }

    const source = this.$route.query.utm_source;
    if(source){
      this.$store.dispatch("setSource", source);
      //please remove source setting from target landing page
    }
  
    const campaign = this.$route.query.utm_campaign;
    if(campaign){
      const isInternational = campaign.indexOf("-int-") > -1;
      
      if(isInternational) {
        this.$store.dispatch("setPriceClass", "international");
        this.$store.dispatch("setProgramTitle", "CodeX Academy International");
        
        let homePage = "/landing/int202005";
        if(source=="talently"){
          homePage = "/landing/talently202008";
        }
        this.$store.dispatch("setHomepage", homePage);

        if(homePage !== this.$router.currentRoute){
          this.$router.push(homePage);
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import "app";
</style>
