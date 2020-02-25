<template>
  <div v-once :id="formId"></div>
</template>

<script>
export default {
  props: {
    formId: String
  },

  created() {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "7092117",
          formId: this.formId,
          target: `#${this.formId}`
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/variables";

.hs-button {
  background-color: $primary;
}
</style>
