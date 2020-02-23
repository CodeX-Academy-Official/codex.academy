<template>
  <div class="container">
    <h1 class="mt-4 mb-3">NEED HELP DECIDING?</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Call-Back</li>
    </ol>
    <Unsplash
      imageId="vJP-wZ6hGBg"
      align="right"
      description="Coffee-driven development"
      width="300"
      height="500"
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
        <HubspotForm formId="f903a550-c89f-4cbc-9272-93edb93a75f8" />
      </div>
      <div class="col-2 d-none d-lg-block"></div>
    </div>
  </div>
</template>

<script>
import Unsplash from "@/components/Unsplash";
import HubspotForm from "@/components/HubspotForm";

export default {
  components: {
    Unsplash,
    HubspotForm
  }
};
</script>
