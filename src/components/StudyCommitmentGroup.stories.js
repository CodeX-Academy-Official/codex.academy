import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import StudyCommitmentGroup from "./StudyCommitmentGroup";

export default {
  component: StudyCommitmentGroup,
  title: "StudyCommitmentGroup",
};

export const withDefault = () => ({
  render() {
    return <StudyCommitmentGroup />;
  },
});
