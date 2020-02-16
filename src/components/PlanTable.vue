<template>
  <!-- Content Row -->
  <div class="row">
    <div class="col-lg-4 mb-4" v-for="plan in plans" :key="plan.id">
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
  "Self-Paced",
  "Unlimited Learning Pathway Access",
  "24/7 Community Chat Access",
  "Build a Portfolio",
  "Internship Opportunities",
  "Certifications Included",
  "Career Counseling"
];

export default {
  components: {
    PlanCard
  },
  data() {
    return {
      plans: [
        {
          id: "parttime5",
          title: "Part-Time",
          price: "800",
          duration: "per month",
          details: [
            "20 hour/week commitment",
            ...commonDetails,
            "5 hours/week live 1:1 mentoring",
            "Up to 5 Evaluations/month"
          ]
        },
        {
          id: "fulltime10",
          title: "Full-Time",
          price: "1,500",
          duration: "per month",
          details: [
            "40 hour/week commitment",
            ...commonDetails,
            "10 hours/week live 1:1 mentoring",
            "Up to 10 Evaluations/month"
          ],
          primary: true
        },
        {
          id: "fulltime20",
          title: "Overtime",
          price: "2,800",
          duration: "per month",
          details: [
            "40-50 hour/week commitment",
            ...commonDetails,
            "20 hours/week live 1:1 mentoring",
            "Up to 20 Evaluations/month"
          ]
        }
      ]
    };
  }
};
</script>