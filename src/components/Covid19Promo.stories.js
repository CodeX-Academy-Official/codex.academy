import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Covid19Promo from "./Covid19Promo";

export default {
  component: Covid19Promo,
  title: "Covid19Promo"
};

export const withDefault = () => ({
  render() {
    return (
      <div class="container" style="background-color: #ccc;">
        <Covid19Promo />
      </div>
    );
  }
});
