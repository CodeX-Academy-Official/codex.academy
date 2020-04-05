<template>
  <form class="start-application-form">
    <div class="card shadow">
      <div class="card-body">
        <h3 class="card-title text-center">Get Started Learning</h3>
        <form @submit.prevent="submitForm">
          <div class="form-label-group">
            <label for="inputUserame">First Name</label>
            <input
              type="text"
              name="firstName"
              class="form-control"
              placeholder="First Name"
              v-model="firstName"
              required
            />
          </div>
          <div class="form-label-group">
            <label for="inputUserame">Last Name</label>
            <input
              type="text"
              name="lastName"
              class="form-control"
              placeholder="Last Name"
              v-model="lastName"
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

          <div class="form-label-group">
            <label for="inputUserame">Phone Number</label>
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
            <label for="inputPassword">Desired Start Date</label>
            <input
              type="date"
              id="inputPassword"
              class="form-control"
              placeholder="yyyy-MM-dd"
              v-model="startDate"
            />
          </div>

          <div class="cta">
            <button
              class="btn btn-lg btn-cta btn-block text-uppercase"
              type="submit"
            >Start Application</button>
          </div>
          <div class="privacy text-small text-center mt-3">
            <router-link to="/policy/privacy">Privacy Policy</router-link>
          </div>
        </form>
      </div>
    </div>
  </form>
</template>

<script>
function oneWeekFromToday() {
  var d = new Date();
  d.setDate(d.getDate() + 7);
  const formatted = d.toISOString().split("T")[0];
  return formatted;
}

export default {
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    startDate: oneWeekFromToday()
  }),
  methods: {
    submitForm() {
      this.$emit("submitted", {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        startDate: this.startDate
      });
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
}
</style>