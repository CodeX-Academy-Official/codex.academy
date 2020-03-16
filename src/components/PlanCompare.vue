<template>
  <div class="h-100">
    <div class="card">
      <img class="card-img-top" :src="plan.imgSrc" :alt="plan.title" />
      <div class="card-body">
        <h5 class="card-title">{{ plan.title }}</h5>
        <p class="card-text"></p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item price">{{ plan.price }}</li>
        <li class="list-group-item">{{ plan.pace }}</li>

        <li class="list-group-item">{{ plan.mentor }}</li>
        <li class="list-group-item">{{ plan.commitment }}</li>
      </ul>

      <div class="card-body">
        <router-link :to="plan.routerLink" class="card-link btn btn-primary">
          <strong>See options</strong>
        </router-link>
      </div>
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