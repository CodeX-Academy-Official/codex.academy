<template>
  <div>
    <Hero
      class="pathrise-landing-hero"
      unsplashId="f5pTwLHCsAg"
      height="100vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <div class="container">
        <div class="row h-100">
          <div class="col my-auto big-message">
            <Logo color="white" :width="150" class="landing-logo mb-3" />
            <div class>
              <h3 class="text-left action">Turn-key, Co-Branded</h3>
              <h1 class="text-left action">Coding Bootcamps</h1>
              <h3 class="text-left action">as a Service</h3>
            </div>
            <div class="checklist">
              <div class="title">We've got you covered!</div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Flexible Curriculum (Yours/Ours)</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Revenue Sharing</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Financial Aid for Students</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Personal Account Manager</span>
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
      <div class="row justify-content-center">
        <div class="mt-5 col-8">
          <h3 class="text-center">Bootcamp-as-a-Service (BaaS)</h3>
          <p>
            CodeX Academy now offers it’s comprehensive backend and framework
            for an organization, club, or individual to launch their very own
            boot camp. Your boot camp can follow CodeX Academy’s software
            development pathways and curriculum, or you can bring your own
            curriculum and learning materials. You can depend on CodeX Academy’s
            amazing mentors and instructors, or you can bring your own (or
            handle it yourself). CodeX Academy will handle the rest!
          </p>

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
      </div>

      <div class="row justify-content-center">
        <div class="col-5">
          <div
            class="border bg-periwinkle p-4 m-4 text-center row justify-content-center"
          >
            <div class="col-12 col-lg-2">
              <Icon name="standing" />
            </div>

            <div class="col">
              <span class>Simple flat fee per student:</span>
              <div>
                <h2 style="display: inline;">
                  <Money :amount="375" />
                </h2>
              </div>
              <div class="small text-muted">
                per month + additional services
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 pb-5 pt-5 bg-lilac">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-8">
            <h1 class="text-center">Additional Services</h1>
            <table clas="table">
              <tr>
                <td>Student Orientation</td>
                <td>
                  <ul>
                    <li>
                      Adaptation of core orientation class to your bootcamp as
                      needed
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Student Progress Tracking
                </td>
                <td>
                  <ul>
                    <li>
                      Frequent pace/trajectory re-calculation
                    </li>
                    <li>
                      Student low-progress alerts
                    </li>
                    <li>
                      Check-in meeting facilitation
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Reporting
                </td>
                <td>
                  <ul>
                    <li>
                      Student records available to host upon request
                    </li>
                    <li>
                      Frequent student progress reports
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Student Success Management
                </td>
                <td>
                  <ul>
                    <li>
                      Mentor introductions
                    </li>
                    <li>
                      Kicking off each level with a strategy meeting
                    </li>
                    <li>
                      Working with students to maintain goal-focused pace
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Community Support
                </td>
                <td>
                  <ul>
                    <li>
                      Active developer/mentor/learner chat community
                    </li>
                    <li>
                      Daily monitoring and moderating
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Payment and Financial Aid Services
                </td>
                <td>
                  <ul>
                    <li>
                      Credit/Debit card payments (no transaction fees)
                    </li>
                    <li>
                      Student loans available
                    </li>
                    <li>
                      ISA’s available
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Job Placement Services
                </td>
                <td>
                  <ul>
                    <li>
                      Resume/CV feedback
                    </li>
                    <li>
                      Extensive and growing curated list of internship and
                      hiring partners
                    </li>
                    <li>
                      Job Application counseling/advice
                    </li>
                    <li>
                      Professional introductions
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  Curriculum Support
                </td>
                <td>
                  <ul>
                    <li>
                      Students are welcome to use CodeX Academy’s core
                      full-stack software development curriculum if desired.
                    </li>
                    <li>
                      If you need help adapting your own curriculum or learning
                      resources, we will provide assistance as needed.
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <QandASection />
  </div>
</template>

<script>
import Unsplash from "@/components/Unsplash";
import Hero from "@/components/Hero";
import { mapGetters } from "vuex";
import Icon from "@/components/Icon";
import Money from "@/components/Money";
import Logo from "@/components/Logo";
import BaaSInterestForm from "@/components/BaaSInterestForm";
import QandASection from "@/components/sections/BasS-qanda";

export default {
  components: {
    Unsplash,
    Hero,
    Logo,
    Icon,
    Money,
    BaaSInterestForm,
    QandASection,
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    // certificationSelected(cert) {
    //   this.$store.dispatch(
    //     "setActivePlan",
    //     mapCertificationToPlan(cert, this.getStartDate)
    //   );
    //   this.$router.push("/enroll");
    // }
  },
  mounted() {
    // if (this.isInternational) {
    //   this.$router.push("/programs/international");
    // }
  },
};
</script>
