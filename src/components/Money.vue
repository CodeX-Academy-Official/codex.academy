<template>
  <span>{{ formattedAmount }}</span>
</template>

<script>
export function dollars(num) {
  if (!num) return;
  return "$" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default {
  props: {
    amount: [Number, String]
  },
  computed: {
    formattedAmount() {
      return dollars(this.amount);
    }
  }
};
</script>

<style></style>
