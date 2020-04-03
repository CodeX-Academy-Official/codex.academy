import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Hero from "./Hero";

export default {
  component: Hero,
  title: "Hero"
};

export const withDefault = () => ({
  render() {
    return (
      <Hero unsplashId="XJXWbfSo2f0" height="300px">
        <h1>Financial Aid</h1>
        <h2>We've got you covered</h2>
      </Hero>
    );
  }
});
