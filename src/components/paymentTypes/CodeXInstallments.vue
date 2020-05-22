<template>
  <div class="card h-100">
    <div class="card-header">
      <h5 class="card-title">Student Loan</h5>
    </div>
    <div class="card-body">
      <span class="around-money">You pay</span>
      <h1 class="paymentTypeAmount">
        <Money :amount="paymentType.monthlyCharge" />
      </h1>
      <span class="around-money">per month</span>
      <p class="mt-3 card-text text-muted">
        Monthly installments on your tuition amount with your credit or debit
        card.
      </p>
    </div>
    <div class="card-footer">
      <button
        class="btn btn-primary btn-block"
        @click="$bvModal.show('modal-installments-setup')"
        :disabled="navigating"
      >
        <strong>Apply for Financing</strong>
      </button>
    </div>

    <b-modal id="modal-installments-setup" size="lg" hide-footer>
      <template v-slot:modal-title>Card You Will Use</template>
      <div class="d-block">
        <p>CodeX Academy offers the following loan terms to help those who need smaller payments and to spread their tuition out over time. This loan is offered at 0% interest for the life of the loan. If you choose this option, we ask that you pay the first payment of $500 up front. Afterwards, an admissions counselor will reach out with more specific loan terms.</p>
        <table class="table text-center">
          <thead>
            <tr>
              <th>Program</th>
              <th>Program Duration</th>
              <th>Loan Term</th>
              <th>Monthly Payments</th>
              <th>Interest Rate</th>
              <th>Loan Total</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{{ programName }}</td>
              <td>{{ programTotal / 1500 }} Months</td>
              <td>{{ programTotal / 500 }} Months</td>
              <td>
                <Money :amount="500" />
              </td>
              <td>0%</td>
              <td>
                <Money :amount="programTotal" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <StripeCheckoutButton
        :isSubscription="true"
        :paymentType="paymentType"
        :applicant="applicant"
      >
        <strong>Pay First Payment</strong>
      </StripeCheckoutButton>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import Money from "@/components/Money";
import StripeCheckoutButton from "@/components/StripeCheckoutButton";

export default {
  props: {
    paymentType: Object,
    applicant: Object,
    number: Number,
    css: String,
    programTotal: Number,
    programName: String
  },
  components: { Money, StripeCheckoutButton },
  data: () => ({
    nameOnCard: "",
    last4Digits: "",
    paymentDayOfTheMonth: 1,
    navigating: false
  }),
  methods: {
    async schedulePayment() {
      this.navigating = true;
      const applicant = this.$store.getters.getApplicant;

      const payload = {
        email: applicant.email,
        nameOnCard: this.nameOnCard,
        last4Digits: this.last4Digits,
        paymentType: "codex-installments"
      };
      this.$store.dispatch("setPaymentInfo", payload);
      this.$emit("paymentScheduled", payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.program-name {
  background-color: lightpink;
  padding: 10px;
  display: inline;
  text-align: center;
}
</style>
