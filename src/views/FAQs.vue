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
      information you need. For that, a conversation is in order. Click here to
      set up a
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

      <QAndA
        id="faq2"
        question="What technologies will I learn at CodeX Academy?"
      >
        <p>
          A “Full-Stack Developer” is someone who can build world-changing apps
          and websites from top to bottom, from what you can see to all the
          unseen inner-workings. CodeX Academy currently offers learning
          pathways for popular web-based technologies including ReactJS, NodeJS
          and both PostgreSQL and Mongo databases. Along the way, you will also
          be exposed to practices and principles that will make you a more
          effective player on an Agile development team.
        </p>
        <p class="mb-4">
          If you'd like to see our tech stack in more detail or learn more about
          the technologies we like, click any logo below:
        </p>
        <Technologies />
      </QAndA>

      <QAndA id="faq3" question="Can I get financing/financial aid?">
        <p>
          CodeX Academy partners with Climb Credit to offer special financing
          for any learning plan for a minimum of 3 months. For more information,
          see
          <a href="https://climbcredit.com/students" target="_blank"
            >Climb Credit</a
          >.
        </p>
      </QAndA>

      <QAndA id="faq4" question="Can I pause my enrollment?">
        <p>
          Life happens! Some learners may face some hardship that impacts their
          ability to stay committed to independent study and meeting with
          mentors. We get it! If you need to pause your enrollment at any time,
          just send an email to
          <a href="mailto:admissions@codex.academy">Admissions</a> any time and
          request it. We will make sure to pause your monthly payments and you
          can resume at any time.
        </p>
        <p>
          Learners using financial aid may still be responsible for making
          monthly payments, but it may be possible to "make-up" any lost time
          when you resume your enrollment later on. To check eligibility or if
          you have any questions, please email.
          <a href="mailto:admissions@codex.academy">Admissions</a>.
        </p>
      </QAndA>

      <QAndA id="faq5" question="When do I graduate?">
        <p>
          CodeX Academy does things a bit differently. We have ten "levels",
          each representing a usable skill set. Everyone starts at level 1, but
          not everyone "graduates" at the same level. For example, if you are
          content with the front-end skills needed to create marketing websites
          and simple user interactions, you might go for level 3 and stop.
        </p>
        <p>
          Others want to work as a full-stack developer and take charge of all
          the systems involved in web applications. Those should target at least
          level 6. After level 6 comes more levels that guide you through other
          valuable skills.
        </p>
        <p>
          So, as you can see, you may "graduate" at any level you wish,
          depending on your personal goals.
        </p>
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
