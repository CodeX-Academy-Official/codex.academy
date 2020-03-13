<template>
  <!-- Page Content -->
  <div class="container">
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">Frequently Asked Questions</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">FAQs</li>
    </ol>

    <p>
      If you've got questions, we want to answer them! We've tried to guess what
      you might be wondering and answer those questions below. If there are
      still any lingering doubts, we would still like the chance to get you the
      information you need. For that, a conversation is in order.
      Click here to set up a
      <router-link to="/call-back">call-back</router-link>.
    </p>

    <div class="mb-4" id="accordion" role="tablist" aria-multiselectable="true">
      <QAndA id="faq1" question="Full-time student expectations?">
        <p>
          Full-time students can expect to earn the “Full-Stack Developer”
          certification after just 6 months of mentor-led study! Part-time
          students are welcome too, but the timing might stretch out a bit.
        </p>
        <img src="img/learner-flow.png" class="img-fluid" />
      </QAndA>

      <QAndA id="faq2" question="CodeX Academy technologies?">
        <p>
          A “Full-Stack Developer” is someone who can build world-changing apps
          and websites from top to bottom, from what you can see and click to
          all the unseen inner-workings. CodeX Academy currently offers learning
          pathways for popular web-based technologies including ReactJS, NodeJS
          and both PostgreSQL and Mongo databases. Along the way, you will also
          be exposed to practices and principles that will make you a more
          effective player on an Agile development team.
        </p>
        <p
          class="mb-4"
        >If you'd like to see our tech stack in more detail or learn more about the technologies we like, click any logo below:</p>
        <Technologies />
      </QAndA>
    </div>
  </div>
  <!-- /.container -->
</template>

<script>
import QAndA from "@/components/QAndA";
import Technologies from "@/components/Technologies";

export default {
  components: {
    QAndA,
    Technologies
  }
};
</script>

<style lang="scss" scoped></style>
