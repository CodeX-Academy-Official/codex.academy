<template>
  <div>
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-6 col-lg-5 col-xl-4 mb-5" v-for="p in primaryPillars" :key="p.id">
        <PillarPrimary :title="p.title" :subtitle="p.subtitle" :icon="icon(p.icon)">
          <p>{{ p.description }}</p>
        </PillarPrimary>
      </div>
    </div>
    <div class="row secondary-pillars">
      <div class="col-12 col-md-6 col-lg-3" v-for="p in secondaryPillars" :key="p.id">
        <PillarSecondary
          :title="p.title"
          :subtitle="p.subtitle"
          :icon="icon(p.icon)"
          :accentColor="p.accentColor"
        >
          <p>{{ p.description }}</p>
        </PillarSecondary>
      </div>
    </div>
  </div>
</template>

<script>
import {
  faBriefcase,
  faPeopleCarry,
  faClock,
  faTv,
  faTasks,
  faSimCard
} from "@fortawesome/free-solid-svg-icons";

import PillarPrimary from "@/components/PillarPrimary";
import PillarSecondary from "@/components/PillarSecondary";

const icons = { faBriefcase, faPeopleCarry, faClock, faTv, faTasks, faSimCard };

export default {
  props: {
    pillars: Array
  },
  computed: {
    primaryPillars() {
      return this.pillars.filter(x => x.isPrimary);
    },
    secondaryPillars() {
      return this.pillars.filter(x => !x.isPrimary);
    }
  },
  components: { PillarPrimary, PillarSecondary },
  methods: {
    icon(name) {
      const i = icons[name];
      return i;
    }
  }
};
</script>

<style lang="scss"></style>
