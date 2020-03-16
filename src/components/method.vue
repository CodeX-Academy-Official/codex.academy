<template>
  <!-- Project One -->
  <div class="row text-left">
    <div
      v-if="(icon && iconSide === 'left') || !iconSide"
      class="col-md-2 text-center align-middle"
    >
      <font-awesome-icon :icon="getIcon(icon)" class="fa-3x" />
    </div>
    <div class="col">
      <h3>{{ title }}</h3>
      <p>
        {{ description }}
      </p>
      <!-- <a class="btn btn-primary" href="#">
        Enroll Now
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a> -->
    </div>
    <div v-if="icon && iconSide === 'right'" class="col-md-2 text-center">
      <font-awesome-icon :icon="getIcon(icon)" class="fa-7x" />
    </div>
  </div>
  <!-- /.row -->
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
import Method from "@/components/method";

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
    icon: String,
    iconSide: String
  },
  components: {
    Method
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

.method {
  svg {
    color: $primary;
  }
}
</style>
