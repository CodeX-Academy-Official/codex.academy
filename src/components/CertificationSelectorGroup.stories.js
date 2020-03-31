import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import store from "@/store";

import CertificationSelectorGroup from "./CertificationSelectorGroup";

export default {
  component: CertificationSelectorGroup,
  title: "CertificationSelectorGroup"
};

const certs = store.getters.getCertifications;

export const withDefault = () => ({
  render() {
    return <CertificationSelectorGroup certifications={certs} />;
  }
});
