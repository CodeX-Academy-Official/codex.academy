<template>
  <div class="deferred-payment">
    <Hero unsplashId="DuHKoV44prg" height="25em">
      <h2>Pay Zero Tuition</h2>
      <h5>Until your first job</h5>
    </Hero>
    <div class="container mt-5">
      <div class="text-center">
        <h1 class="section-title">Deferred Tuition Plan</h1>
        <h4></h4>
      </div>
      <p
        class="mb-5 text-left"
      >We believe so strongly in YOU and our process, that we're willing to bet your tuition on it! Sign up with the Deferred Payment Plan and we won't charge tuition until you land your first job. Interested? See terms and conditions below.</p>
      <div class="row mx-auto">
        <div class="col-12 col-md-4" v-for="r in reasons" :key="r.title">
          <div class="w-75 mx-auto text-center mb-5">
            <div class="beach-ball mx-auto mb-3">
              <div class="pt-3">
                <Icon :name="r.icon" color="black" :size="80" />
              </div>
            </div>
            <h3>{{ r.title }}</h3>
            <p>{{ r.description }}</p>
          </div>
        </div>
      </div>

      <div class="text-center">
        <p>After applying, talk to your admissions counselor about the Deferred Tuition Plan.</p>
      </div>

      <div class="text-center">
        <SelectPlanButton text="Apply Now" buttonClass="btn-lg" />
      </div>
    </div>

    <!-- <div class="text-center mt-5 bg-lilac">
      <h3>Do I qualify?</h3>
      <h4></h4>
      <p>To qualify for the Deferred Tuition Plan, you must meet the following criteria:</p>
      <ul>
        <li>Applying for a program with cost of at least $5,000.</li>
        <li></li>
      </ul>
    </div>-->

    <!-- <div class="mt-5">
        <Quote
          text="The loan process with Climb Credit has simply set the bar for loan companies.
Climb takes the ‘whole person’ and ‘whole profile’ into account."
          author="Tonia, IL"
        />
    </div>-->

    <!-- <div class="mt-5 text-center">
        <h3>Sample Plan</h3>
        <SampleDeferredPlan />
    </div>-->
    <div class="mb-5"></div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Quote from "@/components/Quote";
import SampleDeferredPlan from "@/components/SampleDeferredPlan";
import SelectPlanButton from "@/components/SelectPlanButton";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";

export default {
  components: {
    FontAwesomeIcon,
    Quote,
    SampleDeferredPlan,
    SelectPlanButton,
    Hero,
    Icon
  },
  data: () => ({
    reasons: [
      {
        title: "25% Deposit",
        icon: "fraction",
        description: "Pay a refundable deposit of only 25% up-front."
      },
      {
        title: "Zero Tuition",
        icon: "money",
        description:
          "You will pay ZERO tuition until you land your first job making $40k or more."
      },
      {
        title: "0% Interest",
        icon: "percent",
        description: "We won't charge you a dime in interest!"
      }
    ]
  })
};
</script>

<style lang="scss">
@import "@/variables";

.deferred-payment {
  .beach-ball {
    //background-color: $fucia;
    //border-radius: 50%;
    //background-image: linear-gradient($primary, $fucia);
    text-align: center;
    width: 100px;
    height: 100px;
    svg {
      margin: auto auto;
    }
  }
}
</style>
