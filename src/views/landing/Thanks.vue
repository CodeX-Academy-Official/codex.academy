<template>
  <div class="thanks-box">
    <h3>Thanks</h3>
    <p>Now it's time to choose your program. Click the button below to find the program that's right for you!</p>
    <p>
      <SelectPlanButton
        class="mx-auto"
        text="Continue Application >>"
        buttonClass="btn btn-primary nav-link"
      />
    </p>
    <p class="text-center">
      <button class="btn btn-secondary" @click.prevent="startOver">Start Over</button>
    </p>
  </div>
</template>

<script>
import SelectPlanButton from "@/components/SelectPlanButton";

export default {
  methods: {
    startOver() {
      this.$emit("startOver");
    }
  },
  components: { SelectPlanButton }
};
</script>

<style>
</style>