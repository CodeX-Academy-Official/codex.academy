<template>
  <div>
    <h3>Confirm Program</h3>

    <PlanSpread :plan="selectedPlan" />

    <p class="mt-4">
      <button class="btn btn-primary" @click="confirmPlan">
        <strong>Yes, Enroll in This Program</strong>
      </button>
    </p>
    <p>
      <button class="btn btn-secondary" @click="changePlan">
        No, Change Program
      </button>
    </p>
  </div>
</template>

<script>
import Progress from "@/components/Progress";
import PlanSpread from "@/components/PlanSpread";
import EnrollForm from "@/components/EnrollForm";
import axios from "axios";
import { mapGetters } from "vuex";

async function sendToHubspot(portalId, formId, payload) {
  const fields = [
    ...Object.keys(payload).map(key => ({
      name: key.toLowerCase(),
      value: payload[key]
    }))
  ];

  const hubspotFormat = {
    submittedAt: Date.now(), // This millisecond timestamp is optional. Update the value from "1517927174000" to avoid an INVALID_TIMESTAMP error.
    fields,
    context: {
      pageUri: "codex.academy/enroll",
      pageName: "Enrollment Page"
    }
    // legalConsentOptions: {
    //   consent: {
    //     // Include this object when GDPR options are enabled
    //     consentToProcess: true,
    //     text:
    //       "I agree to allow Example Company to store and process my personal data.",
    //     communications: [
    //       {
    //         value: true,
    //         subscriptionTypeId: 999,
    //         text:
    //           "I agree to receive marketing communications from Example Company."
    //       }
    //     ]
    //   }
    // }
  };
  console.log(hubspotFormat);
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
  const result = await axios.post(url, hubspotFormat);
  console.log(result);
  return result;
}

export default {
  data() {
    return {
      selectedPlan: {}
    };
  },
  // methods: {
  //   async startEnrollment(form) {
  //     console.log(form);
  //     this.$store.dispatch("enroll", form);
  //     await sendToHubspot(
  //       "7092117",
  //       "c4c04dcc-7c42-4552-86df-cd3d25294c79",
  //       form
  //     );

  //     var nextRoute = this.financialAid
  //       ? "enroll-financialaid"
  //       : "enroll-tuition";
  //     this.$router.push(nextRoute);
  //   }
  // },
  computed: { ...mapGetters(["getSelectedPlan"]) },
  components: {
    PlanSpread
    // EnrollForm
  },
  methods: {
    confirmPlan() {
      this.$router.push("/enroll/applicant");
    },
    changePlan() {
      this.$router.push("/findplan");
    }
  },
  mounted() {
    this.selectedPlan = this.$store.getters.getSelectedPlan;
    if (!this.selectedPlan) {
      this.$router.push("/findplan");
    }
    //   const script = document.createElement("script");
    //   script.src = "https://js.hsforms.net/forms/v2.js";
    //   document.body.appendChild(script);
    //   script.addEventListener("load", () => {
    //     if (window.hbspt) {
    //       window.hbspt.forms.create({
    //         portalId: "7092117",
    //         formId: "fe2c39ea-3086-4b7c-ba4b-6bf288544526",
    //         target: "#regForm"
    //       });
    //     }
    // });
  },
  created() {
    this.$emit("changeStage", 1);
  }
};
</script>

<style lang="scss" scoped>
@import "@/variables";

// .hs-button {
//   background-color: $primary;
// }
</style>
