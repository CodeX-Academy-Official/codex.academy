<template>
  <form @submit.prevent="submitForm">
    <div class="form-label-group" v-if="showName">
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
    <div class="form-label-group" v-if="showEmail">
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

    <div class="form-label-group" v-if="showZip">
      <label for="promoCode">Zip/Postal Code</label>
      <input class="form-control" placeholder="Zip/Postal Code" v-model="zip" />
    </div>

    <div class="form-label-group" v-if="showPhone">
      <label for="promoCode">Cell Phone Number</label>
      <input
        class="form-control"
        placeholder="Cell Phone Number"
        v-model="mobilephone"
      />
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
        <label class="form-check-label" for="financialAidShort"
          >I want financial aid.</label
        >
      </div>
    </div>

    <div class="cta">
      <button class="btn btn-lg btn-cta btn-block text-uppercase" type="submit">
        {{ submitButtonLabel || "Start Application" }}
      </button>
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
  props: {
    hasPromoCode: String,
    offerFinancialAid: Boolean,
    submitButtonLabel: String,
    extraFields: [String,Object]
  },
  data: () => ({
    name: "",
    email: "",
    zip: "",
    mobilephone: "",
    financialAid: true,
    promoCode: "",
    startDate: getNextDeadlineFormatted(),
  }),
  computed: {
    ...mapGetters(["getPromoCodesDisplay"]),
    showZip() {
      if(!this.extraFields) return false;
      return this.extraFields.toString().toLowerCase().indexOf("zip") > -1;
    },
    showPhone() {
      if(!this.extraFields) return false;
      return this.extraFields.toString().toLowerCase().indexOf("phone") > -1;
    },
    showEmail() {
      if(!this.extraFields) return false;
      const fields = this.extraFields.toString().toLowerCase();
      const hasNoEmail = fields.indexOf("no-email") > -1;
      if(hasNoEmail) return false;
      return true;
    },showName() {
      if(!this.extraFields) return false;
      const fields = this.extraFields.toString().toLowerCase();
      const hasNo = fields.indexOf("no-name") > -1;
      if(hasNo) return false;
      return true;
    },
  },
  mounted() {
    this.promoCode = this.hasPromoCode?.toUpperCase();
  },
  methods: {
    track() {
      this.$gtag.event("conversion", {
        event_label: "Landing Page Form Filled",
        send_to: "AW-650985233/XLT-CKLD_8wBEJH-tLYC",
      });
    },
    submitForm() {
      const zip = this.zip.trim();
      const mobilephone = this.mobilephone.trim();
      const nameParts = this.name.trim().split(" ");
      const lastName = nameParts[nameParts.length - 1];
      const firstName = this.name.replace(lastName, "").trim();
      this.$store.dispatch("applyPromoCode", this.promoCode);
      this.$emit("submitted", {
        firstName,
        lastName,
        zip,
        mobilephone,
        financialAid: this.financialAid,
        email: this.email,
        startDate: this.startDate,
        promoCodes: this.getPromoCodesDisplay,
      });
      this.track();
    },
  },
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
