<template>
  <div>
    <Hero unsplashId="XJXWbfSo2f0" height="30vh">
      <div class="d-xs-block d-sm-none text-center">
        <h1>learn to code</h1>
        <h3>in only 6 months</h3>
      </div>
      <div class="d-none d-sm-block text-center">
        <h2>learn to code</h2>
        <h4>in only 6 months</h4>
      </div>
    </Hero>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col col-sm-12 col-md-7 col-lg-80010011">
          <h2 class="d-none d-sm-block text-center">
            It's time for a new career!
          </h2>
          <h3 class="d-xs-block d-sm-none text-center">
            It's time for a new career!
          </h3>
          <div class="mb-5 text-center">
            <div class="d-none d-xl-block">
              <Commercial :width="620" />
            </div>
            <div class="d-none d-lg-block d-xl-none">
              <Commercial :width="520" />
            </div>
            <div class="d-none d-md-block d-lg-none">
              <Commercial :width="380" />
            </div>
            <div class="d-none d-sm-block d-md-none">
              <Commercial :width="500" />
            </div>
            <div class="d-xs-block d-sm-none">
              <Commercial :width="345" />
            </div>
          </div>
          <PillarsBlock :pillars="getMethods" v-if="!hasApplied" />
        </div>
        <div class="col-12 col-sm-8 col-md-5 col-lg-4">
          <StartApplicationForm
            @submitted="startApplication"
            v-if="!hasApplied"
          />
          <div class="border bg-light p-4 mb-5" v-if="hasApplied">
            <h3>Congratulations</h3>
            <p>
              You are on your way to starting a new career. We have received
              your applicatoin! You should check your email for next steps.
            </p>
          </div>
          <PillarsBlock :pillars="getMethods" v-if="hasApplied" />
        </div>
      </div>
    </div>

    <div class="bg-light mt-5 border">
      <div class>
        <div class="container">
          <div class="pt-5">
            <TestimonialsCarousel />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import VideoPlayer from "@/components/VideoPlayer";
import StartApplicationForm from "@/views/landing/StartApplicationForm";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Stats from "@/components/Stats";
import { mapGetters } from "vuex";

const PillarsBlock = {
  props: {
    pillars: Array,
  },
  render() {
    const items = this.pillars.map((p) => (
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
  },
};

const Commercial = {
  props: { width: Number },
  render() {
    return (
      <VideoPlayer
        mp4="video/2020-03-45s.mp4"
        width={this.width}
        poster="img/commercial/24-weeks.png"
      />
    );
  },
};

export default {
  components: {
    Hero,
    VideoPlayer,
    StartApplicationForm,
    TestimonialsCarousel,
    Stats,
    PillarsBlock,
    Commercial,
  },
  data: () => ({
    hasApplied: false,
  }),
  computed: { ...mapGetters(["getMethods", "getApplicant"]) },
  methods: {
    async startApplication(applicant) {
      await this.$store.dispatch("enroll", applicant);
      this.hasApplied = true;
    },
  },
  mounted() {
    const applicant = this.getApplicant;
    this.hasApplied = applicant;
  },
};
</script>

<style></style>
