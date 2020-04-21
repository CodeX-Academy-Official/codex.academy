<template>
  <form @submit.prevent="submitForm">
    <div class="form-row">
      <div class="form-group col">
        <label for="inputEmail4">First Name:</label>
        <input
          type="text"
          class="form-control"
          v-model.trim="applicant.firstName"
          :class="isValid(applicant.firstName)"
          required
        />
      </div>
      <div class="form-group col">
        <label for="inputEmail4">Last Name:</label>
        <input
          type="text"
          class="form-control"
          v-model.trim="applicant.lastName"
          :class="isValid(applicant.lastName)"
          required
        />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Email:</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          v-model.trim="applicant.email"
          :class="isValid(applicant.email)"
          required
        />
      </div>
      <div class="form-group col-md-6">
        <label for="phone">Phone:</label>
        <input
          type="tel"
          class="form-control"
          id="phone"
          v-model.trim="applicant.phone"
          :class="isValid(applicant.phone)"
          required
        />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-8">
        <label for="inputAddress">Street Address:</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          v-model.trim="applicant.address1"
          :class="isValid(applicant.address1)"
          required
        />
      </div>
      <div class="form-group col-md-4">
        <label for="inputAddress2">Apartment, Suite, Floor #:</label>
        <input type="text" class="form-control" id="inputAddress2" v-model="applicant.address2" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputCity">City</label>
        <input
          type="text"
          class="form-control"
          id="inputCity"
          v-model.trim="applicant.city"
          :class="isValid(applicant.city)"
          required
        />
      </div>
      <div class="form-group col-md-4">
        <label for="inputState">State</label>
        <select
          class="form-control"
          id="inputState"
          name="state"
          v-model.trim="applicant.state"
          :class="isValid(applicant.state)"
          required
        >
          <option value></option>
          <option value="AK">Alaska</option>
          <option value="AL">Alabama</option>
          <option value="AR">Arkansas</option>
          <option value="AZ">Arizona</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DC">District of Columbia</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="IA">Iowa</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="MA">Massachusetts</option>
          <option value="MD">Maryland</option>
          <option value="ME">Maine</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MO">Missouri</option>
          <option value="MS">Mississippi</option>
          <option value="MT">Montana</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="NE">Nebraska</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NV">Nevada</option>
          <option value="NY">New York</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="PR">Puerto Rico</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VA">Virginia</option>
          <option value="VT">Vermont</option>
          <option value="WA">Washington</option>
          <option value="WI">Wisconsin</option>
          <option value="WV">West Virginia</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <label for="inputZip">Zip</label>
        <input
          type="text"
          class="form-control"
          id="inputZip"
          v-model.trim="applicant.zip"
          :class="isValid(applicant.zip)"
          required
        />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputDob">Date of Birth:</label>
        <input
          type="date"
          class="form-control"
          id="inputDob"
          v-model.trim="applicant.dateOfBirth"
          :class="isValid(applicant.dateOfBirth)"
          required
          :min="dateMin"
          :max="dateMax"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="gender">Gender:</label>
        <select class="form-control" id="gender" v-model="applicant.gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other / Prefer not to answer">Other / Prefer not to answer</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="col form-label-group">
        <label>Financial Aid:</label>
        <div class="form-check financial-aid">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="applicant.financialAid"
            id="financialAidLong"
          />
          <label class="form-check-label" for="financialAidLong">I want financial aid.</label>
        </div>
      </div>
    </div>
    <!-- <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck" v-model="applicant.financialAid" />
        <label class="form-check-label" for="gridCheck">I am applying for Financial Aid.</label>
      </div>
    </div>

    <div v-if="financialAid">
      <h4>Financial Aid Information:</h4>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="currentEmploymentStatus">Employment Status:</label>
          <select
            class="form-control"
            id="currentEmploymentStatus"
            placeholder="Choose one"
            v-model="applicant.employmentStatus"
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Self-employed/Freelance">Self-employed/Freelance</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Student">Student</option>
            <option value="Prefer Not to Say">Prefer Not to Say</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label for="jobTitle">Current Job Title:</label>
          <input
            type="email"
            class="form-control"
            id="jobTitle"
            placeholder="Job Title"
            v-model="applicant.jobTitle"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Annual Income:</label>
          <input
            type="number"
            class="form-control"
            id="inputIncome"
            placeholder="$"
            v-model="applicant.annualIncome"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="highestEducationLevel">Highest Education Level Reached:</label>
          <select
            class="form-control"
            id="highestEducationLevel"
            placeholder="Choose one"
            size="1"
            v-model="applicant.highestEducation"
          >
            <option value="Some High School">Some High School</option>
            <option value="High School Diploma or Equivalent">High School Diploma or Equivalent</option>
            <option value="Some College">Some College</option>
            <option value="Associate's Degree">Associate's Degree</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="Doctoral Degree">Doctoral Degree</option>
            <option value="Prefer Not To Say">Prefer Not to Say</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Anything more we should know?</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="applicant.notes"></textarea>
      </div>
    </div>-->

    <div class="mt-3">
      <button type="submit" class="btn btn-primary">
        <strong>Yes, This is Me</strong>
      </button>
      <div class="alert alert-danger mt-3" v-if="false">
        Please check the form to make sure all required fields have been filled
        in.
      </div>
    </div>
  </form>
</template>

<script>
import { today, centuryAgo, formatted } from "@/utils/dates";

export default {
  props: {
    plan: Object,
    initialApplicant: Object
  },
  data: () => ({
    applicant: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address1: "",
      city: "",
      state: "",
      zip: "",
      dateOfBirth: ""
    }
  }),
  computed: {
    dateMin() {
      return formatted(centuryAgo());
    },
    dateMax() {
      return formatted(today());
    }
  },
  methods: {
    submitForm() {
      this.$emit("enroll", this.applicant);
    },
    isValid() {
      return true;
    }
  },
  created() {
    if (this.initialApplicant) this.applicant = this.initialApplicant;
  }
};
</script>

<style lang="scss" scoped>
.error {
  border-color: red;
  background: #fdd;
}

.error:focus {
  outline-color: #f99;
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
</style>
