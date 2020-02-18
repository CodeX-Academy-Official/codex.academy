<template>
  <div class="container method-list">
    <Method
      title="Mentor-Driven"
      description="CodeX Academy believes mentorship is the key to achieving true mastery in programming. As you learn to code, you will get stuck several times (maybe a pesky semi-colon missing). As a CodeX Academy Learner, you have access to a personal mentor who can answer you via chat or even jump on a video call to work it out. Live 1-on-1 mentorship accelerates learning and makes it stick!"
      :icon="mentor"
      iconSide="left"
    />
    <hr />

    <Method
      title="Self-Paced"
      description="Some learn certain concepts quickly, while other concepts may take more time. CodeX Academy gives you the freedom to build mastery at your own pace. Some have a natural gift to understand technology and move quickly. Others require more time. Both groups can thrive at CodeX Academy."
      :icon="time"
      iconSide="left"
    />
    <hr />

    <Method
      title="Remote"
      description="CodeX Academy is 100% remote. That means you can learn to code from just about anywhere. All you need is a computer, internet, power and a comfortable spot."
      :icon="remote"
      iconSide="left"
    />
    <hr />
    <Method
      title="Mastery-Based"
      description="Traditional education programs are set to a rigid schedule while students try their best to stay caught up. CodeX Academy offers a program that is based on your own mastery of the concepts and skills. We don’t move on to the next thing until we are sure you’ve really got it!"
      :icon="mastery"
      iconSide="left"
    />
    <hr />

    <Method
      title="Internship"
      description="Certification from a coding school is respectable, but experience beats
        paper every time! CodeX Academy graduates are given the opportunity to
        participate in an impactful internship where they can prove out newly
        learned skills, forge lasting relationships and jump start the
        “experience” section of their resumes."
      :icon="briefcase"
      iconSide="left"
    />
  </div>
</template>

<script>
import {
  faBriefcase,
  faPeopleCarry,
  faClock,
  faTv,
  faTasks
} from "@fortawesome/free-solid-svg-icons";
import Method from "@/components/method";

export default {
  components: {
    Method
  },
  computed: {
    briefcase() {
      return faBriefcase;
    },
    mentor() {
      return faPeopleCarry;
    },
    time() {
      return faClock;
    },
    remote() {
      return faTv;
    },
    mastery() {
      return faTasks;
    }
  }
};
</script>

<style lang="scss">
@import "@/variables";

.method-list {
  svg {
    color: $primary;
  }
  .container {
    width: 10rem;
  }
}
</style>
