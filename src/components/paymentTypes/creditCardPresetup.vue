<template>
  <div class="card h-100">
    <div class="card-header">
      <h5 class="card-title">Monthly Tuition</h5>
    </div>
    <div class="card-body">
      <span class="around-money">You pay</span>
      <h1 class="paymentTypeAmount">
        <Money :amount="paymentType.monthlyCharge" />
      </h1>
      <span class="around-money">per month</span>
      <p class="mt-3 card-text text-muted">Monthly tuition payments on your credit or debit card.</p>
    </div>
    <div class="card-footer">
      <button
        class="btn btn-primary btn-block"
        @click="$bvModal.show('modal-credit-card-pre-setup')"
        :disabled="navigating"
      >
        <strong>Subscribe</strong>
      </button>
    </div>

    <b-modal id="modal-credit-card-pre-setup" hide-footer>
      <template v-slot:modal-title>Payment Scheduling</template>
      <form @submit.prevent="schedulePayment">
        <div class="d-block">
          <div class="form-row">
            <div class="form-group col">
              <label for="nameOnCard">Name on Card:</label>
              <input type="text" class="form-control" v-model.trim="nameOnCard" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <label for="last4Digits">Last 4 Digits on Card:</label>
              <input
                type="text"
                class="form-control"
                v-model.trim="last4Digits"
                required
                maxlength="4"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="paymentDayOfTheMonth">Payment Day of the Month:</label>
              <select class="form-control" id="paymentDayOfTheMonth" v-model="paymentDayOfTheMonth">
                <option :value="1">1st</option>
                <option :value="15">15th</option>
              </select>
            </div>
          </div>
        </div>
        <button class="btn btn-primary btn-block" :disabled="navigating">
          <strong>Pre-Schedule Payments</strong>
        </button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import Money from "@/components/Money";

export default {
  props: {
    paymentType: Object,
    number: Number,
    css: String,
    programTotal: Number,
    programName: String
  },
  components: { Money },
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
        payment_type: "cc",
        payment_vendor: "unknown",
        email: applicant.email,
        nameOnCard: this.nameOnCard,
        paymentDayOfTheMonth: this.paymentDayOfTheMonth,
        last4Digits: this.last4Digits,
        paymentType: "stripe"
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
