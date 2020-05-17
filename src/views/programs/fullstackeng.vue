<template>
  <div class="full-stack-engineer">
    <Hero unsplashId="wD1LRb9OeEo" height="40vh">
      <h2>{{certification.name}}</h2>
      <h5>Full-Cycle Project Leadership</h5>
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
            <h2>Principled Development From End to End</h2>
            <p
              class
            >Projects live and die because of leadership. As a Full-Stack Engineer, you are trained in the arts of "Agile Software Development" and can help lead the entire development team to victory through sound project management, Agile and Lean practices, and principled software development techniques.</p>
          </div>
          <SalaryBlock
            :amount="121060"
            url="https://www.glassdoor.com/Salaries/lead-full-stack-engineer-salary-SRCH_KO0,24.htm"
            :title="`Lead ${certification.name}`"
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
      <div class="container">
        <h2 class="text-center pt-5">Technologies you will Master</h2>
        <h5 class="text-center mb-5">In the {{certification.name}} Program</h5>
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
import { FULL_STACK_ENGINEER } from "@/store/constants";
import SelectProgramButton from "@/components/SelectProgramButton";
import { mapGetters } from "vuex";
import CertificationCard from "@/components/CertificationCard";
import Unsplash from "@/components/Unsplash";
import SalaryBlock from "@/components/SalaryBlock";
import { mapCertificationToPlan } from "../../store/certifications";

export default {
  data: () => ({
    certName: FULL_STACK_ENGINEER
  }),
  computed: {
    ...mapGetters(["getCertifications", "getBootcampFeatures", "getStartDate"]),
    certification() {
      return this.getCertifications.find(x => x.name === FULL_STACK_ENGINEER);
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
      this.$store.dispatch(
        "setActivePlan",
        mapCertificationToPlan(cert, this.getStartDate)
      );
      this.$router.push("/enroll");
    }
  }
};
</script>

<style lang="scss">
.full-stack-engineer {
}
</style>