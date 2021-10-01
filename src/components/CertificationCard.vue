<template>
  <div class>
    <div
      class="card"
      v-bind:class="{ 'card-outline-primary': certification.recommended }"
    >
      <div class="text-center mt-4">
        <img
          class="card-img-top"
          :src="certification.badgeUrl"
          :alt="certification.name"
          style="width: 70%"
        />
        <div class="font-italic">{{ certification.duration }}</div>
      </div>
      <ul class="list-group list-group-flush text-center mt-4">
        <li class="list-group-item" v-if="certification.description">
          <div class="plan-description">{{ certification.description }}</div>
        </li>

        <li class="list-group-item" v-for="feature in features" :key="feature">
          {{ feature }}
        </li>
        <li class="list-group-item" v-if="!hideDefaultFeatures">
          Average {{ certification.levels }} Months Full-Time
        </li>
        <li class="list-group-item" v-if="!hideDefaultFeatures">
          Average {{ certification.levels * 2 }} Months Part-Time
        </li>

        <li class="list-group-item" v-if="!price && !hidePrice">
          Estimated Tuition:
          <Money :amount="certification.price" />
        </li>
        <li class="list-group-item" v-else-if="price && !hidePrice">
          <h3><Money :amount="price" /></h3>
        </li>

        <li class="list-group-item" v-if="!hideCallToAction">
          <a @click="selectCertification()" class="btn btn-primary">
            <strong v-if="!getApplicant">Start Application</strong>
            <strong v-if="getApplicant">Select Program</strong>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SelectPlanButton from "@/components/SelectPlanButton";
import Money from "@/components/Money";
import { mapGetters } from "vuex";
import Icon from "@/components/Icon";

export default {
  props: {
    certification: Object,
    features: Array,
    hideDefaultFeatures: Boolean,
    price: [Number, String],
    hideCallToAction: Boolean,
    hidePrice: Boolean,
  },
  components: {
    Money,
    Icon,
  },
  computed: {
    ...mapGetters(["getApplicant"]),
  },
  methods: {
    selectCertification() {
      this.$emit("certificationSelected", this.certification);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-group {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
