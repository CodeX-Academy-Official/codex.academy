<template>
  <div class="container">
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">How it Works</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">How it Works</li>
    </ol>

    <MethodCardList />

    <!-- Intro Content -->
    <!-- <div class="row">
      <div class="col-lg-6">
        <img
          class="img-fluid rounded mb-4"
          src="http://placehold.it/750x450"
          alt
        />
      </div>
      <div class="col-lg-6">
        <h2>Learning to Code</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          voluptate nihil eum consectetur similique? Consectetur, quod,
          incidunt, harum nisi dolores delectus reprehenderit voluptatem
          perferendis dicta dolorem non blanditiis ex fugiat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
          magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab
          ea pariatur sint quidem corporis eveniet. Odit, temporibus
          reprehenderit dolorum!
        </p>
      </div>
    </div>
    /.row-->

    <!-- Team Members -->
    <h2 class="section-title">A Typical Week at CodeX Academy</h2>

    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="card h-100 text-center">
          <Unsplash
            imageId="s9CC2SKySJM"
            align="right"
            description="Independent Study"
            width="100%"
            imageClass="card-img-top"
            :thumbnail="false"
          />

          <div class="card-body">
            <h4 class="card-title">Independent Study</h4>
            <p>
              <b-badge variant="primary">Every Day</b-badge>
            </p>
            <p class="card-text">
              We provide you with the learning methods, direction, structure and
              curated community content. With our formula and your commitment
              and time, you will learn to code!
            </p>
          </div>
          <div class="card-footer">
            <button
              class="btn btn-secondary"
              @click="$bvModal.show('modal-try-online-course')"
            >
              Try an Online Course
            </button>
          </div>
        </div>
        <div>
          <b-modal id="modal-try-online-course" hide-footer>
            <template v-slot:modal-title>Try an Online Course</template>
            <div class="d-block">
              <p>
                The internet is
                <strong>FULL</strong> of amazing content, determined to teach
                you to code. CodeX Academy doesn't try to reinvent the wheel by
                creating more and more competing content. Instead, we curate the
                best content and guide you through it like trail markers on a
                hike through the woods.
              </p>
              <h4>Want to try an online course?</h4>
              <p>Here are a few that we really like:</p>
              <ul>
                <li>
                  <a
                    href="https://www.udemy.com/course/devtools-2017-the-basics-of-chrome-developer-tools/"
                    target="_blank"
                    >Chrome Devtools</a
                  >
                  from Udemy
                </li>
                <li>
                  <a
                    href="https://www.udemy.com/course/devtools-2017-the-basics-of-chrome-developer-tools/"
                    target="_blank"
                    >Deploying Applications with Heroku</a
                  >
                  from Udacity
                </li>
                <li>
                  <a
                    href="https://www.theodinproject.com/courses/web-development-101"
                    target="_blank"
                    >Web Development</a
                  >
                  from The Odin Project
                </li>
              </ul>
            </div>
            <b-button
              class="mt-3"
              block
              @click="$bvModal.hide('modal-try-online-course')"
              >Close Me</b-button
            >
          </b-modal>
        </div>
      </div>

      <div class="col-lg-4 mb-4">
        <div class="card h-100 text-center">
          <Unsplash
            imageId="JyJwO0K5fWM"
            align="right"
            description="Coffee-driven development"
            width="100%"
            imageClass="card-img-top"
            :thumbnail="false"
          />

          <div class="card-body">
            <h4 class="card-title">One-on-one Mentoring</h4>
            <p>
              <b-badge variant="primary">Several times/week</b-badge>
            </p>
            <p class="card-text">
              You will meet with your mentor frequently in an online video-call.
              Face time with your mentor helps solidify and strengthen what you
              have been learning independently.
            </p>
          </div>
          <div class="card-footer">
            <button
              class="btn btn-secondary"
              @click="$bvModal.show('modal-view-mentoring-session')"
            >
              Watch a Mentoring Session
            </button>
          </div>
        </div>
        <div>
          <b-modal id="modal-view-mentoring-session" size="lg" hide-footer>
            <template v-slot:modal-title
              >Face-to-Face Mentoring Session</template
            >
            <div class="d-block">
              <youtube video-id="DjhAweE2sR0" fitParent />
            </div>
            <b-button
              class="mt-3"
              block
              @click="$bvModal.hide('modal-view-mentoring-session')"
              >Close Me</b-button
            >
          </b-modal>
        </div>
      </div>

      <div class="col-lg-4 mb-4">
        <div class="card h-100 text-center">
          <Unsplash
            imageId="etcp7sNcFiU"
            align="right"
            description="Coffee-driven development"
            width="100%"
            imageClass="card-img-top"
            :thumbnail="false"
          />

          <div class="card-body">
            <h4 class="card-title">Micro-Certifications</h4>
            <p>
              <b-badge variant="primary">Frequently</b-badge>
            </p>

            <p class="card-text">
              Each learning pathway is made up of a number of milestones, each
              one building on the other. After passing an evaluation at each
              milestone, you will receive a micro-certification (a badge) that
              shows the world what you have proven you can do!
            </p>
          </div>
          <div class="card-footer">
            <button
              class="btn btn-secondary"
              @click.prevent="$bvModal.show('modal-earn-a-badge')"
            >
              Earn Your First Badge
            </button>
          </div>
        </div>
        <div>
          <b-modal id="modal-earn-a-badge" hide-footer>
            <template v-slot:modal-title
              >Chrome Dev Tools Learner 1 Badge</template
            >
            <div class="d-block">
              <div class="float-right w-25">
                <img
                  class="img-fluid"
                  src="https://media.badgr.com/uploads/badges/cd3547ca-2fb7-406e-8439-17cee5091be3.svg"
                />
              </div>
              <p>
                We thought you might like to earn a badge to see how it works.
                You can do it in a few steps:
              </p>
              <ol>
                <li>
                  Check the
                  <a
                    href="https://badgr.com/public/badges/CwCMwmY-RIOhHS-KOb12oA"
                    target="_blank"
                    >badge criteria</a
                  >
                  for the skills you need to master.
                </li>
                <li>
                  If you don't have the skills yet, take one or more of the
                  courses.
                </li>
                <li>
                  When you're ready,
                  <a href="http://evals.codex.academy/" target="_blank"
                    >request an evaluation</a
                  >.
                </li>
                <li>
                  <a
                    href="https://codex-badge-claim.herokuapp.com/badgeid/CwCMwmY-RIOhHS-KOb12oA"
                    target="_blank"
                    >Claim</a
                  >
                  your first badge!
                </li>
              </ol>
            </div>
            <b-button
              class="mt-3"
              block
              @click="$bvModal.hide('modal-earn-a-badge')"
              >Close Me</b-button
            >
          </b-modal>
        </div>
      </div>
    </div>
    <!-- /.row -->

    <!-- Our Customers -->
    <a name="tech" />
    <h2 class="section-title">Our Technologies and Tools</h2>
    <Technologies />
  </div>
  <!-- /.container -->
</template>

<script>
import Technologies from "@/components/Technologies";
import Unsplash from "@/components/Unsplash";
import MethodCardList from "@/components/MethodCardList";

export default {
  components: {
    Technologies,
    Unsplash,
    MethodCardList
  }
};
</script>

<style lang="scss">
h2.section-title {
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 3rem;
}
.badge-primary {
  color: white;
}
</style>
