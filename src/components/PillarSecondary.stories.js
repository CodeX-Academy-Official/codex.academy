import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import PillarSecondary from "./PillarSecondary";

export default {
  component: PillarSecondary,
  title: "PillarSecondary"
};

import {
  faClock,
  faTv,
  faTasks,
  faSimCard
} from "@fortawesome/free-solid-svg-icons";

export const withTechnologies = () => ({
  render() {
    return (
      <PillarSecondary
        title="Popular Technologies"
        subtitle="Tech that powers the world's systems"
        icon={faSimCard}
      >
        <p>
          As a CodeX Leader, you'll be matched with your very own full-stack
          mentor who will be there with you every step of the way.
        </p>
      </PillarSecondary>
    );
  }
});

export const withSelfPaced = () => ({
  render() {
    return (
      <PillarSecondary
        title="Self-Paced"
        subtitle="Options that fit personal schedule"
        icon={faClock}
        accentColor="periwinkle"
      >
        <p>
          As a CodeX Leader, you'll be matched with your very own full-stack
          mentor who will be there with you every step of the way.
        </p>
      </PillarSecondary>
    );
  }
});

export const withRemote = () => ({
  render() {
    return (
      <PillarSecondary
        title="100% Remote"
        subtitle="Options that fit personal schedule"
        icon={faTv}
        accentColor="lilac"
      >
        <p>
          As a CodeX Leader, you'll be matched with your very own full-stack
          mentor who will be there with you every step of the way.
        </p>
      </PillarSecondary>
    );
  }
});

export const withMastery = () => ({
  render() {
    return (
      <PillarSecondary
        title="Mastery Based"
        subtitle="We don't move until you've got it"
        icon={faTasks}
        accentColor="fucia"
      >
        <p>
          As a CodeX Leader, you'll be matched with your very own full-stack
          mentor who will be there with you every step of the way.
        </p>
      </PillarSecondary>
    );
  }
});
