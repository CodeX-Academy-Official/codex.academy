<template>
  <TopAlert>
    Next Program starts in:
    <span class="countdown"
      >{{ days }} days {{ hours }} hours {{ minutes }} minutes
      {{ seconds }} seconds</span
    >
  </TopAlert>
</template>

<script>
import TopAlert from "@/components/TopAlert";
import { getMondays } from "@/utils/dates";
import moment from "moment";

export default {
  components: {
    TopAlert,
  },
  data: () => ({
    days: 15,
    hours: 10,
    minutes: 35,
    seconds: 28,
  }),
  mounted() {
    const deadline = moment()
      .endOf("month")
      .startOf("isoweek")
      .set({ hour: 10 });

    function setDeadline(vm) {
      var diffTime = deadline.diff(moment());
      var duration = moment.duration(diffTime);

      vm.days = duration.days();
      vm.hours = duration.hours();
      vm.minutes = duration.minutes();
      vm.seconds = duration.seconds();
    }

    setDeadline(this);

    const interval = 1000;
    setInterval(() => setDeadline(this), interval);
  },
};
</script>

<style lang="scss" scoped>
.top-alert {
  .text {
    .countdown {
      font-size: 1.5em;
      color: orange;
      font-weight: 700;
      line-height: 23px;
      padding: 0px 15px;
    }
  }
}
</style>
