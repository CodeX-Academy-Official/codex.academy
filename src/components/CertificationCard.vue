<template>
  <div class>
    <div class="card" v-bind:class="{ 'card-outline-primary': certification.recommended }">
      <h5
        class="card-header text-center"
        v-bind:class="{
          'bg-primary': certification.recommended,
          'text-white': certification.recommended
        }"
      >Developer Certification Program</h5>
      <div class="text-center mt-4">
        <Icon :name="certification.noun" :size="80" class="mb-3" />
        <div class>
          <h4>{{certification.name}}</h4>
        </div>
        <div class="font-italic">{{ certification.duration }}</div>
      </div>
      <ul class="list-group list-group-flush text-center mt-4">
        <li class="list-group-item" v-if="certification.description">
          <div class="plan-description">{{ certification.description }}</div>
        </li>

        <li class="list-group-item" v-for="feature in features" :key="feature">{{ feature }}</li>
        <li class="list-group-item">{{ certification.levels }} Months Full-Time</li>
        <li class="list-group-item">{{ certification.levels * 2 }}+ Months Part-Time</li>

        <li class="list-group-item">
          Tuition:
          <Money :amount="certification.price" />
        </li>
        <li class="list-group-item">
          <strong>Or pay ZERO until your first job!</strong>
        </li>

        <li class="list-group-item">
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
    features: Array
  },
  components: {
    Money,
    Icon
  },
  computed: {
    ...mapGetters(["getApplicant"])
  },
  methods: {
    selectCertification() {
      this.$emit("certificationSelected", this.certification);
    }
  }
};
</script>

<style lang="scss" scoped>
.list-group {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
