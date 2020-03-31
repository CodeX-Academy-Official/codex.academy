import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import store from "@/store";

import MentoringSelectorGroup from "./MentoringSelectorGroup";

export default {
  component: MentoringSelectorGroup,
  title: "MentoringSelectorGroup"
};

export const withDefault = () => ({
  render() {
    return <MentoringSelectorGroup />;
  }
});
