<template>
  <div>
    <Hero
      class="level-up-landing-hero"
      :unsplashIds="['vdXMSiX-n6M', 'Qg-r7OxZN7A', 'YK0HPwWDJ1I']"
      height="100vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <div class="container">
        <div class="row h-100">
          <div class="col my-auto big-message">
            <Logo color="white" :width="150" class="landing-logo mb-3" />
            <div class>
              <h3 class="text-left action">Get ready</h3>
              <h1 class="text-left action">Level-up your skills</h1>
              <h3 class="text-left action">Land a job</h3>
            </div>
            <div class="checklist">
              <div class="title">We'll help you do it!</div>
              <HeroBullets />
            </div>
          </div>

          <div class="col-5 d-none d-lg-block my-auto apply">
            <div class="start-application-form" v-if="!hasApplied">
              <h5 class="card-title text-center">Sign Up Today</h5>
              <StartApplicationForm
                @submitted="startApplication"
                :hasPromoCode="getPromoCodesDisplay"
                :offerFinancialAid="true"
                :extraFields="shortFormExtraFields"
              />
            </div>
            <Thanks v-if="hasApplied" @startOver="clearApplicant" />
            <PartneringWith :partner="getSource" />
          </div>
        </div>
      </div>
    </Hero>

    <div class="container d-block d-lg-none mt-5">
      <div class="row justify-content-center">
        <div class="col-10 bg-periwinkle shadow border p-4">
          <div class="start-application-form" v-if="!hasApplied">
            <h2 class="card-title text-center apply">Get Started Learning</h2>
            <StartApplicationForm
              @submitted="startApplication"
              :hasPromoCode="getPromoCodesDisplay"
              :offerFinancialAid="true"
              :extraFields="shortFormExtraFields"
            />
          </div>
          <Thanks v-if="hasApplied" @startOver="clearApplicant" />
          <PartneringWith :partner="getSource" />
        </div>
      </div>
    </div>

    <ProgramsSection>
      <div class="text-center mt-0">
        <a @click="goto('apply')" class="btn btn-lg btn-primary"
          >Start Application</a
        >
      </div>
    </ProgramsSection>

    <CommercialSection>
      <div class="text-center mt-0">
        <a @click="goto('apply')" class="btn btn-lg btn-primary"
          >Start Application</a
        >
      </div>
    </CommercialSection>

    <TechSection :max="12" />

    <TestimonialsSection>
      <div class="text-center mt-0">
        <a @click="goto('apply')" class="btn btn-lg btn-primary"
          >Start Application</a
        >
      </div>
    </TestimonialsSection>
    <div class="pb-5 pt-3 bg-periwinkle">
      <AwardsSection />
    </div>

    <div class="pb-5 pt-3">
      <div class="container">
        <QandASection />
        <div class="text-center mt-0">
          <a @click="goto('apply')" class="btn btn-lg btn-primary"
            >Start Application</a
          >
        </div>
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
import DetailedLandingPageContent from "./DetailedLandingPageContent";
import HeroBullets from "./HeroBullets";

import PartneringWith from "@/components/PartneringWith";
import SelectPlanButton from "@/components/SelectPlanButton";
import PromoAppFeeWaived from "@/components/PromoAppFeeWaived";
import TechSection from "@/components/sections/tech";
import QandASection from "@/components/sections/QandASection";
import CommercialSection from "@/components/sections/CommercialSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AwardsSection from "@/components/sections/AwardsSection";
import { getFields } from "./url-context";

export default {
  components: {
    Hero,
    Thanks,
    StartApplicationForm,
    Icon,
    QandASection,
    ProgramsSection,
    Logo,
    Thanks,
    PromoAppFeeWaived,
    HeroBullets,
    PartneringWith,
    TechSection,
    StatsSection,
    TestimonialsSection,
    DetailedLandingPageContent,
    CommercialSection,
    AwardsSection,
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
    ]),
    shortFormExtraFields() {
      return getFields(this);
    },
  },
  methods: {
    async startApplication(applicant) {
      await this.$store.dispatch("startApplication", {
        applicant,
      });
      await this.$store.dispatch("setStartDate", applicant.startDate);
      this.hasApplied = true;
      this.$router.push("/findplan");
    },
    clearApplicant() {
      this.hasApplied = false;
    },
    goto(el) {
      function isHidden(el) {
        return el.offsetParent === null;
      }

      let element = [...document.getElementsByClassName(el)];
      element.forEach((e) => {
        if (!isHidden(e))
          e.scrollIntoView({ behavior: "smooth", block: "end" });
      });
    },
  },
  mounted() {
    const applicant = this.getApplicant;
    this.hasApplied = applicant;
  },
};
</script>

<style lang="scss">
@import "@/variables";

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
