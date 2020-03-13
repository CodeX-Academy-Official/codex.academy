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
        <!-- Embedded Google Map -->
      </div>
      <!-- Contact Details Column -->
      <div class="col-lg-4 mb-4">
        <h3>Contact Details</h3>
        <p>
          2930 Pipkin Hills Drive
          <br />Spring Hill, TN 37174
          <br />
        </p>
        <!-- <p><abbr title="Phone">P</abbr>: (123) 456-7890</p> -->
        <p>
          <abbr title="Email">E</abbr>:
          <a href="mailto:contact@codex.academy">contact@codex.academy</a>
        </p>
        <p><abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM</p>
      </div>
    </div>
    <!-- /.row -->

    <!-- Contact Form -->
    <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
    <div class="row">
      <div class="col-lg-8 mb-4">
        <h3>Send us a Message</h3>
        <form name="sentMessage" id="contactForm" novalidate>
          <div class="control-group form-group">
            <div class="controls">
              <label>Full Name:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                required
                data-validation-required-message="Please enter your name."
              />
              <p class="help-block"></p>
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label>Phone Number:</label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                required
                data-validation-required-message="Please enter your phone number."
              />
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label>Email Address:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                required
                data-validation-required-message="Please enter your email address."
              />
            </div>
          </div>
          <div class="control-group form-group">
            <div class="controls">
              <label>Message:</label>
              <textarea
                rows="10"
                cols="100"
                class="form-control"
                id="message"
                required
                data-validation-required-message="Please enter your message"
                maxlength="999"
                style="resize:none"
              ></textarea>
            </div>
          </div>
          <div id="success"></div>
          <!-- For success/fail messages -->
          <button type="submit" class="btn btn-primary" id="sendMessageButton">
            Send Message
          </button>
        </form>
      </div>
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</template>
