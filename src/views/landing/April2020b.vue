<template>
  <div>
    <Hero unsplashId="XJXWbfSo2f0" height="100vh" heroClass="hero-overlay">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="d-xs-block d-sm-none text-center">
              <h1>learn to code</h1>
              <h3>in only 6 months</h3>
            </div>
            <div class="d-none d-sm-block text-center">
              <h2>learn to code</h2>
              <h4>in only 6 months</h4>
            </div>
          </div>

          <div class="col">
            <StartApplicationForm @submitted="startApplication" v-if="!hasApplied" />
            <div class="border bg-light p-4 mb-5" v-if="hasApplied">
              <h3>Congratulations</h3>
              <p>
                You are on your way to starting a new career. We have received
                your applicatoin! You should check your email for next steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Hero>
    <div class="container mt-5 text-center">
      <h2>Take a closer look</h2>
      <h4>Numbers don't lie.</h4>
      <div class="mb-5 mt-5">
        <Stats />
      </div>
    </div>

    <div class="container mt-5 text-center">
      <h2>Knowledge is Power</h2>
      <h4>Some of the technologies you'll be learning</h4>
      <div class="mb-5 mt-5">
        <Top10Tech />
      </div>
    </div>

    <div class="mt-5">
      <CommercialSection>
        <h2>Check this out</h2>
        <h4>Welcome to our full-service software development school!</h4>
      </CommercialSection>
    </div>

    <div class="mt-5">
      <div class>
        <div class="container">
          <div class="pt-5 text-center">
            <h2>Let's avoid bragging</h2>
            <h4>Here is what others have to say.</h4>
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
import CommercialSection from "./CommercialSection";
import StartApplicationForm from "@/views/landing/StartApplicationForm";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Stats from "@/components/Stats";
import { mapGetters } from "vuex";
import Top10Tech from "./Top10Tech";

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
    Top10Tech
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
.hero-overlay {
  background: none;
}
</style>
