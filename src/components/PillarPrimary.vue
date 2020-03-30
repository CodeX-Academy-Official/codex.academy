<template>
  <div class="card text-center pillar-primary shadow h-100">
    <div class="card-header">
      <div class="icon-keystone">
        <font-awesome-icon :icon="icon" />
      </div>
      <div class="pillar-title rainbow">{{ title }}</div>
      <div class="pillar-subtitle">{{ subtitle }}</div>
    </div>
    <div class="pillar-body">
      <slot />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  props: {
    icon: Object,
    title: String,
    subtitle: String
  },
  components: { FontAwesomeIcon }
};
</script>

<style lang="scss">
@import "@/variables";

.pillar-primary {
  width: 330px;
  margin-left: auto;
  margin-right: auto;
  .card-header {
    background-color: $navyBlue;
    position: relative;
    text-align: center;
  }

  .pillar-title {
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: bolder;
    // margin-bottom: 5px;
    width: 100%;
    font-size: 2.4em;
    transform: scale(0.8, 1);
  }
  .rainbow {
    background: -webkit-linear-gradient(180deg, $primary, $fucia);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .pillar-subtitle {
    margin-top: 0px;
    text-transform: uppercase;
    font-weight: bolder;
    color: #eee;
    font-size: 0.8em;
  }

  .pillar-body {
    padding: 30px 20px 10px 20px;
    font-size: 0.9em;
    color: $navyBlue;
  }
  .icon-keystone {
    border-radius: 50%;
    background-color: $navyBlue;
    position: absolute;
    top: -20px;
    left: 143px;
    padding: 12px;

    svg {
      color: #eee;
      font-size: 1.4em;
    }
  }
}
</style>
