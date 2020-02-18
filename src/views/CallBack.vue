<template>
  <div class="container">
    <h1 class="mt-4 mb-3">
      NEED HELP DECIDING?
    </h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Call-Back</li>
    </ol>
    <StockImage
      filename="fernando-hernandez-efzwcMRM6j4-unsplash.jpg"
      align="right"
      description="Coffee-driven development"
      width="35rem"
      class="d-none d-xl-block"
    />
    <p>
      Request a call-back and one of our admissions counselors would be glad to
      walk you through our plans, answer any questions you have, and help you
      pick the plan that’s best for your needs.
    </p>
    <div class="row">
      <div class="col-2 d-none d-lg-block"></div>
      <div class="col">
        <div v-once id="call-back-form"></div>
      </div>
      <div class="col-2 d-none d-lg-block"></div>
    </div>
  </div>
</template>

<script>
import StockImage from "@/components/StockImage";

export default {
  components: {
    StockImage
  },
  created() {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "7092117",
          formId: "f903a550-c89f-4cbc-9272-93edb93a75f8",
          target: "#call-back-form"
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
