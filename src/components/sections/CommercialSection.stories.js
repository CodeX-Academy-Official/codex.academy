import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import CommercialSection from "./CommercialSection";

export default {
  component: CommercialSection,
  title: "CommercialSection",
};

const videoUrl =
  "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4";

export const withDefault = () => ({
  render() {
    return <CommercialSection maxWidth={800} video={videoUrl} />;
  },
});
