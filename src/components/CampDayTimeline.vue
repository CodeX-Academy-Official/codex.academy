<template>
  <div class="container py-2">
    <TimelineItem
      position="first"
      side="right"
      title="Early Birds"
      subtitle="8:00 - 10:00 am"
      extra="For those who want to get in some extra practice time."
    >
      <p>We leave the morning open for those students who like to get in some extra practice or catch up on a course or project. During this time, students might:</p>
      <ul>
        <li>Get ahead or caught up on an online course or reading.</li>
        <li>Chat with mentors or other students to understand something better.</li>
        <li>Practice a new technique in the code editor.</li>
      </ul>
    </TimelineItem>

    <TimelineItem
      side="left"
      title="Morning Assembly"
      subtitle="10:00 am"
      extra="We &quot;meet at the flagpole&quot; for a few minutes each day to get psyched and set expectations."
    >
      <p>We like to start every day with a group meetup called the "Morning Assembly". During this meetup, camp staff will give some encouragement and guidance as well as set some expectations for the hours ahead. Every morning, students will receive a link in our Camp Chat to the "Morning Assembly" Zoom meeting. Students can expect us to discuss things like:</p>
      <ul>
        <li>A Quick Update on Group Progress</li>
        <li>Kudos for Any Amazers</li>
        <li>Spotlight Any "Aha! Moments"</li>
        <li>Answer Lingering Questions</li>
      </ul>
    </TimelineItem>

    <TimelineItem
      side="right"
      title="Go to Work"
      subtitle="10:30 am"
      extra="We support our students while they carry the majority of the load to learn to code."
    >
      <p>Students be working through a series of "Merit Badge" style classes that combine to form a learning pathway. Throughout each day, students have the support of virtual mentors who are available to answer questions via chat and even 1-on-1 video calls.</p>
      <p>The pathway we have prepared for our Summer Camp students will lead them to the ability to build web applications using the following languages:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <p>These are the three most popular and useful languages on the planet!</p>
    </TimelineItem>

    <TimelineItem
      side="left"
      title="Group Class"
      subtitle="1:00 pm"
      extra="We come back toghether in the afternoons to learn and do some Q and A."
    >
      <p>
        Each day an actual professional engineer will talk to the students about some aspect of the job or what the students are learning currently.
        A major part of this afternoon class is to accept quetions and try our best to answer them, either in group or 1-on-1.
      </p>
    </TimelineItem>

    <TimelineItem
      position="last"
      side="right"
      title="Back to Work"
      subtitle="2:00 pm"
      extra="We finish the day with independent study."
    >
      <p>Students have the option to continue studying and advancing in their badges as long as they would like. Mentors will continue to be available in chat throughout the afternoon.</p>
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
