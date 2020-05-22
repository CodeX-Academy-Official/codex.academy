<template>
  <div class="financing pb-5">
    <Hero unsplashId="XJXWbfSo2f0" height="40vh">
      <h2>Financial Aid</h2>
      <h5>We've got you covered</h5>
    </Hero>
    <div class="container mt-5">
      <h1 class="section-title">Tuition Financing from CodeX Academy</h1>

      <p
        class="mb-5 text-center"
      >CodeX Academy offers the following loan terms to help those who need smaller payments and to spread their tuition out over time. This loan is offered at 0% interest for the life of the loan. If you choose this option, we ask that you pay the first payment of $500 up front. Afterwards, an admissions counselor will reach out with more specific loan terms.</p>

      <div class="row mx-auto">
        <div class="col-12 col-md-4" v-for="r in reasons" :key="r.title">
          <div class="w-75 mx-auto text-center mb-5">
            <div class="beach-ball mx-auto mb-3">
              <font-awesome-icon :icon="['fas', r.icon]"></font-awesome-icon>
            </div>
            <h3>{{ r.title }}</h3>
            <p>{{ r.description }}</p>
          </div>
        </div>
      </div>

      <div class="text-center">
        <SelectPlanButton text="Apply Now" buttonClass="btn-lg" />
      </div>

      <!-- <div class="mt-5">
        <Quote
          text="The loan process with Climb Credit has simply set the bar for loan companies.
Climb takes the ‘whole person’ and ‘whole profile’ into account."
          author="Tonia, IL"
        />
      </div>-->

      <div class="mt-5 text-center">
        <h3>Sample Loan</h3>
        <SampleLoan :sampleData="sampleData" />
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Quote from "@/components/Quote";
import SampleLoan from "@/components/SampleLoan";
import SelectPlanButton from "@/components/SelectPlanButton";
import Hero from "@/components/Hero";
import Money from "@/components/Money";

export default {
  components: {
    FontAwesomeIcon,
    Quote,
    SampleLoan,
    SelectPlanButton,
    Hero,
    Money
  },
  data: () => ({
    reasons: [
      {
        title: "Safe and Fast",
        icon: "tv",
        description:
          "Online Application. Pre-approval in minutes. Applying does not affect credit score."
      },
      {
        title: "0% Interest",
        icon: "percent",
        description: "Pay no interest for the life of the loan."
      },
      {
        title: "Easy Payments",
        icon: "dollar-sign",
        description: "Low monthly payments as you pay off your loan."
      }
    ],
    sampleData: [
      {
        title: "Loan Amount",
        content: "$9,000",
        footnote: "1",
        footnoteText:
          "Finance up to tuition. The minimum loan amount is $3,000 or max loan if below $3,000."
      },
      {
        title: "Term (months)",
        content: "18",
        footnote: "2",
        footnoteText:
          "Sample 18-month term includes 18 months of principal payments. Terms vary by program."
      },
      {
        title: "Interest Rate",
        content: "0%",
        footnote: "3",
        footnoteText: "Interest rate is 0%, really. No strings attached."
      },
      {
        title: "Monthly Payment",
        content: "$500",
        footnote: ""
      }
    ]
  })
};
</script>

<style lang="scss">
@import "@/variables";

.financing {
  .beach-ball {
    background-color: $fucia;
    border-radius: 50%;
    background-image: linear-gradient($primary, $fucia);
    text-align: center;
    width: 100px;

    color: white;

    svg {
      font-size: 3em;
      height: 100px;
    }
  }
}
</style>
