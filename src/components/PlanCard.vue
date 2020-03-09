<template>
  <div class="h-100">
    <div class="card" v-bind:class="{ 'card-outline-primary': plan.primary }" v-if="plan">
      <h3
        class="card-header text-center"
        v-bind:class="{ 'bg-primary': plan.primary, 'text-white': plan.primary }"
      >{{ plan.title }}</h3>
      <div class="text-center mt-4">
        <div class="display-4">${{ plan.price }}</div>
        <div class="font-italic">{{ plan.duration }}</div>
      </div>
      <ul class="list-group list-group-flush text-center mt-4">
        <li class="list-group-item" v-for="d in plan.details" :key="d.text || d">
          <div :class="d.css">{{ d.text || d }}</div>
        </li>
        <li class="list-group-item" v-if="selectable">
          <a href="#" class="btn btn-primary" @click.prevent="selectPlan(plan)">
            <strong>Start Enrollment</strong>
          </a>
        </li>
        <li class="list-group-item" v-if="selectable">
          <router-link to="/call-back">Help Me Decide</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plan: Object,
    selectable: Boolean
  },
  methods: {
    selectPlan(plan) {
      this.$router.push({ name: "Enroll", query: { planId: plan.id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.list-group {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
