<template>
  <div class="partner" v-if="logo">
    <p>In partnership with</p>
    <div>
      <a :href="url" target="_blank">
        <img class="partner" :src="logo" />
      </a>
    </div>
  </div>
</template>

<script>
const partners = {
  pathrise: { logo: "img/partners/pathrise.svg", url: "https://pathrise.com" },
  nashvillestate: {
    logo: "img/partners/nscc.png",
    url: "https://www.nscc.edu",
  },
  mtz1021: {
    logo: "img/partners/mtz.jpg",
    url: "https://www.mtzionnashville.org/",
  },
  Metroafterschool:{
  logo:"img/partners/metrons.jpg",
  url:"https://mnps.org",
  },
  scf: { logo: "img/partners/scf.jpg", url: "https://www.scf.edu/" },
  slttech: { logo: "img/partners/slt.jpg", url: "https://www.slttechla.com/" },
  batonrougecc: {
    logo: "img/partners/brcc.jpg",
    url: "https://www.mybrcc.edu/",
  },
  talently: { logo: "img/partners/talently.svg", url: "https://talently.tech" },
  flexiple: { logo: "img/partners/flexiple.png", url: "https://flexiple.com/" },
  outco: { logo: "img/partners/outco.png", url: "https://outco.io/" },
  recruiterly: {
    logo: "img/partners/recruiterly.svg",
    url: "https://recruiterly.com/",
  },
  bairesdev: {
    logo: "img/partners/bairesdev.svg",
    url: "https://bairesdev.com/",
  },
  arcdev: { logo: "img/partners/arcdev.svg", url: "https://arc.dev" },
  lifeway: { logo: "img/partners/lifeway.svg", url: "https://lifeway.com" },
  dice: { logo: "img/partners/dice.svg", url: "https://dice.com" },
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
  text-align: center;
  p {
    margin-top: 20px;
    margin-bottom: 0px;
  }
  img {
    max-width: 200px;
    max-height: 100px;
  }
}
</style>
