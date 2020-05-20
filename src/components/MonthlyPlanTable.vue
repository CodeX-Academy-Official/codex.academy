<template>
  <table class="table program-table">
    <thead>
      <tr>
        <th>
          <h2 class="text-center">{{ title }}</h2>
        </th>
        <th v-for="p in plans" :key="p.id">
          <h5 class="duration" v-if="p.durationMonths">
            {{ p.durationMonths }}-Month
          </h5>
          <h1 class="price">
            <Money :amount="p.total" />
          </h1>
          <h5 class="text-center" v-if="!p.durationMonths">{{ p.duration }}</h5>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Name</th>
        <td v-for="p in plans" :key="p.id">{{ p.title }}</td>
      </tr>
      <tr>
        <th>Description</th>
        <td v-for="p in plans" :key="p.id">{{ p.description }}</td>
      </tr>
      <tr>
        <th>Weekly 1:1 Mentoring</th>
        <td v-for="p in plans" :key="p.id">{{ p.mentorSessions }} sessions</td>
      </tr>
      <tr>
        <th>Weekly Commitment</th>
        <td v-for="p in plans" :key="p.id">{{ p.studyHours }} hours</td>
      </tr>
      <Row v-for="p in plans[0].details" :key="p" :name="p" :plans="plans" />

      <tr v-if="plans.find((x) => x.monthlyEvaluations > 0)">
        <th>Monthly Micro-Certification Evaluations</th>
        <td v-for="p in plans" :key="p.id">{{ p.monthlyEvaluations }}</td>
      </tr>

      <tr v-if="plans.filter((x) => x.monthlyProjectEvals > 0).length">
        <th>Monthly Project Evaluations</th>
        <td v-for="p in plans" :key="p.id">{{ p.monthlyProjectEvals }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td></td>
        <td v-for="p in plans" :key="p.id">
          <SelectPlanButton
            :plan="p"
            :text="getApplicant ? 'Select Monthly Plan' : 'Start Application'"
            :raiseEvent="true"
            @selected="selected"
          />
        </td>
      </tr>

      <tr></tr>
    </tfoot>
  </table>
</template>

<script>
import Icon from "@/components/Icon";
import SelectPlanButton from "@/components/SelectPlanButton";
import Money from "@/components/Money";
import { mapGetters } from "vuex";

const Row = {
  props: {
    name: String,
    plans: Array,
  },
  components: { Icon },
  render() {
    const iconSize = 20;
    const tds = this.plans.map((x) => (
      <td>
        <Icon name="check" size={iconSize} color="green" />
      </td>
    ));
    return (
      <tr>
        <th>{this.name}</th>
        {tds}
      </tr>
    );
  },
};

export default {
  components: {
    Row,
    Money,
    SelectPlanButton,
  },
  computed: {
    ...mapGetters(["getApplicant"]),
  },
  props: {
    plans: Array,
    title: String,
  },
  methods: {
    selected(plan) {
      this.$emit("selected", plan);
    },
  },
};
</script>

<style lang="scss">
@import "@/variables";
.program-table {
  font-size: 0.8em;
  color: #666;

  thead {
    tr {
      th {
        width: 300px;
        border-top: none;

        .duration {
          background: $fucia;
          color: white;
          padding: 5px;
          display: block;
          margin: auto;
          text-align: center;
        }
        .price {
          margin-top: 15px;
          text-align: center;
        }
      }
    }
  }
  tbody,
  tfoot {
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    border-collapse: separate;
    border-spacing: 15px 50px;

    td,
    th {
      text-align: center;
      border: none;
      padding: 15px;
    }
    th {
      background-color: none;
    }
  }
}
</style>
