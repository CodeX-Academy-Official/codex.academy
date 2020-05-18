<template>
  <div class>
    <div class="text-center">
      <div class="row bg-lilac border shadow p-3 justify-content-center">
        <div class="col-6 col-lg-2 text-center">
          <strong class="table-title">Program</strong>
          <p>{{getActivePlan.name}}</p>
        </div>

        <div class="col-6 col-lg-2 text-center">
          <strong class="table-title">Tuition</strong>
          <p>
            <Money :amount="getActivePlan.price" />
          </p>
        </div>

        <div class="col-6 col-lg-2 text-center">
          <strong class="table-title">Study Hours</strong>
          <p>{{getActivePlan.studyHours}} Hours/Week</p>
        </div>

        <div class="col-6 col-lg-2 text-center" v-if="getActivePlan.months>1">
          <strong class="table-title">Duration</strong>
          <p>{{getActivePlan.months}} Months</p>
        </div>

        <div class="col-6 col-lg-2 text-center">
          <strong class="table-title">Start Date</strong>
          <p>{{getActivePlan.startDate}}</p>
        </div>

        <div class="col-6 col-lg-2 text-center">
          <strong class="table-title">&nbsp;</strong>
          <router-link to="/enroll" class="btn btn-secondary">Change</router-link>
        </div>
      </div>

      <h3 class="mt-4">Arrange Payment Information</h3>

      <h5 v-if="paymentTypes.length > 1">Please Choose One</h5>
      <div class="row justify-content-center">
        <div
          class="payment-option col-12 col-sm-6 col-lg-4"
          :class="{'col-lg-8': paymentTypes.length < 2 }"
          v-for="(paymentType, index) in paymentTypes"
          :key="paymentType.type"
        >
          <Climb
            v-if="paymentType.type === 'climb'"
            :paymentType="paymentType"
            :number="index + 1"
            :programName="paymentType.programName"
            :programTotal="getActivePlan.total"
            css="paymentType ml-4"
          />
          <Leif
            v-if="paymentType.type === 'leif'"
            :paymentType="paymentType"
            :number="index + 1"
            :programName="paymentType.programName"
            :programTotal="getActivePlan.total"
            css="paymentType ml-4"
          />
          <CreditCard
            v-if="paymentType.type === 'creditCard'"
            :paymentType="paymentType"
            :number="index + 1"
            css="paymentType ml-4"
          />
          <CreditCardPreSetup
            v-if="paymentType.type === 'creditCardPre'"
            :paymentType="paymentType"
            :number="index + 1"
            css="paymentType ml-4"
            @paymentScheduled="next"
          />
          <CallBack
            v-if="paymentType.type === 'callBack'"
            :number="index + 1"
            css="paymentType ml-4"
          />
        </div>
      </div>
      <!-- <div v-if="selectedPlan.paymentTypes.financing">
          <hr class="mt-5 mb-5" />
          <h1>Or</h1>
          <h3>Financing</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>-->

      <!-- <div v-if="selectedPlan.paymentTypes.isa">
          <hr class="mt-5 mb-5" />
          <h1>Or</h1>
          <h3>Income Sharing Agreement</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>-->

      <!-- <div v-if="selectedPlan.paymentTypes.callback">
          <hr class="mt-5 mb-5" />
          <h1>Or</h1>
          <h3>Continue With Admissions</h3>
          <p>In order to continue your enrollment, we need to speak with you. Please fill out the form below to set up a call with an Admissions Counselor to go over your options.</p>
          <HubspotForm formId="e7360a11-ca18-4b36-a73b-b8ccdce4f3e7" />
      </div>-->
    </div>
  </div>
</template>

<script>
import PlanCard from "@/components/PlanCard";
import HubspotForm from "@/components/HubspotForm";
import CreditCard from "@/components/paymentTypes/creditCard";
import CreditCardPreSetup from "@/components/paymentTypes/creditCardPresetup";
import Leif from "@/components/paymentTypes/leif";
import CallBack from "@/components/paymentTypes/callback";
import Climb from "@/components/paymentTypes/climb";
import Money from "@/components/Money";

import { mapGetters } from "vuex";

export default {
  components: {
    PlanCard,
    HubspotForm,
    CreditCard,
    CreditCardPreSetup,
    CallBack,
    Climb,
    Leif,
    Money
  },
  computed: {
    ...mapGetters(["getActivePlan", "getApplicant", "getPaymentTypes"]),
    paymentTypes() {
      const paymentTypes = this.getPaymentTypes;
      const program = this.getActivePlan;
      const applicant = this.getApplicant;
      return paymentTypes.filter(x => x.worksWith(program, applicant));
    }
  },
  created() {
    const applicant = this.getApplicant;
    if (!applicant) {
      this.$router.push("applicant");
    }
    //this.$emit("changeStage", 3);
  },
  methods: {
    next() {
      this.$emit("completed", 4);
    }
  }
};
</script>

<style lang="scss">
.payment-option {
  margin-top: 1.5rem;
  h3 {
    font-size: 1.1rem;
  }
  h1.paymentTypeAmount {
    font-size: 2.1em;
    margin: 0px 0px;
  }
  .card-header {
    height: 100px;
  }
  .around-money {
    font-size: 0.8em;
  }
}
.table-title {
  height: 55px;
  display: block;
}
</style>
