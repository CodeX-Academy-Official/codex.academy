<template>
  <div>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ plan.title }}</h5>
        <p class="card-text">{{ plan.description }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <Money :amount="price" /> {{ plan.duration }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SelectPlanButton from "@/components/SelectPlanButton";

export default {
  props: {
    plan: Object,
    selectable: Boolean
  },
  components: {
    SelectPlanButton
  },
  computed: {
    price() {
      return this.plan.price * (this.plan.durationMonths || 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.list-group {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
