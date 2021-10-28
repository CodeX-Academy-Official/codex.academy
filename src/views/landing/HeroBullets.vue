<template>
  <div class="heroBullets">
    <div class="item" v-for="b in bullets" :key="b">
    <svg xml:space="preserve" style="enable-background:new 0 0 16 16;" viewBox="0 0 16 16" y="0px" x="0px" version="1.1" fill="true" width="100" height="100" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="svg1" aria-label="checkbox"><g xmlns="http://www.w3.org/2000/svg"><path d="M14,13c0,0.542-0.458,1-1,1H3c-0.542,0-1-0.458-1-1V3c0-0.542,0.458-1,1-1h8l2-2H3C1.35,0,0,1.35,0,3v10c0,1.65,1.35,3,3,3   h10c1.65,0,3-1.35,3-3V7l-2,2V13z"></path><polygon points="7,8.985 4.508,6.492 2.492,8.508 7,13.016 16.008,4.008 13.992,1.992  "></polygon></g></svg><span>{{b}}</span></div>
  </div>
</template>

<script>
import { getSku } from "./url-context";

export default {
  data: () => ({
    bullets: ["Modern, Marketable Skills","Live Mentoring Sessions","100% Online","Any Experience Level"]
  }),
  mounted(){
    const sku = getSku(this);
    if(sku.heroBullets) this.bullets = sku.heroBullets;
  }
};
</script>

<style lang="scss">
.checklist {
    .item {
      padding-bottom: 5px;
      svg {
        fill: white;
        width: 20px;
        height: 20px;
      }
      span {
        padding-left: 15px;
      }
    }
  }
</style>