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
              <h1 class="text-left action">CodeX Camp</h1>
            </div>
            <div class="checklist">
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
                <span>Ages 12 and Up</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>
                  <strong>Only $150/week</strong>
                </span>
              </div>
            </div>
          </div>

          <div class="col-5 d-none d-lg-block my-auto">
            <div class="start-application-form" v-if="!hasApplied">
              <h5 class="card-title text-center">Sign Up Today</h5>
              <StartApplicationForm
                @submitted="startApplication"
                :offerFinancialAid="false"
              />
            </div>
            <div v-if="hasApplied" class="text-center">
              <h3 class="mb-3">Thanks!</h3>
              <p class="mb-3">
                You have started an application, but still lack a bit more.
                Let's get moving!
              </p>
              <router-link to="/enroll" class="btn btn-primary"
                >Continue Application</router-link
              >
              <p class="mt-3">
                <button class="btn btn-secondary" @click="clearApplicant">
                  Sign Up Someone Else
                </button>
              </p>
            </div>
            <!-- <Thanks v-if="hasApplied" @startOver="clearApplicant" :offerFinancialAid="false" /> -->
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
          <div v-if="hasApplied" class="text-center">
            <h3 class="mb-3">Thanks!</h3>
            <p class="mb-3">
              You have started an application, but still lack a bit more. Let's
              get moving!
            </p>
            <router-link to="/enroll" class="btn btn-primary"
              >Continue Application</router-link
            >
            <p class="mt-3">
              <button class="btn btn-secondary" @click="clearApplicant">
                Sign Up Someone Else
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center p-5">
      <div class="col-12 col-sm-10 col-lg-8">
        <DesignedByByron />
      </div>
    </div>

    <div class="pt-5 pb-5 bg-periwinkle">
      <div class="container">
        <h2 class="text-center mb-5">What's the 411 on CodeX Camp?</h2>
        <div class="row">
          <div class="col-12 col-md-6">
            <p>
              CodeX Academy presents "CodeX Camp", a remote summer day-camp for
              kids designed to teach them how to code and create web
              applications.
            </p>

            <ul>
              <li>$50 Application Fee</li>
              <li>Only $150/week</li>
              <li>Ages 12 and Up</li>
              <li>Flexible Daytime Hours</li>
              <li>Take as Many Weeks as You Want</li>
              <li>Full-Remote, Learn From Home</li>
              <li>Self-Paced, Independent Study with Mentor Support</li>
              <li>Challenging, But Incredibly Fun and Fulfilling</li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <h5>Can I handle this camp?</h5>
            <p>
              We believe any person has the capacity to learn to code, but it's
              definitely not as easy as basket weaving. As you consider if you
              can handle this camp, ask yourself the following questions:
            </p>
            <ul>
              <li>Am I willing to work hard to learn a valuable skill?</li>
              <li>Am I able to sit quietly and work through tough problems?</li>
              <li>
                Can I stick to a task and see it through, even it takes extra
                patience?
              </li>
            </ul>
            <p>
              If you answer yes to these questions, you can probably handle
              CodeX Camp.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5 mb-5">
      <h2 class="text-center">What Happens at CodeX Camp</h2>
      <h5 class="text-center mb-5">A day in the life of a CodeX Camper</h5>
      <CampDayTimeline />
    </div>

    <div class="pt-5 pb-5 bg-lilac">
      <div class="container">
        <h2 class="text-center mb-5">Technologies and Tools we Teach</h2>
        <Technologies certification="Front-End Developer" :includeName="true" />
      </div>
    </div>

    <TestimonialsSection />

    <div class="container mt-5 mb-5">
      <h2 class="text-center">CodeX Academy is more than Camp</h2>
      <h5 class="text-center">Check out the links below</h5>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import StartApplicationForm from "@/views/landing/StartApplicationForm";
import Thanks from "@/views/landing/Thanks";
import { getNextDeadlineAfter, formatted } from "@/utils/dates";
import { mapGetters } from "vuex";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import SelectPlanButton from "@/components/SelectPlanButton";
import Promo25OffMonthly from "@/components/Promo25OffMonthly";
import Technologies from "@/components/Technologies";
import CommercialSection from "@/components/sections/CommercialSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CampDayTimeline from "@/components/CampDayTimeline";
import DesignedByByron from "@/components/DesignedByByron";

export default {
  components: {
    CampDayTimeline,
    Hero,
    Thanks,
    StartApplicationForm,
    Icon,
    Logo,
    Thanks,
    Promo25OffMonthly,
    Technologies,
    StatsSection,
    TestimonialsSection,
    CommercialSection,
    DesignedByByron,
  },
  data: () => ({
    hasApplied: false,
  }),
  computed: { ...mapGetters(["getMethods", "getApplicant"]) },
  methods: {
    async startApplication(applicant) {
      await this.$store.dispatch("startApplication", {
        applicant: { ...applicant, source: "Summer-Camp May 2020" },
      });
      const startDate = formatted(getNextDeadlineAfter("5-30-2020"));
      await this.$store.dispatch("setStartDate", startDate);
      this.hasApplied = true;

      const campPlan = {
        id: "camp2020",
        name: "CodeX Camp 2020",
        description:
          'CodeX Academy presents "CodeX Camp", a remote summer day-camp for kids designed to teach them how to code and create web applications.',
        startDate,
        studyHours: 20,
        totalStudyHours: 20,
        mentorSessions: 3,
        price: 150,
        months: 0,
        appFee: true,
        isMonthly: false,
        isFixed: true,
      };

      this.$store.dispatch("setActivePlan", campPlan);

      this.$router.push("/enroll");
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
