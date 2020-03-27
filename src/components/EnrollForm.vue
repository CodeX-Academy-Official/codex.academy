<template>
  <form @submit.prevent="submitForm">
    <div class="form-row">
      <div class="form-group col">
        <label for="inputEmail4">First Name:</label>
        <input
          type="text"
          class="form-control"
          v-model.trim="$v.applicant.firstName.$model"
          :class="isValid($v.applicant.firstName)"
        />
      </div>

      <div class="form-group col">
        <label for="inputEmail4">Last Name:</label>
        <input
          type="text"
          class="form-control"
          v-model.trim="$v.applicant.lastName.$model"
          :class="isValid($v.applicant.lastName)"
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
          v-model.trim="$v.applicant.email.$model"
          :class="isValid($v.applicant.email)"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="phone">Phone:</label>
        <input
          type="telephone"
          class="form-control"
          id="phone"
          v-model.trim="$v.applicant.phone.$model"
          :class="isValid($v.applicant.phone)"
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
          v-model.trim="$v.applicant.address1.$model"
          :class="isValid($v.applicant.address1)"
        />
      </div>
      <div class="form-group col-md-4">
        <label for="inputAddress2">Apartment, Suite, Floor #:</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          v-model="address2"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputCity">City</label>
        <input
          type="text"
          class="form-control"
          id="inputCity"
          v-model.trim="$v.applicant.city.$model"
          :class="isValid($v.applicant.city)"
        />
      </div>
      <div class="form-group col-md-4">
        <label for="inputState">State</label>
        <select
          class="form-control"
          id="inputState"
          name="state"
          v-model.trim="$v.applicant.state.$model"
          :class="isValid($v.applicant.state)"
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
          v-model.trim="$v.applicant.zip.$model"
          :class="isValid($v.applicant.zip)"
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
          v-model.trim="$v.applicant.dateOfBirth.$model"
          :class="isValid($v.applicant.dateOfBirth)"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="gender">Gender:</label>
        <select class="form-control" id="gender" v-model="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other / Prefer not to answer"
            >Other / Prefer not to answer</option
          >
        </select>
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

    <button type="submit" class="btn btn-primary">
      <strong>Yes, This is Me</strong>
    </button>
    <div class="alert alert-danger mt-3" v-if="$v.applicant.$invalid">
      Please check the form to make sure all required fields have been filled
      in.
    </div>
  </form>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  props: {
    plan: Object,
    applicant: { type: Object, default: () => ({}) }
  },
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    dateOfBirth: "",
    gender: ""
  }),
  validations: {
    applicant: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        required
      },
      phone: {
        required
      },
      address1: {
        required
      },
      city: {
        required
      },
      state: {
        required
      },
      zip: {
        required
      },
      dateOfBirth: {
        required
      }
    }
  },
  methods: {
    submitForm() {
      this.$v.applicant.$touch();
      if (!this.$v.applicant.$invalid) {
        this.$emit("enroll", this.applicant);
      }
    },
    isValid(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty
      };
    }
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
</style>
