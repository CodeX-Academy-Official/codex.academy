<template>
  <div>
    <div v-if="!filled">
      <form @submit.prevent="submitForm">
        <div class="form-label-group">
          <label for="inputUserName">Primary Contact Name</label>
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
          <label for="org">Organization Name</label>
          <input
            type="tel"
            name="org"
            class="form-control"
            placeholder="Organization"
            v-model="org"
            autofocus
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

        <div class="form-label-group">
          <label for="inputUserName">Phone Number</label>
          <input
            type="tel"
            name="phone"
            class="form-control"
            placeholder="Phone Number"
            v-model="phone"
            autofocus
          />
        </div>
        <div class="form-label-group">
          <label for="inputMessage">Description</label>
          <textarea
            class="form-control"
            placeholder="Description"
            name="message"
            v-model="message"
            autofocus
          />
        </div>

        <div class="form-label-group" v-if="offerFinancialAid">
          <label for="inputPassword">Curriculum</label>

          <div class="form-check financial-aid">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="hasCurriculum"
              name="financialAidShort"
            />
            <label class="form-check-label" for="financialAidShort"
              >I have my own curriculum/learning materials.</label
            >
          </div>
        </div>

        <div class="cta">
          <button
            class="btn btn-lg btn-cta btn-block text-uppercase"
            type="submit"
          >
            Contact Me
          </button>
        </div>
        <div class="privacy text-center mt-3">
          <router-link to="/policy/privacy">Privacy Policy</router-link>
        </div>
      </form>
    </div>
    <div v-if="filled">
      <h1>Thanks!</h1>
      <p class="text-center">Someome should be in touch soon!</p>
    </div>
  </div>
</template>

<script>
import { getNextDeadlineFormatted } from "@/utils/dates";
import { mapGetters } from "vuex";

export default {
  props: { hasPromoCode: String, offerFinancialAid: Boolean },
  data: () => ({
    name: "",
    email: "",
    phone: "",
    org: "",
    message: "",
    hasCurriculum: true,
    filled: false,
  }),
  computed: {
    ...mapGetters([]),
  },
  mounted() {},
  methods: {
    track() {
      // this.$gtag.event("conversion", {
      //   event_label: "Landing Page Form Filled",
      //   send_to: "AW-650985233/XLT-CKLD_8wBEJH-tLYC"
      // });
    },
    submitForm() {
      const nameParts = this.name.trim().split(" ");
      const lastName = nameParts[nameParts.length - 1];
      const firstName = this.name.replace(lastName, "").trim();
      this.$store.dispatch("sendBaaSInterestForm", {
        firstName,
        lastName,
        email: this.email,
        phone: this.phone,
        org: this.org,
        message: this.message,
        hasCurriculum: this.hasCurriculum,
      });
      this.filled = true;
      // this.$emit("submitted", {
      //   firstName,
      //   lastName,
      //   financialAid: this.financialAid,
      //   email: this.email,
      //   startDate: this.startDate,
      //   promoCodes: this.getPromoCodesDisplay
      // });
      // this.track();
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

  textarea {
    overflow-y: scroll;
    height: 100px;
    resize: none; /* Remove this if you want the user to resize the textarea */
  }
}
</style>
