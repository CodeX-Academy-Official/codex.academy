<template>
  <div class="cert-table">
    <table class="table">
      <thead>
        <tr>
          <th>
            <h4 class="text-center">{{ title }}</h4>
          </th>
          <th v-for="c in certifications" :key="c.name">
            <Icon :name="c.noun" :size="80" class="mb-3" />
            <h4 class="text-center">{{ c.name }}</h4>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Description</th>
          <td v-for="c in certifications" :key="c.id">{{ c.description }}</td>
        </tr>

        <tr>
          <th>Total Study Hours</th>
          <td v-for="c in certifications" :key="c.id">{{ c.studyHours }} Hours</td>
        </tr>
        <tr>
          <th>Total Mentor Hours</th>
          <td v-for="c in certifications" :key="c.id">{{ c.mentorHours }} Hours</td>
        </tr>
        <tr>
          <th>Human Evaluations</th>
          <td v-for="c in certifications" :key="c.id">Up to {{ c.evaluations }} Evaluations</td>
        </tr>
        <tr>
          <th>Micro-Certification Levels</th>
          <td v-for="c in certifications" :key="c.id">{{ c.levels }} Micro-Certifications</td>
        </tr>
        <CheckRow
          v-for="feature in features"
          :key="feature"
          :items="certifications"
          :name="feature"
        />

        <tr>
          <th>Full-Time Schedule</th>
          <td v-for="c in certifications" :key="c.id">{{ c.levels }} Months</td>
        </tr>
        <tr>
          <th>Part-Time Schedule</th>
          <td v-for="c in certifications" :key="c.id">{{ c.levels * 2 }} Months</td>
        </tr>

        <CheckRow :items="certifications" name="ISA Available" />
        <CheckRow :items="certifications" name="Financing Available" />
        <tr>
          <th>Up-Front Price</th>
          <td v-for="c in certifications" :key="c.id">
            <p class="price">
              <strong>
                <Money :amount="c.price" />
              </strong>
            </p>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>

          <td v-for="c in certifications" :key="c.id">
            <a @click="selectCertification(c)" class="btn btn-primary">
              <strong v-if="!getApplicant">Start Application</strong>
              <strong v-if="getApplicant">Select Program</strong>
            </a>
          </td>
        </tr>

        <tr></tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import Money from "@/components/Money";
import SelectPlanButton from "@/components/SelectPlanButton";
import { mapGetters } from "vuex";

const CheckRow = {
  props: {
    name: String,
    items: Array
  },
  components: { Icon },
  render() {
    const iconSize = 20;
    const tds = this.items.map(x => (
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
  props: {
    certifications: Array,
    features: Array,
    title: String
  },
  components: {
    CheckRow,
    Icon,
    SelectPlanButton,
    Money
  },
  computed: {
    ...mapGetters(["getApplicant"])
  },
  methods: {
    selectCertification(cert) {
      this.$emit("certificationSelected", cert);
    }
  }
};
</script>
<style lang="scss">
@import "@/variables";

.cert-table {
  font-size: 0.8em;
  color: #666;

  .price {
    margin: 0px;
    text-align: center;
    font-size: 1.7em;
  }

  thead {
    tr {
      th {
        width: 300px;
        border-top: none;
        text-align: center;
        fill: $fucia;
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
