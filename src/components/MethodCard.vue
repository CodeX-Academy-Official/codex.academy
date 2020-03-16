<template>
  <!-- Project One -->
  <div class="card h-100 method-card">
    <div class="card-body">
      <div class="text-center">
        <font-awesome-icon
          :icon="getIcon(icon)"
          class="fa-4x method-icon mb-4"
        />
      </div>
      <h4 class="card-title text-center">
        {{ title }}
      </h4>
      <!-- <p class="card-text">{{ description }}</p> -->
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

const icons = {
  briefcase: faBriefcase,
  mentor: faPeopleCarry,
  time: faClock,
  remote: faTv,
  mastery: faTasks,
  simCard: faSimCard
};
export default {
  props: {
    title: String,
    description: String,
    icon: String
  },
  methods: {
    getIcon(name) {
      return icons[name];
    }
  }
};
</script>

<style lang="scss">
@import "@/variables";

.method-card {
  svg {
    color: $primary;
  }
}
</style>
