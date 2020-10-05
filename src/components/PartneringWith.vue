<template>
  <div class="partner" v-if="logo">
    <p>In partnership with</p>
    <a :href="url" target="_blank">
      <img class="partner" :src="logo" />
    </a>
  </div>
</template>

<script>
const partners = {
  pathrise: { logo: "img/partners/pathrise.svg", url: "https://pathrise.com" },
  talently: { logo: "img/partners/talently.svg", url: "https://talently.tech" },
  flexiple: { logo: "img/partners/flexiple.png", url: "https://flexiple.com/" },
  outco: { logo: "img/partners/outco.png", url: "https://outco.io/" },
  recruiterly: { logo: "img/partners/recruiterly.svg", url: "https://recruiterly.com/" },
  bairesdev: { logo: "img/partners/bairesdev.svg", url: "https://bairesdev.com/" },
  arcdev: { logo: "img/partners/arcdev.svg", url: "https://arc.dev" },
  lifeway: { logo: "img/partners/lifeway.svg", url: "https://lifeway.com" },
};
export default {
  props: { partner: String },
  computed: {
    logo() {
      return (partners[this.partner] || {}).logo;
    },
    url() {
      return (partners[this.partner] || {}).url;
    },
  },
};
</script>

<style lang="scss">
@import "@/variables";
.partner {
  padding-top: 20px;
  p {
    margin-bottom: 0px;
  }
  text-align: center;
  img {
    // width: 200px;
    max-height: 100px;
  }
}
</style>