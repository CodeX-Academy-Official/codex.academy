<template>
  <div>
    <Hero
      class="pathrise-landing-hero"
      unsplashId="f5pTwLHCsAg"
      height="100vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
      id="cta"
    >
      <div class="container">
        <div class="row h-100">
          <div class="col my-auto big-message">
            <Logo color="white" :width="150" class="landing-logo mb-3" />
            <div class>
              <h3 class="text-left action">Turn-key, Co-Branded</h3>
              <h1 class="text-left action">Coding Bootcamps</h1>
              <h3 class="text-left action">To Reskill Your Team</h3>
            </div>
            <div class="checklist">
              <div class="title">We've got you covered!</div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Flexible Curriculum</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Faculty Provided</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Student Reporting</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Smart Invoicing</span>
              </div>
            </div>
          </div>

          <div class="col-5 d-none d-lg-block my-auto">
            <div class="start-application-form">
              <h5 class="card-title text-center">Start the Conversation</h5>
              <BaaSInterestForm />
            </div>
          </div>
        </div>
      </div>
    </Hero>

    <div class="container">
      <h3 class="mt-5 text-center">Bootcamp-as-a-Service</h3>

      <div class="row justify-content-center">
        <div class="mt-3 col-10 col-md-6 col-lg-7" ref="video">
          <video-embed
            :params="{ autoplay: 0 }"
            src="https://www.youtube.com/watch?v=6X_fHeBLewM"
          ></video-embed>
        </div>
        <div class="mt-3 col-10 col-md-6 col-lg-3">
          <p>
            CodeX Academy now offers it’s comprehensive backend and framework
            for any organization or company that wishes to reskill their
            workforce or give exciting new opportunities to their team members.
            Your organization's boot camp can follow CodeX Academy’s software
            development pathways and curriculum, or you can bring your own
            curriculum and learning materials. You can depend on CodeX Academy’s
            amazing mentors and instructors, or you can bring your own. CodeX
            Academy will handle the rest!
          </p>
        </div>
      </div>

      <!-- <div class="row">
        <div class="col">
          <p>
            CodeX Academy has ongoing open enrollment for any student who wants
            to join and begin learning. However, CodeX also provides individuals
            and organizations with the chance to host their very own co-branded,
            hosted and fully-customized boot camp using CodeX Academy’s
            established formula and framework as a back-end. Hosts can even earn
            revenue generated from boot camps by marking up tuition and covering
            some of the daily or weekly tasks that CodeX staff would normally
            perform. Boot camp hosts can take ownership of the boot camp
            including (but not limited to) customizing boot camp branding, name,
            curriculum, or daily schedule. Boot camp hosts can even add custom
            elements to the boot camp daily/weekly routine to better support
            their audiences.
          </p>
        </div>
      </div> -->

      <div class="row justify-content-center">
        <div class="col-10 col-md-8 col-lg-6">
          <div
            class="border bg-periwinkle p-4 m-4 text-center row justify-content-center"
          >
            <div class="col-12 col-lg-2">
              <Icon name="standing" />
            </div>

            <div class="col">
              <span class>Simple flat fee per student:</span>
              <div>
                <h2 style="display: inline;"><Money :amount="87" /></h2>
              </div>
              <div class="small text-muted">
                per week plus additional services
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="text-center mt-3">
      <a @click="goto('cta')" class="btn btn-lg btn-warning"
        >Start the Conversation</a
      >
    </p>

    <div class="mt-5 pb-5 pt-5 bg-lilac">
      <div class="container">
        <div class="row justify-content-center">
          <h1 class="col-10 text-center">Framework</h1>
          <p class="col-8">
            CodeX Academy's robust backend and framework takes the guess-work
            out of running a bootcamp. Allow us to handle the logistics while
            you focus on your students.
          </p>
          <div class="col-10">
            <BootcampFeatures />
          </div>
        </div>
      </div>
      <p class="text-center mt-5">
        <a @click="goto('cta')" class="btn btn-lg btn-primary"
          >Start the Conversation</a
        >
      </p>
    </div>

    <div class="pb-5 pt-5 bg-muted">
      <div class="container">
        <div class="row justify-content-center">
          <h1 class="text-center">Additional Services</h1>
          <p class="col-10">
            CodeX Academy boot camps are flexible enough for you to bring your
            own program while we handle the logistics. But, you may want some
            help with learning activities, mentoring, etc. We're glad to provide
            you these services.
          </p>
          <div class="col-10">
            <AdditionalBootcampServices :services="services" />
          </div>
        </div>
      </div>
      <p class="text-center mt-5">
        <a @click="goto('cta')" class="btn btn-lg btn-warning"
          >Start the Conversation</a
        >
      </p>
    </div>

    <!-- <div class="mt-5 pb-5 pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-10">
            <h1 class="text-center">Boot Camp Price Calculator:</h1>

            <BaaSCalculator :services="services" :baseFee="375" />
          </div>
        </div>
      </div>
    </div> -->
    <div class="pb-5 pt-3 bg-periwinkle">
      <div class="container">
        <QandASection />
        <p class="text-center">
          <a @click="goto('cta')" class="btn btn-lg btn-primary"
            >Start the Conversation</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Unsplash from "@/components/Unsplash";
import Hero from "@/components/Hero";
import { mapGetters } from "vuex";
import Icon from "@/components/Icon";
import Money from "@/components/Money";
import Logo from "@/components/Logo";
import BaaSInterestForm from "@/components/sections/baas/BaaSInterestForm";
import QandASection from "@/components/sections/corp/corp-qanda";
import BootcampFeatures from "@/components/sections/corp/BootcampFeatures";
import BaaSCalculator from "@/components/sections/baas/BaaSCalculator";
import AdditionalBootcampServices from "@/components/sections/baas/AdditionalBootcampFeatures";

export default {
  components: {
    Unsplash,
    Hero,
    Logo,
    AdditionalBootcampServices,
    Icon,
    Money,
    BaaSInterestForm,
    BootcampFeatures,
    BaaSCalculator,
    QandASection,
  },
  computed: {
    ...mapGetters([]),
  },
  data: () => ({
    services: [
      {
        name: "1-on-1 Mentoring Sessions",
        icon: "mentorscreen",
        price: 20,
        maxAttendees: 1,
        defaultQuantity: 2,
      },
      {
        name: "Evaluations/Skills Assessments",
        icon: "test",
        price: 25,
        maxAttendees: 1,
        defaultQuantity: 2,
      },
      {
        name: "Daily Status Meetings",
        icon: "meeting",
        price: 20,
        maxAttendees: 10,
        defaultQuantity: 5,
      },
      {
        name: "Group Q&A Sessions",
        icon: "hands",
        price: 35,
        maxAttendees: 10,
        defaultQuantity: 3,
      },
      {
        name: "Live Online Classes",
        icon: "class",
        price: 35,
        maxAttendees: 20,
        defaultQuantity: 1,
      },
      {
        name: "Custom Curriculum Support",
        icon: "blueprints",
      },
    ],
  }),
  methods: {
    goto(el) {
      function isHidden(el) {
        return el.offsetParent === null;
      }

      let element = document.getElementById(el);
      if (!isHidden(element))
        element.scrollIntoView({ behavior: "smooth", block: "end" });
    },
  },
  mounted() {},
};
</script>
