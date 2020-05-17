import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import MonthlyPlanTable from "./MonthlyPlanTable";
import store from "../store/index";

export default {
  component: MonthlyPlanTable,
  title: "MonthlyPlanTable",
};

const selfPaced = store.getters.getSelfPaced;

export const withSelfPaced = () => ({
  render() {
    return <MonthlyPlanTable plans={selfPaced} title="Self-Paced" />;
  },
});
