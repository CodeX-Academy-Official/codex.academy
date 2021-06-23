<template>
  <div>
    <div class="row">
      <div class="col-3">
        <div class="form-group">
          <label for="size"> Cohort Size:</label>
          <select
            v-model="studentCount"
            id="size"
            class="form-control input-sm"
          >
            <option value="10">10 Students</option>
            <option value="20">20 Students</option>
            <option value="30">30 Students</option>
          </select>
        </div>
      </div>

      <div class="col-2">
        <div class="form-group">
          <label for="length"> Weeks:</label>
          <input
            class="form-control input-sm"
            type="number"
            id="length"
            v-model="bootcampWeeks"
          />
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>
            Boot Camp Services
          </th>
          <th class="text-center">Max Attendees</th>
          <th class="text-right">
            Unit Cost
          </th>
          <th class="text-right">
            Weekly Quantity
          </th>
          <th class="text-right">Per-Student Weekly Cost</th>
          <th class="text-right">Cohort Weekly Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            CodeX Academy Student Fee
          </td>
          <td class="text-center">n/a</td>
          <td class="text-right">
            <Money :amount="baseFee" />
          </td>
          <td class="text-center">
            n/a
          </td>
          <td class="text-right">
            <Money :amount="baseFee" />
          </td>
          <td class="text-right">
            <Money :amount="baseFee * studentCount" />
          </td>
        </tr>
        <tr v-for="s in services" :key="s.name">
          <td>
            {{ s.name }}
          </td>
          <td class="text-center">{{ s.maxAttendees }}</td>
          <td class="text-right">
            <Money :amount="s.price" />
          </td>
          <td class="text-center">
            <input
              v-model="quantities[s.name]"
              type="number"
              class="form-control col-5 d-inline"
              style="text-align: center;"
            />
          </td>
          <td class="text-right">
            <Money :amount="getStudentWeeklyPrice(s, quantities[s.name])" />
          </td>
          <td class="text-right">
            <Money :amount="getCohortWeeklyPrice(s, quantities[s.name])" />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3"></td>
          <td class="text-right">Weekly Totals:</td>
          <td class="text-right"><Money :amount="getTotalStudentCost()" /></td>
          <td class="text-right"><Money :amount="getTotalCohortCost()" /></td>
        </tr>
      </tfoot>
    </table>

    <div class="row">
      <div class="col-5">
        <h3>Per Student Cost</h3>
        <Money :amount="getTotalStudentCost() * bootcampWeeks" />
      </div>
      <div class="col-5">
        <h3>Boot Camp Cost</h3>
        <Money :amount="getTotalCohortCost() * bootcampWeeks" />
      </div>
    </div>
  </div>
</template>

<script>
import Money from "@/components/Money";

export default {
  props: {
    services: Array,
    baseFee: Number,
  },
  data: () => ({
    quantities: {},
    studentCount: 10,

    bootcampWeeks: 13,
  }),
  components: { Money },
  methods: {
    getCohortWeeklyPrice(feature, weeklyQuantity) {
      const studentPrice = this.getStudentWeeklyPrice(feature, weeklyQuantity);
      return studentPrice * this.studentCount;
    },
    getStudentWeeklyPrice(feature, weeklyQuantity) {
      const divisor = Math.min(this.studentCount, feature.maxAttendees);
      return (feature.price * weeklyQuantity) / divisor;
    },
    getTotalStudentCost() {
      let cost = 0;
      this.services.forEach((s) => {
        const weeklyQuantity = this.quantities[s.name];
        const serviceCost = this.getStudentWeeklyPrice(s, weeklyQuantity);
        cost += serviceCost;
      });
      return cost + this.baseFee;
    },
    getTotalCohortCost() {
      return this.getTotalStudentCost() * this.studentCount;
    },
  },
  mounted() {
    const q = {};
    this.services.forEach((x) => {
      q[x.name] = x.defaultQuantity;
    });
    this.quantities = q;
  },
};
</script>

<style></style>
