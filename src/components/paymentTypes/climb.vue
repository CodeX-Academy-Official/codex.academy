<template>
  <div :class="css">
    <h3>{{ number }}. Apply for Financial Aid</h3>

    <p>
      You can apply for financial aid through our partner, Climb Credit. 
      Please click the button below to apply.
    </p>
    <p>
      <button
        class="btn btn-primary"
        @click="$bvModal.show('modal-climb-credit')"
        :disabled="navigating"
      >
        <strong>Apply for Financial Aid</strong>
      </button>
    </p>
    <b-modal id="modal-climb-credit" hide-footer>
      <template v-slot:modal-title>Continuing Application</template>
      <div class="d-block">
        <p>
          <img src="img/Climb-Credit-Logo-small.png" class="float-right" width="200px" />
          We are partnering with Climb Credit to provide you with world-class financing. We will send your information to Climb Credit to ease the application process.
        </p>
        <p>
          <strong>Important:</strong> When given the option to choose a CodeX Academy program, you should choose:
        </p>
        <div class="text-center mb-5">
          <h3 class="plan-id">{{plan.climbName}}</h3>
        </div>
      </div>
      <b-button class="btn btn-primary" block @click="goToClimbCredit" :disabled="navigating">
        <strong>Go to Climb Credit</strong>
      </b-button>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

function getFormData(object) {
  var queryString = Object.keys(object)
    .map(key => key + "=" + object[key])
    .join("&");
  return queryString;
}

async function generateUrl(baseUrl, amount, applicant) {
  var payload = {
    schoolId: "CO0397775611321", //required
    firstName: applicant.firstName, //optional
    lastName: applicant.lastName, //optional
    dob: applicant.dateOfBirth, //optional
    // annualIncome: $("#annualIncome").val(), //optional
    // studentId: $("#studentId").val(), //optional
    email: applicant.email, //optional
    phone: "123-123-1234", //optional
    //financeAmt_tuition: amount //optional
    //isExistingStudent: $("#isExistingStudent").val(), //optional
    // programDate: $("#programDate").val(), //optional, coming soon
    // programEndDate: $("#programEndDate").val() //optional, coming soon
    addressStreet: applicant.address1, //optional
    addressApt: applicant.address2, //optional
    addressCity: applicant.city, //optional
    addressState: applicant.state, //optional
    addressZip: applicant.zip, //optional
    // highestEducationLevel: $("#highestEducationLevel").val(), //optional
    // currentEmploymentStatus: $("#currentEmploymentStatus").val(), //optional
    gender: applicant.gender //optional
    // note: $("#note").val() //optional -- this field is truncated to 3000 characters
  };
  try {
    const formData = getFormData(payload);
    const result = await axios.post(baseUrl, formData, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    });
    return result.data.url;
  } catch (err) {
    return false;
  }
}

export default {
  props: {
    paymentType: Object,
    number: Number,
    css: String,
    plan: Object
  },
  data: () => ({
    url: false,
    navigating: false
  }),
  methods: {
    async goToClimbCredit() {
      this.navigating = true;
      const applicant = this.$store.getters.getApplicant;

      let baseUrl = "https://climbcredit.com/api/pre-populate";
      if (this.$store.state.testMode)
        baseUrl = "https://pikachu.pub.shipit-climbcredit.com/api/pre-populate";
      const url = await generateUrl(baseUrl, this.plan.amount, applicant);
      if (url) {
        window.open(url, "_self");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.plan-id {
  background-color: lightpink;
  padding: 10px;
  display: inline;
  text-align: center;
}
</style>
