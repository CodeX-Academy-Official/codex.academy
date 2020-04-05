import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Icon from "./Icon";

export default {
  component: Icon,
  title: "Icon",
};

export const withDefault = () => ({
  render() {
    return <Icon name="happy" />;
  },
});
export const withFill = () => ({
  render() {
    return (
      <div class="fucia">
        <Icon name="mentor" />
      </div>
    );
  },
});
