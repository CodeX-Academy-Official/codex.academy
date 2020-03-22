<template>
  <div class="container">
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">
      Contact
      <!-- <small>CodeX Academy</small> -->
    </h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Contact</li>
    </ol>

    <!-- Content Row -->
    <div class="row">
      <!-- Map Column -->
      <div class="col-lg-8 mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.115837963044!2d-86.80483454921519!3d35.96859332166829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88647be79adcee43%3A0x7bd99dc54e8c34f6!2s1612%20Westgate%20Cir%20STE%20222%2C%20Brentwood%2C%20TN%2037027!5e0!3m2!1sen!2sus!4v1584842178261!5m2!1sen!2sus"
          width="600"
          height="250"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <!-- Contact Details Column -->
      <div class="col-lg-4 mb-4">
        <h3>Contact Details</h3>
        <p>
          CodeX Academy, LLC
          <br />1612 Westgate Circle, Suite 222 <br />Brentwood, TN 37027
        </p>
        <p>
          <span title="Phone">Phone:</span><br />
          <a href="tel:6156698239">(615) 669-8239</a>
        </p>
        <p>
          <span title="Email">Email:</span><br />
          <a href="mailto:contact@codex.academy">contact@codex.academy</a>
        </p>
        <p>
          <span title="Hours">Hours:</span><br />
          Monday - Friday: 9:00 AM to 5:00 PM
        </p>
      </div>
    </div>
    <!-- /.row -->

    <!-- Contact Form -->
    <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
    <div class="row">
      <div class="col-lg-8 mb-4">
        <h2>Tell Us About It</h2>
        <HubspotForm formId="4b1d0ca0-bb1d-4c63-b093-c091a67de71f" />
      </div>
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</template>

<script>
import HubspotForm from "@/components/HubspotForm";

export default {
  components: {
    HubspotForm
  }
};
</script>
