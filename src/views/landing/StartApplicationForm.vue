<template>
  <form @submit.prevent="submitForm">
    <div class="form-label-group">
      <label for="inputUserName">Name</label>
      <input
        type="text"
        name="name"
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
      <button class="btn btn-lg btn-cta btn-block text-uppercase" type="submit">Start Application</button>
    </div>
    <div class="privacy text-center mt-3">
      <router-link to="/policy/privacy">Privacy Policy</router-link>
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
    name: "",
    email: "",
    startDate: oneWeekFromToday()
  }),
  methods: {
    submitForm() {
      const nameParts = this.name.trim().split(" ");
      const lastName = nameParts[nameParts.length - 1];
      const firstName = this.name.replace(lastName, "").trim();
      this.$emit("submitted", {
        firstName,
        lastName,
        email: this.email,
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