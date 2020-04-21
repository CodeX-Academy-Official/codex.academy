<template>
  <div>
    <Hero
      class="think-digital-april2020-landing-hero"
      :unsplashIds="['vdXMSiX-n6M', 'Qg-r7OxZN7A', 'YK0HPwWDJ1I']"
      height="100vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <div class="container">
        <div class="row h-100">
          <div class="col my-auto big-message">
            <div class="landing-logo mb-5">
              <Logo color="white" :width="150" class="d-inline" />
              <Icon name="plusByHand" :size="50" style="margin-left: 15px;" color="white" />
              <img
                src="https://thinkdigital.academy/wp-content/uploads/2019/05/logo-think-digital-website.png"
                style="filter: brightness(0) invert(1); width: 150px; margin-bottom: 10px;"
              />
            </div>

            <div class>
              <h3 class="text-left action">Learn to code</h3>
              <h1 class="text-left action">In 6 Months</h1>
            </div>
            <div class="checklist">
              <div class="title">We'll help you do it!</div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Daily mentoring sessions</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Hyperfocused curriculum</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Walk into an internship</span>
              </div>
            </div>
          </div>

          <div class="col-5 d-none d-md-block">
            <div class="start-application-form" v-if="!hasApplied">
              <h5 class="card-title text-center">Sign Up Today</h5>
              <StartApplicationForm @submitted="startApplication" />
            </div>
            <Thanks v-if="hasApplied" @startOver="clearApplicant" />
          </div>
        </div>
      </div>
    </Hero>

    <div class="container d-block d-md-none mt-5">
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

    <div class="container mt-5 text-center">
      <h1>Opportunity Awaits</h1>
      <h3>Your Options Are Looking Good</h3>
      <div class="pb-5 pb-5">
        <Stats />
      </div>
    </div>

    <CommercialSection>
      <h1>How it Works</h1>
      <h3>Welcome to our full-service software development school!</h3>
    </CommercialSection>

    <div class="bg-lilac pt-5 pb-5">
      <div class="container text-center">
        <h1>Knowledge is Power</h1>
        <h3>Some of the technologies you'll be learning</h3>
        <div class="mb-5 mt-5">
          <Technologies :includeName="true" :onlyImportant="true" />
          <div class="text-center">
            <router-link class="btn btn-secondary" to="/howitworks#tech">See More Technologies</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <div class>
        <div class="container">
          <div class="pt-5 text-center">
            <h1>Here is what others have to say</h1>
            <h3>CodeX Academy is a valuable experience!</h3>
            <div class="mt-5">
              <TestimonialsCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import CommercialSection from "@/components/./CommercialSection";
import StartApplicationForm from "@/views/landing/StartApplicationForm";
import Thanks from "@/views/landing/Thanks";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Stats from "@/components/Stats";
import { mapGetters } from "vuex";
import Technologies from "@/components/Technologies";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import SelectPlanButton from "@/components/SelectPlanButton";

const PillarsBlock = {
  props: {
    pillars: Array
  },
  render() {
    const items = this.pillars.map(p => (
      <li>
        <strong>{p.title}</strong> - {p.subtitle}
      </li>
    ));
    return (
      <div class="d-none d-md-block">
        <h3>Give us 6 Months, We'll give you a new career!</h3>
        <p>Here's how we will do it:</p>
        <ul>{items}</ul>
      </div>
    );
  }
};

export default {
  components: {
    Hero,
    Thanks,
    StartApplicationForm,
    TestimonialsCarousel,
    Stats,
    PillarsBlock,
    CommercialSection,
    Technologies,
    Icon,
    Logo,
    Thanks
  },
  data: () => ({
    hasApplied: false
  }),
  computed: { ...mapGetters(["getMethods", "getApplicant"]) },
  methods: {
    async startApplication(applicant) {
      const hsForm = "1441c2f7-cad9-435d-bfb1-224695fb3258";
      await this.$store.dispatch("startApplication", {
        applicant: { ...applicant, source: "Think Digital April 2020" },
        hsForm
      });
      await this.$store.dispatch("setStartDate", applicant.startDate);
      this.hasApplied = true;
    },
    clearApplicant() {
      this.hasApplied = false;
    }
  },
  mounted() {
    const applicant = this.getApplicant;
    this.hasApplied = applicant;
  }
};
</script>

<style lang="scss">
@import "@/variables";

.landing-logo {
  // position: absolute;
  // top: 2.6vh;
  // left: 6vw;
  // fill: White;
}
.think-digital-april2020-landing-hero {
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
    font-size: 3.2em;
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
