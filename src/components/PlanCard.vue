<template>
  <div class="card h-100" v-bind:class="{ 'card-outline-primary': plan.primary }" v-if="plan">
    <h3
      class="card-header text-center"
      v-bind:class="{ 'bg-primary': plan.primary, 'text-white': plan.primary }"
    >{{ plan.title }}</h3>
    <div class="card-body text-center">
      <div class="display-4">${{ plan.price }}</div>
      <div class="font-italic">{{ plan.duration }}</div>
    </div>
    <ul class="list-group list-group-flush text-center">
      <li class="list-group-item" v-for="d in plan.details" :key="d">{{ d }}</li>
      <li class="list-group-item" v-if="selectable">
        <a href="#" class="btn btn-primary" @click.prevent="selectPlan(plan)">
          <strong>Start Enrollment</strong>
        </a>
      </li>
      <li class="list-group-item" v-if="selectable">
        <router-link to="/call-back">Learn More</router-link>
      </li>
    </ul>
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

<style lang="scss" scoped></style>
