<template>
  <div class="financing pb-5">
    <Hero unsplashId="XJXWbfSo2f0" height="40vh">
      <h2>Financing Options</h2>
      <h5>To Fund Your Education</h5>
    </Hero>
    <div class="container mt-5">
      <h1 class="section-title">Deferred Payment </h1>
      <p class="mb-5 text-center">
        CodeX Academy has partnered with Meritize to provide our students with financing options to fund your education. With a
Meritize Loan, you can get credit for your merit and potentially improve your loan options by sharing your
academic history, military background, or work experience. If approved, full deferment during school is available.
      </p>
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

      <div class="mt-5 row">
        <div class="col">
            <h3>Meritize Loans Difference</h3>
            <ul>
            <li>Check your loan options in minutes without affecting your credit score</li>
            <li>Fixed and variable interest rates</li>
            <li>Full deferment available for certain products</li>
            <li>Free Career Services</li>
            <li>0.25% Interest rate discount with autopay</li>
            <li>3-Month grace period</li>
            </ul>
        </div>
        <div class="col"><img style="width:100%" src="https://meritize.com/wp-content/logos/Meritize-logo.png"/></div>
      </div>
      <div class="mt-3 text-muted small text-left">
      Terms and Conditions apply. Meritize branded loan products are educational loans issued by Blue Ridge Bank (“Bank”), National Association, Member FDIC. The Bank and Meritize reserve the right to modify or discontinue products and benefits at any time without notice. To qualify, a borrower must be a U.S. citizen, permanent resident, or hold a valid work authorization document, and meet the Bank’s underwriting requirements. If approved for a loan, the actual loan amount, term, payment, and APR amount of the loan that a customer qualifies for may vary based on credit determination, state law, and other factors.
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

export default {
  components: { FontAwesomeIcon, Quote, SampleLoan, SelectPlanButton, Hero },
  data: () => ({
    reasons: [
      {
        title: "Academy History",
        icon: "tv",
        description:
          "Share what you’ve learned in school by providing your transcripts, or HSE scores."
      },
      {
        title: "Military Background",
        icon: "percent",
        description:
          "Upload your military documents, such as your DD214, if you are a veteran."
      },
      {
        title: "Work Experience",
        icon: "users",
        description:
          "Provide details of your work history and professional references."
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
