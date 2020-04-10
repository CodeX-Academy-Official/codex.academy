<template>
  <div class="top-alert" v-if="showAlert">
    <div class="cancel p-2" @click="closeAlert">
      <Icon name="cancel" :size="30" />
    </div>
    <div class="row justify-content-center text">
      <slot />
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon
  },
  data: () => ({
    showAlert: true
  }),
  methods: {
    closeAlert() {
      this.showAlert = false;
    }
  }
};
</script>

<style lang="scss">
@import "@/variables";

.top-alert {
  display: block;
  width: 100%;
  background-color: $fucia;
  color: white;

  .text {
    text-transform: uppercase;
    padding: 10px;
    margin: auto;
    text-align: center;
  }

  .cancel {
    fill: white;
    opacity: 50%;
    cursor: pointer;
    position: absolute;
    right: 0px;
  }
}
</style>
