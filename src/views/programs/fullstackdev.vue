<template>
  <div class="full-stack-developer">
    <Hero unsplashId="QckxruozjRg" height="40vh">
      <h2>Full-Stack Developer</h2>
      <h5>From Front-End to Back-End</h5>
      <div class="text-center">
        <SelectProgramButton
          class="mt-3"
          :certification="certification"
          @certificationSelected="certificationSelected"
        />
      </div>
    </Hero>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6 col-lg-7">
          <div class>
            <h2>The Swiss Army Knife of Development</h2>
            <p class>
              Being a Full-Stack Developer means you can be trusted with every
              development angle of a software application. You are able to
              develop and maintain features in all layers including the user
              interface, the browser logic, back-end API's, business domain and
              database. You are such a versatile developer that very seldom is
              it necessary to call in a specialist. You are plan A and plan B!
            </p>
          </div>
          <SalaryBlock
            :amount="105813"
            url="https://www.glassdoor.com/Salaries/full-stack-developer-salary-SRCH_KO0,20.htm"
            :title="certification.name"
          />

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
            :features="[]"
            @certificationSelected="certificationSelected"
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

    <div class="mt-5 pb-5 bg-lilac">
      <div class="container">
        <h2 class="text-center pt-5">Technologies you will Master</h2>
        <h5 class="text-center mb-5">
          In the {{ certification.name }} Program
        </h5>
        <Technologies :certification="certName" :includeName="true" />

        <div class="text-center">
          <SelectProgramButton
            :certification="certification"
            @certificationSelected="certificationSelected"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import DesignedByByron from "@/components/DesignedByByron";
import Icon from "@/components/Icon";
import { FULL_STACK_DEVELOPER } from "@/store/constants";
import SelectProgramButton from "@/components/SelectProgramButton";
import { mapGetters } from "vuex";
import CertificationCard from "@/components/CertificationCard";
import Unsplash from "@/components/Unsplash";
import SalaryBlock from "@/components/SalaryBlock";
import { mapCertificationToPlan } from "../../store/certifications";

export default {
  data: () => ({
    certName: FULL_STACK_DEVELOPER,
  }),
  computed: {
    ...mapGetters(["getCertifications", "getBootcampFeatures", "getStartDate"]),
    certification() {
      return this.getCertifications.find(
        (x) => x.name === FULL_STACK_DEVELOPER
      );
    },
  },
  components: {
    Hero,
    Icon,
    Technologies,
    SelectProgramButton,
    CertificationCard,
    DesignedByByron,
    Unsplash,
    SalaryBlock,
  },
  methods: {
    certificationSelected(cert) {
      this.$store.dispatch(
        "setActivePlan",
        mapCertificationToPlan(cert, this.getStartDate)
      );
      this.$router.push("/enroll");
    },
  },
};
</script>

<style lang="scss">
.full-stack-developer {
  .salary {
    font-size: 48px;
  }
}
</style>
