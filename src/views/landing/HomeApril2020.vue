<template>
  <div>
    <Hero
      :unsplashIds="['vdXMSiX-n6M','Qg-r7OxZN7A', 'YK0HPwWDJ1I']"
      height="100vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <Logo color="white" :width="150" class="top-left" />

      <div class="container">
        <div class="row h-100">
          <div class="col my-auto big-message">
            <div class="d-sm-block d-md-none text-center">
              <h3 class="text-left">Learn to code</h3>
              <h1 class="text-left action">In 6 Months</h1>
            </div>
            <div class="d-none d-md-block text-center">
              <h4 class="text-left">Learn to code</h4>
              <h2 class="text-left action">In 6 Months</h2>
            </div>
            <div class="checklist">
              <div class="title">We'll help you do it with:</div>
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
                <span>An amazing internship opportunity</span>
              </div>
            </div>
          </div>

          <div class="col-5 d-none d-md-block">
            <div class="start-application-form" v-if="!hasApplied">
              <h5 class="card-title text-center">Get Started Learning</h5>
              <StartApplicationForm @submitted="startApplication" />
            </div>
            <div class="thanks-box" v-if="hasApplied">
              <h3>Thanks</h3>
              <p>
                You are on your way to starting a new career. We have received
                your application! You should check your email for next steps.
              </p>
            </div>
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
          <div class="thanks-box" v-if="hasApplied">
            <h2 class="text-center">Thanks</h2>
            <p>
              You are on your way to starting a new career. We have received
              your application! You should check your email for next steps.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5 text-center">
      <h1>Take a closer look</h1>
      <h3>Numbers don't lie.</h3>
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
            <h3>CodeX Academy is a great experience!</h3>
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
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Stats from "@/components/Stats";
import { mapGetters } from "vuex";
import Technologies from "@/components/Technologies";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";

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
    StartApplicationForm,
    TestimonialsCarousel,
    Stats,
    PillarsBlock,
    CommercialSection,
    Technologies,
    Icon,
    Logo
  },
  data: () => ({
    hasApplied: false
  }),
  computed: { ...mapGetters(["getMethods", "getApplicant"]) },
  methods: {
    async startApplication(applicant) {
      await this.$store.dispatch("startApplication", applicant);
      this.hasApplied = true;
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

.top-left {
  position: absolute;
  top: 3vh;
  left: 6vw;
}
.hero {
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
    font-size: 2vw;
    @media (max-width: 800px) {
      font-size: 3vw;
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
        font-size: 0.5em;
        text-transform: capitalize;
        margin-bottom: 0px;
      }
    }
    .cta {
      margin-top: 20px;
    }
    .privacy {
      font-size: 0.5em;
      text-shadow: none;
      a {
        color: #eee;
      }
    }
  }
}
</style>
