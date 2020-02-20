<template>
  <div class="container">
    <h1 class="mt-4 mb-3">NEED HELP DECIDING?</h1>

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
        <HubspotForm formId="f903a550-c89f-4cbc-9272-93edb93a75f8" />
      </div>
      <div class="col-2 d-none d-lg-block"></div>
    </div>
  </div>
</template>

<script>
import StockImage from "@/components/StockImage";
import HubspotForm from "@/components/HubspotForm";

export default {
  components: {
    StockImage,
    HubspotForm
  }
};
</script>