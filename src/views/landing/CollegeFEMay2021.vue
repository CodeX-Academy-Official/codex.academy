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
              <h3 class="text-left action">Become a</h3>
              <h1 class="text-left action">Front-End Developer</h1>
              <h3 class="text-left action">and Land a job</h3>
            </div>
            <div class="checklist">
              <div class="title">
                We'll help you do it in <strong>26 weeks!</strong>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Modern, Marketable Skills</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Dedicated Mentors</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Daily Classes and Touchpoints</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Study Part-Time</span>
              </div>
            </div>
          </div>

          <div class="col-5 d-none d-lg-block my-auto" id="assessment2">
            <div class="start-application-form">
              <h5 class="card-title text-center">See If you Qualify</h5>
              <StartApplicationForm
                @submitted="startAssessment"
                hasPromoCode=""
                :offerFinancialAid="true"
                submitButtonLabel="Start Assessment"
              />
            </div>
            <PartneringWith :partner="getSource" />
          </div>
        </div>
      </div>
    </Hero>

    <div class="container d-block d-lg-none mt-5" id="assessment">
      <div class="row justify-content-center">
        <div class="col-10 bg-periwinkle shadow border p-4">
          <div class="start-application-form">
            <h2 class="card-title text-center">See If you Qualify</h2>
            <StartApplicationForm
              @submitted="startAssessment"
              hasPromoCode=""
              :offerFinancialAid="true"
              submitButtonLabel="Start Assessment"
            />
          </div>
          <PartneringWith :partner="getSource" />
        </div>
      </div>
    </div>

    <DetailedLandingPageContent
      :certification="certification"
      :bootcampFeatures="[
        '26 Weeks Part-Time',
        '20 Hours/Week Minimum',
        'Self-Paced, Mastery-Based Curriculum',
        'Daily classes and touchpoints',
      ]"
    >
      <div class>
        <h2>Everything the User Touches</h2>
        <p class>
          As a Front-End Developer, you are the master of the user interface.
          Everything the user clicks, feels, sees and experiences is a result of
          your work in the front-end. Using technologies like HTML, CSS and
          Javascript, you build the interfaces that move our culture!
        </p>
      </div>
      <SalaryBlock
        :amount="76929"
        url="https://www.glassdoor.com/Salaries/front-end-developer-salary-SRCH_KO0,19.htm"
        :title="certification.name"
      />
    </DetailedLandingPageContent>
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
import { FRONT_END_DEVELOPER } from "@/store/constants";
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
    certification() {
      return this.getCertifications.find((x) => x.name === FRONT_END_DEVELOPER);
    },
  },
  methods: {
    async startAssessment(applicant) {
      await this.$store.dispatch("startApplication", {
        applicant,
      });
      // await this.$store.dispatch("setStartDate", applicant.startDate);
      this.hasApplied = true;

      const { email, firstName, lastName } = applicant;
      const url = `https://docs.google.com/forms/d/e/1FAIpQLSdYB6iTFPym8cl1Cmrqzc0_SgAS-XuTV8utSkDEX9Q5PSeuWQ/viewform?usp=pp_url&entry.986276391=${encodeURI(
        firstName
      )}&entry.1956546528=${encodeURI(lastName)}&entry.367274024=${encodeURI(
        email
      )}`;
      location.href = url;
    },
    clearApplicant() {
      this.hasApplied = false;
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
