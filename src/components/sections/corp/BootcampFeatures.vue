<template>
  <div class="row">
    <div
      class="mt-5 col-6 col-md-3 text-center"
      v-for="f in features"
      :key="f.name"
    >
      <Icon :name="f.icon" color="black" />
      <p class="mt-4 muted">{{ f.name }}</p>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: { Icon },
  data: () => ({
    features: [
      {
        name: "Student Orientation",
        bullets: [
          "Adaptation of core orientation class to your bootcamp as needed.",
        ],
        icon: "branch",
      },
      {
        name: "Student Progress Tracking",
        bullets: [
          "Frequent pace/trajectory re-calculation",
          "Student low-progress alerts",
          "Check-in meeting facilitation",
        ],
        icon: "database",
      },

      {
        name: "Reporting",
        bullets: [
          "Student records available to host upon request",
          "Frequent student progress reports",
        ],
        icon: "tdd",
      },

      {
        name: "Student Success Management",
        bullets: [
          "Mentor introductions",
          "Kicking off each level with a strategy meeting",
          "Working with students to maintain goal-focused pace",
        ],
        icon: "okay",
      },

      {
        name: "Community Support",
        bullets: [
          "Active developer/mentor/learner chat community",
          "Daily monitoring and moderating",
        ],
        icon: "mentor",
      },

      {
        name: "Payment and Financial Aid Services",
        bullets: [
          "Credit/Debit card payments (no transaction fees)",
          "Student loans available",
          "ISA’s available",
        ],
        icon: "money",
      },

      {
        name: "Job Placement Services",
        bullets: [
          "Resume/CV feedback",
          "Extensive and growing curated list of internship and hiring",
          "partners",
          "Job Application counseling/advice",
          "Professional introductions",
        ],
        icon: "happy",
      },

      {
        name: "Curriculum Support",
        bullets: [
          "Students are welcome to use CodeX Academy’s core full-stack",
          "software development curriculum if desired.",
          "If you need help adapting your own curriculum or learning",
          "resources, we will provide assistance as needed.",
        ],
        icon: "design",
      },
    ],
  }),
};
</script>

<style></style>
