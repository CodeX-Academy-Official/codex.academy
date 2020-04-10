<template>
  <div>
    <Hero
      :unsplashIds="['LJ9KY8pIH3E', 'pgSkeh0yl8o', 'OqtafYT5kTw']"
      height="40vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <h2>Community Program</h2>
      <h5>Independent Study, Community Support</h5>
    </Hero>
    <div class="container mt-5">
      <div class="pt-4">
        <p>
          For those who are interested in learning to code, but want to take a
          more self-guided approach, we have the Community Plan. This plan gives
          you full, unrestricted access to our learning pathways and learner
          community. We're not going to lie. Learning to code is HARD. Doing so
          in a vacuum is not impossible, but it's highly improbable. The extra
          help received from our Community Plan could make the difference you
          need to ACTUALLY learn to code and move on to a fruitful career!
        </p>

        <div class="row">
          <div class="col text-center">
            <SelectPlanButton :plan="getCommunityPlan" text="Start Application" />
          </div>
        </div>

        <hr class="mb-5 mt-5" />

        <!-- Project One -->
        <div class="row">
          <div class="col-md-5">
            <img
              class="img-fluid rounded mb-3 mb-md-0 screenshot"
              src="/img/screenshots/figma.png"
              alt="Slack Screenshot"
            />
          </div>
          <div class="col-md-7">
            <h3>Community Content</h3>
            <p>
              Have you noticed yet? The whole world is trying to teach you to
              code! It's amazing how much high quality teaching materials exist
              on the topic of "coding" alone... and tons of those are 100% free
              of charge! CodeX Academy believes the world needs more coders, not
              more coding classes. To that end, throughout the CodeX Academy
              Learning Pathways you'll find references to a plethora of curated
              community-driven learning materials. When combined with our
              carefully designed Learning Pathways, you're set up for success!
            </p>
          </div>
        </div>
        <!-- /.row -->

        <hr class="mb-5 mt-5" />

        <!-- Project One -->
        <div class="row pb-7">
          <div class="col-md-5">
            <img
              class="img-fluid rounded mb-3 mb-md-0 screenshot"
              src="/img/screenshots/pathway.png"
              alt="Badgr Pathways - Level 1"
            />
          </div>
          <div class="col-md-7">
            <h3>Learning Pathways</h3>
            <p>
              If there's SO much community-driven (and even free) learning material
              on the internet for coding, why aren't more people learning? Part of
              it probably because learning to code is hard! It's not for the faint
              of heart. It takes discipline, focus, determination and resilience.
              But how do you know where to start? What happens when you learn a
              certain technology? What's next? How do you know when to stop learning
              about a certain thing (so that you don't lose the information from
              lack of use)? These are challenges CodeX Academy solves by providing
              learners with a prescriptive, step-by-step pathway. Each step builds
              upon the last. Learners are encouraged to learn "just enough" before
              moving on. Taking this "Lean" approach to learning is the best way to
              learn to code and MAKE IT STICK!
            </p>
          </div>
        </div>
        <!-- /.row -->

        <hr class="mb-5 mt-5" />

        <!-- Project One -->
        <div class="row mb-6">
          <div class="col-md-5">
            <img
              class="img-fluid rounded mb-3 mb-md-0 screenshot"
              src="/img/screenshots/badge.png"
              alt="Slack Screenshot"
            />
          </div>
          <div class="col-md-7">
            <h3>Badges</h3>
            <p>
              The amount of information your brain has to absorb in order to
              learn to code is immense. How in the world could all that
              information be organized so that someone can learn efficiently and
              effectively? Great question! CodeX Academy does it with badges! As
              you work through our Learning Pathways, you will focus on
              "bite-sized" slices of each technology and concept, working
              towards mastery of a short list of skills. Once you have mastered
              that badge, you continue on the next. Each badge not only contains
              a list of skills/competencies, but also some suggested ways you
              might learn those skills. Completing a badge feels great! Small
              victories add up to big time success later on!
            </p>
          </div>
        </div>
        <!-- /.row -->

        <hr class="mb-5 mt-5" />

        <!-- Project One -->
        <div class="row">
          <div class="col-md-5">
            <img
              class="img-fluid rounded mb-3 mb-md-0 screenshot"
              src="/img/screenshots/slack.png"
              alt="Slack Screenshot"
            />
          </div>
          <div class="col-md-7">
            <h3>Community Support</h3>
            <p>
              There are three things no one should ever do alone: 1) spelunking,
              2) hiking in the Grand Canyon and 2) learning to code. Learning to
              code might be one of the hardest things you try to do in your
              life. The learning process can be confusing, frustrating and
              discouraging. Depending on your experience with computers and
              technology, some concepts may take longer than expected to master.
              There may be times when you feel like you have been stuck "chasing
              your tail" for hours. We don't want to paint a bleak picture for
              you, but seriously, learning to code is hard! Just like you should
              do when you plan a caving trip, you should take a buddy (or go
              with a group). CodeX Academy has built a community of learners and
              mentors who are interested in walking alongside you while you
              learn. You may still get stuck at times, but at least you will
              have the power of a community around you to get you unstuck and
              moving again.
            </p>
          </div>
        </div>

        <hr class="mb-5 mt-5" />

        <div class="row">
          <div class="col text-center">
            <SelectPlanButton :plan="getCommunityPlan" text="Start Application" />
          </div>
        </div>
        <div class="mb-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SelectPlanButton from "@/components/SelectPlanButton";
import Hero from "@/components/Hero";

export default {
  components: { SelectPlanButton, Hero },
  computed: { ...mapGetters(["getCommunityPlan"]) }
};
</script>
<style lang="scss" scoped>
img.screenshot {
  border: grey solid 1px;
}
</style>
