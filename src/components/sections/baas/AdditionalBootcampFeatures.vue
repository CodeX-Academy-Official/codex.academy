<template>
  <div class="row">
    <div class="mt-5 col-4 text-center" v-for="f in services" :key="f.name">
      <Icon :name="f.icon" color="black" :size="50" />
      <p class="mt-4 muted">{{ f.name }}</p>
    </div>
  </div>
</template>

<script>
import Money from "@/components/Money";
import Icon from "@/components/Icon";

export default {
  components: { Icon, Money },
  props: {
    services: Array,
  },
};
</script>

<style></style>
