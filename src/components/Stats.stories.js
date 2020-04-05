import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Stats from "./Stats";

export default {
  component: Stats,
  title: "Stats",
};

export const withDefault = () => ({
  render() {
    return <Stats />;
  },
});
