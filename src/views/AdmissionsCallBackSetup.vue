<template>
  <div class="container">
    <h1 class="mt-4 mb-3">Enrollment</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Enrollment</li>
    </ol>

    <p>Please let us know how to contact you and when. We'll give you a call back as soon as possible.</p>
    <HubspotForm formId="e7360a11-ca18-4b36-a73b-b8ccdce4f3e7" />
  </div>
</template>

<script>
import HubspotForm from "@/components/HubspotForm";

export default {
  components: {
    HubspotForm
  }
};
</script>