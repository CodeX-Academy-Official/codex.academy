<template>
  <div class="card h-100">
    <div class="card-header">
      <h5 class="card-title">Income Share Agreement</h5>
    </div>
    <div class="card-body">
      <span class="around-money">You pay</span>
      <h1 class="paymentTypeAmount">$0</h1>
      <span class="around-money">until you get a job</span>

      <p
        class="mt-3 card-text text-muted"
      >Pay tuition back in small monthly payments after you get a great job.</p>
    </div>
    <div class="card-footer">
      <button @click.prevent="goToLeif" class="btn btn-primary btn-block">
        <strong>Apply</strong>
      </button>
    </div>
  </div>
</template>

<script>
import Money from "@/components/Money";

export default {
  props: {
    minimumSalary: Number,
    paymentType: Object,
    number: Number,
    css: String,
    programTotal: Number,
    programName: String
  },
  components: { Money },
  methods: {
    async goToLeif() {
      const applicant = this.$store.getters.getApplicant;

      const payload = {
        payment_type: "isa",
        payment_vendor: "leif",
        email: applicant.email
      };
      await this.$store.dispatch("setPaymentInfo", payload);

      const url = this.paymentType.url;
      window.open(url, "_self");
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
