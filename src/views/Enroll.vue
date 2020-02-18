<template>
  <div class="container">
    <h1 class="mt-4 mb-3">
      Enrollment Form
    </h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">About</li>
    </ol>
    <p>
      Please fill in the form below to start your enrollment. We will send you
      an email confirmation so that you can select your learning plan and set up
      your monthly payment. If you’re not sure about enrolling now, we suggest
      you set up a call-back so you can learn more!
    </p>
    <div class="row">
      <div class="col-2 d-none d-lg-block"></div>
      <div class="col">
        <div v-once id="regForm"></div>
      </div>
      <div class="col-2 d-none d-lg-block"></div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "7092117",
          formId: "fe2c39ea-3086-4b7c-ba4b-6bf288544526",
          target: "#regForm"
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
