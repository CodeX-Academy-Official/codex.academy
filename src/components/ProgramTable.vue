<template>
  <table class="table program-table">
    <thead>
      <tr>
        <th>
          <h2 class="text-center">{{ title }}</h2>
        </th>
        <th v-for="p in programs" :key="p.id">
          <h5 class="duration" v-if="p.durationMonths">{{ p.durationMonths }}-Month</h5>
          <h1 class="price">
            <Money :amount="p.total" />
          </h1>
          <h5 class="text-center" v-if="!p.durationMonths">{{ p.duration }}</h5>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Description</th>
        <td v-for="p in programs" :key="p.id">{{ p.description }}</td>
      </tr>
      <tr>
        <th>Weekly 1:1 Mentoring</th>
        <td v-for="p in programs" :key="p.id">{{ p.mentorHoursPerWeek }} hours</td>
      </tr>
      <tr>
        <th>Weekly Commitment</th>
        <td v-for="p in programs" :key="p.id">{{ p.minimumWeeklyStudyHours }} hours</td>
      </tr>
      <Row v-for="p in programs[0].details" :key="p" :name="p" :programs="programs" />

      <Row name="Financial Aid Available" :programs="programs" v-if="programs[0].isBootcamp" />
      <tr>
        <th>Monthly Micro-Certification Evaluations</th>
        <td v-for="p in programs" :key="p.id">{{ p.monthlyEvaluations }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>
          Need help?
          <router-link to="/findplan">Help Me Decide</router-link>
        </td>

        <td v-for="p in programs" :key="p.id">
          <SelectPlanButton :plan="p" text="Apply" />
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
    programs: Array
  },
  components: { Icon },
  render() {
    const iconSize = 20;
    const tds = this.programs.map(x => (
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
  }
};

export default {
  components: {
    Row,
    SelectPlanButton,
    Money
  },
  props: {
    programs: Array,
    title: String
  }
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
