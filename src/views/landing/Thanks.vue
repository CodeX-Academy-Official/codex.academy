<template>
  <div class="thanks-box">
    <h3>Thanks</h3>
    <p>
      You are on your way to starting a new career. We have received your
      application! You should check your email for next steps.
    </p>
    <p>
      If you'd like to continue your application by selecting a program, be
      our guest!
    </p>
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