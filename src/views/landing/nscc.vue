<template>
  <div>
    <Hero
      unsplashId="GmoaEH48m8c"
      height="40vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <Logo color="white" :width="150" class="mb-3 text-center" />
      <h2>Coding Bootcamps</h2>
      <h5>Learn to code. Change the world.</h5>
    </Hero>
    <div class="container">
      <div class="col-12 d-block d-lg-none mt-5">
        <PartneringWith :partner="getSource" />
      </div>
      <h2 class="mt-5 text-center">Please select a program:</h2>
      <div class="row justify-content-center">
        <div class="col-8 col-md-6 col-lg-4 mt-5">
          <CertificationCard
            :certification="fed"
            :hidePrice="true"
            :hideDefaultFeatures="true"
            :features="['24 Weeks', 'Part-Time']"
            @certificationSelected="certificationSelected"
          />
        </div>
        <div class="col-4 d-none d-lg-block mt-5">
          <PartneringWith :partner="getSource" />
          <div class="text-center mt-5">
            <Icon name="left-right-arrows" :size="300" color="#60c3fe" />
          </div>
        </div>
        <div class="col-8 col-md-6 col-lg-4 mt-5">
          <CertificationCard
            :certification="fsd"
            :hidePrice="true"
            :hideDefaultFeatures="true"
            :features="['48 Weeks', 'Part-Time']"
            @certificationSelected="certificationSelected"
          />
        </div>
      </div>
    </div>
    <div class="pb-5">
      <div class="container">
        <TestimonialsSection />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import StartApplicationForm from "@/views/landing/StartApplicationForm";
import Thanks from "@/views/landing/Thanks";
import { mapGetters } from "vuex";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import SalaryBlock from "@/components/SalaryBlock";
import DesignedByByron from "@/components/DesignedByByron";
import { FRONT_END_DEVELOPER, FULL_STACK_DEVELOPER } from "@/store/constants";
import PartneringWith from "@/components/PartneringWith";
import SelectPlanButton from "@/components/SelectPlanButton";
import CertificationCard from "@/components/CertificationCard";
import PromoAppFeeWaived from "@/components/PromoAppFeeWaived";
import Technologies from "@/components/Technologies";
import CommercialSection from "@/components/sections/CommercialSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import QandASection from "@/components/sections/QandASection";
import DetailedLandingPageContent from "./DetailedLandingPageContent";

export default {
  components: {
    Hero,
    QandASection,
    Thanks,
    SalaryBlock,
    DetailedLandingPageContent,
    StartApplicationForm,
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
  data: () => ({}),
  computed: {
    ...mapGetters([
      "getMethods",
      "getSource",
      "getApplicant",
      "getPromoCodesDisplay",
      "getCertifications",
      "getBootcampFeatures",
    ]),
    fed() {
      return this.getCertifications.find((x) => x.name === FRONT_END_DEVELOPER);
    },
    fsd() {
      return this.getCertifications.find(
        (x) => x.name === FULL_STACK_DEVELOPER
      );
    },
  },
  methods: {
    certificationSelected(cert) {
      const program = cert.id;
      const price = cert.id === "fed" ? 4000 : 8000;
      const skuObj = { price: price };
      const sku = btoa(JSON.stringify(skuObj));
      const url = `/#/nn?utm_source=NashvilleState&utm_campaign=NashvilleState-college-2021&program=${program}&sku=${sku}`;
      location.href = url;
    },
  },
  mounted() {
window.location.href = "https://go.codex.academy/nscc";
},
};
</script>

<style lang="scss">
@import "@/variables";

img.partner {
  border: #eee solid 1px;
  background-color: white;
  padding: 15px;
  max-height: 125px;
  max-width: 400px;
}

.level-up-landing-hero {
  .thanks-box {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    padding: 1em;
  }
  .big-message {
    .action {
      color: $primary;
    }
  }

  .checklist {
    font-size: 1.6rem;
    @media (max-width: 800px) {
      font-size: 1.4rem;
    }

    .title {
      text-align: left;
      padding-top: 30px;
      padding-bottom: 20px;
    }
    .item {
      padding-bottom: 5px;
      svg {
        fill: white;
        width: 20px;
        height: 20px;
      }
      span {
        padding-left: 15px;
      }
    }
  }

  .start-application-form {
    padding: 1em;
    background-color: rgba(255, 255, 255, 0.4);

    form {
      padding: 0px 1vw;
    }
    .btn-cta {
      background-color: rgb(255, 82, 28);
      color: white;
      font-weight: 900;
    }

    .form-label-group {
      margin-bottom: 10px;

      label {
        //font-size: 0.5em;
        //text-transform: capitalize;
        margin-bottom: 0px;
      }
    }
    .cta {
      margin-top: 20px;
    }
    .privacy {
      font-size: 0.8em;
      text-shadow: none;
      a {
        color: #eee;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-size: 4.2em;
    margin: 0px;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.5em;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1.1rem;
  }
}
</style>
