<template>
  <form @submit.prevent="submitForm">
    <div class="form-label-group">
      <label for="inputUserName">Applicant Name</label>
      <input
        type="text"
        name="name"
        autocomplete="name"
        class="form-control"
        placeholder="Name"
        v-model="name"
        required 
      />
    </div>
    <div class="form-label-group">
      <label for="inputEmail">Email address</label>
      <input
        type="email"
        class="form-control"
        placeholder="Email address"
        name="email"
        v-model="email"
        required
        autofocus
      />
    </div>

    <!-- <div class="form-label-group">
      <label for="inputUserName">Phone Number</label>
      <input
        type="tel"
        name="phone"
        class="form-control"
        placeholder="Phone Number"
        v-model="phone"
        autofocus
      />
    </div>-->

    <div class="form-label-group" v-if="hasPromoCode">
      <label for="promoCode">Promo Code</label>
      <input class="form-control" v-model="promoCode" />
    </div>

    <!-- <div class="form-label-group">
      <label for="inputPassword">Desired Start Date</label>
      <input
        type="date"
        class="form-control"
        placeholder="yyyy-MM-dd"
        v-model="startDate"
      />
    </div>-->

    <div class="form-label-group" v-if="offerFinancialAid">
      <label for="inputPassword">Financial Aid</label>

      <div class="form-check financial-aid" v-if="offerFinancialAid">
        <input
          class="form-check-input"
          type="checkbox"
          v-model="financialAid"
          name="financialAidShort"
        />
        <label class="form-check-label" for="financialAidShort">I want financial aid.</label>
      </div>
    </div>

    <div class="cta">
      <button class="btn btn-lg btn-cta btn-block text-uppercase" type="submit">Start Application</button>
    </div>
    <div class="privacy text-center mt-3">
      <router-link to="/policy/privacy">Privacy Policy</router-link>
    </div>
  </form>
</template>

<script>
import { getNextDeadlineFormatted } from "@/utils/dates";
import { mapGetters } from "vuex";

export default {
  props: { hasPromoCode: String, offerFinancialAid: Boolean },
  data: () => ({
    name: "",
    email: "",
    financialAid: true,
    promoCode: "",
    startDate: getNextDeadlineFormatted()
  }),
  computed: {
    ...mapGetters(["getPromoCodesDisplay"])
  },
  mounted() {
    this.promoCode = (this.hasPromoCode || "").toUpperCase();
  },
  methods: {
    track() {
      this.$gtag.event("conversion", {
        event_label: "Landing Page Form Filled",
        send_to: "AW-650985233/XLT-CKLD_8wBEJH-tLYC"
      });
    },
    submitForm() {
      const nameParts = this.name.trim().split(" ");
      const lastName = nameParts[nameParts.length - 1];
      const firstName = this.name.replace(lastName, "").trim();
      this.$store.dispatch("applyPromoCode", this.promoCode);
      this.$emit("submitted", {
        firstName,
        lastName,
        financialAid: this.financialAid,
        email: this.email,
        startDate: this.startDate,
        promoCodes: this.getPromoCodesDisplay
      });
      this.track();
    }
  }
};
</script>

<style lang="scss">
.start-application-form {
  .btn-cta {
    background-color: rgb(255, 82, 28);
    color: white;
    font-weight: 900;
  }
  .form-label-group {
    margin-bottom: 10px;
    label {
      font-size: 0.7em;
      margin-bottom: 0px;
    }
  }
  .cta {
    margin-top: 20px;
  }

  .financial-aid {
    label {
      font-size: 1.2em;
      padding-left: 10px;
      text-transform: inherit;
    }
    input {
      height: 20px;
      width: 20px;
    }
  }
}
</style>
