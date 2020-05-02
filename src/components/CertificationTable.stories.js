import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import CertificationTable from "./CertificationTable";
import store from "../store/index";

export default {
  component: CertificationTable,
  title: "CertificationTable",
};

const certs = store.getters.getCertifications;
const features = store.getters.getBootcampFeatures;

export const withDefault = () => ({
  render() {
    return (
      <CertificationTable
        certifications={certs}
        features={features}
        title="Certifications"
      />
    );
  },
});
