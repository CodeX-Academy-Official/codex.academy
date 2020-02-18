<template>
  <!-- Content Row -->
  <div class="row">
    <div class="col-lg-4 mb-4 plans-table" v-for="plan in plans" :key="plan.id">
      <PlanCard
        :id="plan.id"
        :title="plan.title"
        :price="plan.price"
        :duration="plan.duration"
        :primary="plan.primary"
        :details="plan.details"
      />
    </div>
  </div>
  <!-- /.row -->
</template>

<script>
import PlanCard from "@/components/PlanCard";

const commonDetails = [
  "40-50 hour/week commitment",
  "Mentor-Driven",
  "Unlimited Learning Pathway Access",
  "24/7 Community Chat Access",
  "Build a Portfolio",
  "Internship Opportunities",
  "Career Counseling",
  "10 hours/week live 1:1 mentoring"
];

export default {
  components: {
    PlanCard
  },
  data() {
    return {
      plans: [
        {
          id: "bootcamp3",
          title: "3-Month Bootcamp",
          price: "4,500",
          duration: "over 3 months",
          details: [
            "Graduates able to develop and deploy simple web applications using HTML, CSS, JavaScipt and JQuery.",
            ...commonDetails,
            "Up to 30 Micro-Certifications"
          ]
        },
        {
          id: "bootcamp6",
          title: "6-Month Bootcamp",
          price: "9,000",
          duration: "over 6 months",
          details: [
            "Graduates able to develop challenging full-stack data-driven web applications using best practices in technologies like ReactJS and NodeJS.",
            ...commonDetails,
            "Up to 60 Micro-Certifications"
          ],
          primary: true
        },
        {
          id: "bootcamp6",
          title: "9-Month Bootcamp",
          price: "13,500",
          duration: "over 9 months",
          details: [
            "Graduates able to develop complex, secure and well-engineered full-stack web applications using multiple front-end and back-end technologies.",
            ...commonDetails,
            "Up to 90 Micro-Certifications"
          ],
          primary: false
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.plans-table {
  text-align: center;
}
</style>
