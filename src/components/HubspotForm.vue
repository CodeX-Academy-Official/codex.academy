<template>
  <div class="fixed-height" v-once :id="formId"></div>
</template>

<script>
export default {
  props: {
    formId: String,
    portalId: { type: String, default: "7092117" }
  },

  created() {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: this.portalId,
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

.fixed-height {
  height: 750px;
}
</style>
