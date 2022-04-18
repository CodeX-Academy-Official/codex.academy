<template>
  <div class="container py-2">
    <TimelineItem
      position="first"
      side="right"
      title="Orientation"
      subtitle="A Few Hours"
      extra="What should I expect after I enroll in CodeX Academy?"
    >
      <p>
        Starting with the right information will help ensure your long-term
        success. As a new CodeX Academy learner, just minutes after signing up,
        you will be able to:
      </p>
      <ul>
        <li>Learn how to access learning pathways and content</li>
        <li>Get set up with the right tools</li>
        <li>Get matched with the ideal mentor</li>
      </ul>
    </TimelineItem>

    <TimelineItem
      side="left"
      title="Mentor-Led Daily Progress"
      subtitle="12 to 24 Weeks"
      extra="What is it like to learn coding with CodeX Academy? What's a typical day like?"
    >
      <p>
        Learning to code takes daily commitment. CodeX Academy gives you the
        tools and support to stay engaged.
      </p>
      <ul>
        <li>
          Meet with a mentor to go over battle plan, compare notes and clear
          up any blockers you have.
        </li>
        <li>Study course material independently</li>
        <li>Connect with your fellow learners in the community chat</li>
        <li>
          Master the "just-in-time" skills needed to reach the next
          micro-certification
        </li>
      </ul>
    </TimelineItem>

    <TimelineItem
      side="right"
      title="Certification"
      subtitle="A Few Hours"
      extra="What will I have to show from my experience with CodeX Academy?"
    >
      <p>
        Certifications provide you with milestones that are within reach, but
        also prove to the rest of the world your achievements.
      </p>
      <p>CodeX Academy has three major Certifications:</p>
      <ul>
        <li>Front-End Developer</li>
        <li>Full-Stack Developer</li>
        <li>Full-Stack Agile Engineer</li>
      </ul>
      <p>
        As you advance through the learning pathways, you will be given many
        opportunities to demonstrate your mastery of the skills needed to hold
        these certifications.
      </p>
    </TimelineItem>

    <TimelineItem
      side="left"
      title="Internship"
      subtitle="12 to 24 Weeks"
      extra="How does CodeX Academy help me land my first job as a software developer?"
    >
      <p>
        CodeX Academy gives you access to resume-building internship, not as an
        errand runner but as an actual software developer.
      </p>
      <p>
        Depending on your certification level, you will be given the opportunity
        to apply to a number of internships. After spending 3 to 6 months using
        your newfound skills in a professional internship, you'll have the
        experience and clout needed to win the coveted "first job!"
      </p>
    </TimelineItem>

    <TimelineItem
      position="last"
      side="right"
      title="New Career"
      subtitle="For Life"
      extra="What awaits me after my internship?"
    >
      <p>
        Armed with the tools, knowledge and experience you need, you're ready to
        take on the world and start making a difference. You can start a
        business offering Software-As-A-Service, work at a Fortune 500 company
        building complex enterprise systems, or support your favorite
        open-source project. Whatever the task in software development, you've
        got what it takes!
      </p>
      <p>
        Before you know it, you have one of the best jobs in the world! From
        start to finish, it's only a few short months to start your new career
        in software development!
      </p>
    </TimelineItem>
  </div>
</template>

<script>
import TimelineItem from "@/components/TimelineItem";

const data = [
  { dateLabel: "Morning", title: "Independent Study" },
  { dateLabel: "Afternoon", title: "Meet with Mentor" },
  { dateLabel: "Night", title: "Micro-Certification" }
];

export default { components: { TimelineItem } };
</script>

<style lang="scss" scoped>
@import "@/variables";
</style>
