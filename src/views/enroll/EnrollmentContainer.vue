<template>
  <div class="pb-5">
    <Hero unsplashId="gnyA8vd3Otc" height="20vh" backgroundColor="rgba(25, 32, 71,0.7)">
      <h2>Application</h2>
      <h5>Just a few steps</h5>
    </Hero>
    <div class="container mt-5">
      <div class="row">
        <div class="d-none d-md-block col-4">
          <div class="sidebar">
            <p>
              We're happy you have chosen to enroll with CodeX Academy. You're
              just a few steps away from a bright future in coding!
            </p>
            <h4>Application Steps:</h4>
            <Step
              :number="1"
              name="Select/Confirm Program"
              @click="navigateToStage"
              :clickable="true && !completedProcess"
              :active="routeHas('/enroll')"
            />
            <Step
              :number="2"
              name="Enter Applicant Information"
              @click="navigateToStage"
              :clickable="getStartDate !== undefined && !completedProcess"
              :active="routeHas('/enroll/applicant')"
            />
            <Step
              :number="3"
              name="Pay Application Fee"
              @click="navigateToStage"
              :clickable="getApplicant !== undefined && !completedProcess"
              :disabled="shouldWaiveAppFee"
              :active="routeHas('/enroll/appfee')"
            />

            <Step
              :number="4"
              name="Application Approval"
              :clickable="false"
              :active="routeHas('/enroll/waitForApproval')"
            />

            <Step
              :number="5"
              name="Arrange Tuition Payment"
              :clickable="false"
              :active="routeHas('/enroll/payment')"
            />

            <Step
              :number="6"
              name="Start Learning"
              :clickable="false"
              :active="routeHas('/enroll/complete')"
            />
          </div>
        </div>
        <div class="col">
          <router-view @completed="finishedStage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import { mapGetters } from "vuex";

const Step = {
  props: {
    number: Number,
    name: String,
    clickable: Boolean,
    active: Boolean,
    disabled: Boolean
  },

  render(createElement) {
    const clickable = this.clickable ? "link " : "";
    const active = this.active ? "active " : "";
    const disabled = this.disabled ? "exempt" : "";
    const classes = disabled || active || clickable;
    return createElement(
      "div",
      {
        on: {
          click: this.click
        },
        class: classes.trim()
      },
      [`${this.number}. ${this.name}`]
    );
  },
  methods: {
    click() {
      if (!this.active && this.clickable && !this.disabled) {
        this.$emit("click", this.number);
      }
    }
  }
};

const stages = {
  1: "/enroll",
  2: "/enroll/applicant",
  3: "/enroll/appfee",
  4: "/enroll/waitForApproval",
  5: "/enroll/payment",
  6: "/enroll/complete"
};

export default {
  components: { Hero, Step },
  data: () => ({
    stage: 1
  }),
  computed: {
    ...mapGetters([
      "getApplicant",
      "getActivePlan",
      "getApplicationFee",
      "getStartDate",
      "getPromoCodesDisplay",
      "getPromoCodes",
      "getPaymentInfo"
    ]),
    shouldWaiveAppFee() {
      const validPromos = ["COVID19", "TAKE25", "PATHRISE"];
      const promoCodesInStore = this.getPromoCodes || [];
      const matches = validPromos
        .map(x => x.toLowerCase())
        .filter(value =>
          promoCodesInStore.map(x => (x || "").toLowerCase()).includes(value)
        );
      if (matches.length > 0) return true;
      if (this.getActivePlan && this.getActivePlan.appFee === false)
        return true;
      return false;
    },
    completedProcess() {
      return (
        this.routeHas("/enroll/complete") || this.routeHas("/enroll/admissions")
      );
    }
  },
  methods: {
    routeHas(path) {
      return this.$route.path === path;
    },
    finishedStage(stage) {
      let newStage = stage + 1;
      if (newStage === 3 && this.shouldWaiveAppFee) {
        newStage = 4;
      }
      this.navigateToStage(newStage);
    },
    navigateToStage(stage) {
      this.stage = stage;
      const route = stages[this.stage];
      if (this.$route.path == route) return;
      return this.$router.push(route);
    }
  }
};
</script>

<style lang="scss">
@import "@/variables";
.sidebar {
  background-color: #f8f9fa;
  padding: 10px;
}
.steps {
  color: #333;
}
.active {
  color: $primary;
  font-weight: bold;
}
.exempt {
  text-decoration: line-through;
}
.link {
  cursor: pointer;
}
</style>
