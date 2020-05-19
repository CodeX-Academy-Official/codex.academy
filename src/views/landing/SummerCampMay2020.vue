<template>
  <div>
    <Hero
      class="april2020s-landing-hero"
      :unsplashIds="['LIaLQ2SIQuk', 'ix9I7kfMpcc', 'wGqz5YSqsfk']"
      height="100vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <div class="container">
        <div class="row h-100">
          <div class="col my-auto big-message">
            <Logo color="white" :width="150" class="landing-logo mb-3" />
            <div class>
              <h3 class="text-left action">Beat the Heat, Learn to Code</h3>
              <h1 class="text-left action">
                Summer
                Bootcamp
              </h1>
            </div>
            <div class="checklist">
              <div class="title">Take back your summer!</div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Daily Classes and Mentoring</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>World-Class Mentors</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>100% Remote</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>
                  <strong>Ages 12 and Up</strong>
                </span>
              </div>
            </div>
          </div>

          <div class="col-5 d-none d-lg-block my-auto">
            <div class="start-application-form" v-if="!hasApplied">
              <h5 class="card-title text-center">Sign Up Today</h5>
              <StartApplicationForm @submitted="startApplication" :offerFinancialAid="false" />
            </div>
            <Thanks v-if="hasApplied" @startOver="clearApplicant" :offerFinancialAid="false" />
          </div>
        </div>
      </div>
    </Hero>

    <div class="container d-block d-lg-none mt-5">
      <div class="row justify-content-center">
        <div class="col-10 bg-periwinkle shadow border p-4">
          <div class="start-application-form" v-if="!hasApplied">
            <h2 class="card-title text-center">Get Started Learning</h2>
            <StartApplicationForm @submitted="startApplication" />
          </div>
          <Thanks v-if="hasApplied" @startOver="clearApplicant" />
        </div>
      </div>
    </div>

    <TechSection />

    <TestimonialsSection />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import StartApplicationForm from "@/views/landing/StartApplicationForm";
import Thanks from "@/views/landing/Thanks";
import { mapGetters } from "vuex";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import SelectPlanButton from "@/components/SelectPlanButton";
import Promo25OffMonthly from "@/components/Promo25OffMonthly";
import TechSection from "@/components/sections/tech";
import CommercialSection from "@/components/sections/CommercialSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default {
  components: {
    Hero,
    Thanks,
    StartApplicationForm,
    Icon,
    Logo,
    Thanks,
    Promo25OffMonthly,
    TechSection,
    StatsSection,
    TestimonialsSection,
    CommercialSection
  },
  data: () => ({
    hasApplied: false
  }),
  computed: { ...mapGetters(["getMethods", "getApplicant"]) },
  methods: {
    async startApplication(applicant) {
      await this.$store.dispatch("startApplication", {
        applicant: { ...applicant, source: "Summer-Camp May 2020" }
      });
      await this.$store.dispatch("setStartDate", applicant.startDate);
      this.hasApplied = true;
      this.$router.push("/programs/low-monthly");
    },
    clearApplicant() {
      this.hasApplied = false;
    }
  },
  mounted() {
    const applicant = this.getApplicant;
    this.hasApplied = applicant;
    //this.$store.dispatch("setPriceClass", "low-monthly");
  }
};
</script>

<style lang="scss">
@import "@/variables";

.april2020s-landing-hero {
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
