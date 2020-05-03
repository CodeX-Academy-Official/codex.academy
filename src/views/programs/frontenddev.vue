<template>
  <div class="front-end-developer">
    <Hero unsplashId="iFSvn82XfGo" height="40vh">
      <h2>Front-End Developer</h2>
      <h5>Master of the User Interface</h5>
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
            <h2>Everything the User Touches</h2>
            <p
              class
            >As a Front-End Developer, you are the master of the user interface. Everything the user clicks, feels, sees and experiences is a result of your work in the front-end. Using technologies like HTML, CSS and Javascript, you build the interfaces that move our culture!</p>
          </div>
          <SalaryBlock
            :amount="76929"
            url="https://www.glassdoor.com/Salaries/front-end-developer-salary-SRCH_KO0,19.htm"
            :title="certification.name"
          />

          <div class="mt-5 mb-5">
            <h5>Every CodeX Academy program comes with:</h5>
            <ul>
              <li v-for="f in getBootcampFeatures" :key="f">{{f}}</li>
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
      <h2 class="text-center pt-5">Technologies you will Master</h2>
      <h5 class="text-center mb-5">In the Full-Stack Devloper Program</h5>
      <Technologies :certification="certName" :includeName="true" />

      <div class="text-center">
        <SelectProgramButton
          :certification="certification"
          @certificationSelected="certificationSelected"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import DesignedByByron from "@/components/DesignedByByron";
import Icon from "@/components/Icon";
import { FRONT_END_DEVELOPER } from "@/store/constants";
import SelectProgramButton from "@/components/SelectProgramButton";
import { mapGetters } from "vuex";
import CertificationCard from "@/components/CertificationCard";
import Unsplash from "@/components/Unsplash";
import SalaryBlock from "@/components/SalaryBlock";

export default {
  data: () => ({
    certName: FRONT_END_DEVELOPER
  }),
  computed: {
    ...mapGetters(["getCertifications", "getBootcampFeatures"]),
    certification() {
      return this.getCertifications.find(x => x.name === FRONT_END_DEVELOPER);
    }
  },
  components: {
    Hero,
    Icon,
    Technologies,
    SelectProgramButton,
    CertificationCard,
    DesignedByByron,
    Unsplash,
    SalaryBlock
  },
  methods: {
    certificationSelected(cert) {
      this.$store.dispatch("setCertification", cert);
      this.$router.push("/enroll");
    }
  }
};
</script>

<style lang="scss">
.front-end-developer {
}
</style>