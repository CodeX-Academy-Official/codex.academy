<template>
  <table class="table program-table">
    <thead>
      <tr>
        <th><h2>Bootcamps</h2></th>
        <th v-for="p in plans" :key="p.id">
          <h3 class="duration">{{ p.durationMonths }}-Month</h3>
          <h1 class="price"><Money :amount="p.total" /></h1>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          Description
        </th>
        <td v-for="p in plans" :key="p.id">
          {{ p.description }}
        </td>
      </tr>
      <Row v-for="p in plans[0].details" :key="p" :name="p" />
    </tbody>
    <tfoot>
      <tr>
        <td>
          Need help? <router-link to="/findplan">Help Me Decide</router-link>
        </td>
        <td v-for="p in plans" :key="p.id">
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

const Row = {
  props: {
    name: String
  },
  components: { Icon },
  render() {
    const iconSize = 20;
    return (
      <tr>
        <th>{this.name}</th>
        <td>
          <Icon name="check" size={iconSize} color="green" />
        </td>
        <td>
          <Icon name="check" size={iconSize} color="green" />
        </td>
        <td>
          <Icon name="check" size={iconSize} color="green" />
        </td>
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
  computed: {
    plans() {
      return this.$store.state.plans.filter(x => x.isBootcamp);
    }
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
      width: 25%;
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
