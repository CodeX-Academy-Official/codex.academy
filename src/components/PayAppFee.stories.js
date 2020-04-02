import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import store from "@/store";

import PayAppFee from "./PayAppFee";

export default {
  component: PayAppFee,
  title: "PayAppFee"
};

export const withDefault = () => ({
  render() {
    return <PayAppFee amount={50} />;
  }
});
