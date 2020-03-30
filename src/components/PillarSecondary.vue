<template>
  <div class="card secondary-primary" :class="accentColor">
    <div class="icon">
      <font-awesome-icon :icon="icon" />
    </div>
    <div class="pillar-header">
      <div class="pillar-title">{{title}}</div>
    </div>
    <div class="pillar-subtitle">{{subtitle}}</div>
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
    subtitle: String,
    accentColor: String
  },
  components: { FontAwesomeIcon }
};
</script>

<style lang="scss">
@import "@/variables";

.secondary-primary {
  border: none;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;
  .pillar-header {
    background-color: $primary;
  }

  .pillar-title {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 1em;
    padding: 5px;
    color: white;
  }
  .pillar-subtitle {
    margin-top: 15px;
    text-transform: uppercase;
    font-weight: bolder;
    color: #333;
    font-size: 0.8em;
    line-height: 1.3em;
    margin-left: 5px;
  }

  .pillar-body {
    margin-top: 10px;
    font-size: 0.9em;
    color: $muted;
    line-height: 1.3em;
    margin-left: 5px;
  }
  .icon {
    svg {
      color: $primary;
      font-size: 2em;
      margin-bottom: 5px;
      margin-left: 5px;
    }
  }
}
.periwinkle {
  .pillar-header {
    background-color: $periwinkle;
  }
  .icon svg {
    color: $periwinkle;
  }
}
.lilac {
  .pillar-header {
    background-color: $lilac;
  }
  .icon svg {
    color: $lilac;
  }
}
.fucia {
  .pillar-header {
    background-color: $fucia;
  }
  .icon svg {
    color: $fucia;
  }
}
</style>