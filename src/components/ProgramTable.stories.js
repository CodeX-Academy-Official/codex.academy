import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import ProgramTable from "./ProgramTable";
import store from "../store/index";

export default {
  component: ProgramTable,
  title: "ProgramTable"
};

const selfPaced = store.state.plans.filter(x => x.isMentoring && !x.isBootcamp);
const bootcamps = store.state.plans.filter(x => x.isBootcamp);

export const withSelfPaced = () => ({
  render() {
    return <ProgramTable programs={selfPaced} title="Self-Paced" />;
  }
});

export const withBootcamps = () => ({
  render() {
    return <ProgramTable programs={bootcamps} title="Bootcamps" />;
  }
});
