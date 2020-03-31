import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import StudyDurationGroup from "./StudyDurationGroup";

export default {
  component: StudyDurationGroup,
  title: "StudyDurationGroup"
};

export const withDefault = () => ({
  render() {
    return <StudyDurationGroup />;
  }
});
