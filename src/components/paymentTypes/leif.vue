<template>
  <div :class="css">
    <h3>{{ number }}. Pay nothing until you get a job</h3>

    <p>
      Pay nothing until you get a job making
      <Money :amount="paymentType.minimumSalary" />&nbsp;or more! We partner with Leif Financial to make this possible. After you get a great job, you'll pay a low percentage of your salary each month for the first 2 to 4 years.
    </p>
    <p>
      <button @click.prevent="goToLeif" class="btn btn-primary">
        <strong>Apply for ISA</strong>
      </button>
    </p>
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
        email: applicant.email,
        applyingForIsa: true,
        applyingForClimb: false,
        payingByCreditCard: false
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
