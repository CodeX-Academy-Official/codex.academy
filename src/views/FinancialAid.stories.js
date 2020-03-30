import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import bootstrapFontAwesome from "../bootstrapFontAwesome";
bootstrapFontAwesome();

import FinancialAid from "./FinancialAid";

export default {
  component: FinancialAid,
  title: "FinancialAid"
};

export const withDefault = () => ({
  render() {
    return (
      <div class="container">
        <FinancialAid />
      </div>
    );
  }
});
