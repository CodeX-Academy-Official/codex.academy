<template>
  <div :class="css">
    <h3>{{ number }}. Apply for Income Sharing Agreement</h3>

    <p>
      Pay nothing until you get a job making
      <Money :amount="paymentType.minimumSalary" />or more! We partner with Leif Financial to make this possible. To apply for an ISA to cover your tuition.
      please click the button below.
    </p>
    <p>
      <a :href="paymentType.url" class="btn btn-primary">
        <strong>Apply for ISA</strong>
      </a>
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
  components: { Money }
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
