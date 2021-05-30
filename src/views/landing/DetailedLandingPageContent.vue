<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6 col-lg-7">
          <slot />

          <div class="mt-5 mb-5">
            <h5>Every CodeX Academy program comes with:</h5>
            <ul>
              <li v-for="f in getBootcampFeatures" :key="f">{{ f }}</li>
            </ul>
          </div>
        </div>

        <div class="col-md-6 col-lg-5">
          <CertificationCard
            :certification="certification"
            :hideDefaultFeatures="true"
            :hideCallToAction="true"
            :price="price"
            :features="bootcampFeatures"
          />
          <div class="d-lg-none mt-5">
            <DesignedByByron />
          </div>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <DesignedByByron />
      </div>
    </div>

    <div class="container text-center mt-5">
      <a href="#" class="btn btn-lg btn-primary">Start Assessment</a>
    </div>
    <div class="mt-5 pb-5 bg-lilac">
      <div class="container">
        <h2 class="text-center pt-5">Technologies you will Master</h2>
        <h5 class="text-center mb-5">
          In the {{ certification.name }} Certification
        </h5>
        <Technologies :certification="certification.name" :includeName="true" />
        <div class="text-center mt-5">
          <a href="#" class="btn btn-lg btn-warning">Start Assessment</a>
        </div>
      </div>
    </div>

    <div class="pb-5">
      <div class="container">
        <TestimonialsSection />
        <div class="text-center mt-5">
          <a href="#" class="btn btn-lg btn-danger">Start Assessment</a>
        </div>
      </div>
    </div>

    <div class="pb-5 pt-3 bg-periwinkle">
      <div class="container">
        <QandASection />
        <div class="text-center mt-0">
          <a href="#" class="btn btn-lg btn-primary">Start Assessment</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Thanks from "@/views/landing/Thanks";
import { mapGetters } from "vuex";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import SalaryBlock from "@/components/SalaryBlock";
import DesignedByByron from "@/components/DesignedByByron";
import PartneringWith from "@/components/PartneringWith";
import SelectPlanButton from "@/components/SelectPlanButton";
import CertificationCard from "@/components/CertificationCard";
import PromoAppFeeWaived from "@/components/PromoAppFeeWaived";
import Technologies from "@/components/Technologies";
import CommercialSection from "@/components/sections/CommercialSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import QandASection from "@/components/sections/QandASection";
import { getSku } from "./sku";

export default {
  props: {
    certification: Object,
    bootcampFeatures: Array,
  },
  components: {
    QandASection,
    Thanks,
    SalaryBlock,
    CertificationCard,
    Icon,
    Logo,
    Thanks,
    DesignedByByron,
    PromoAppFeeWaived,
    PartneringWith,
    Technologies,
    StatsSection,
    TestimonialsSection,
    CommercialSection,
  },
  data: () => ({
    hasApplied: false,
  }),
  computed: {
    ...mapGetters([
      "getMethods",
      "getSource",
      "getApplicant",
      "getPromoCodesDisplay",
      "getCertifications",
      "getBootcampFeatures",
    ]),
    price() {
      return getSku(this).price || this.certification.price;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/variables";
</style>
