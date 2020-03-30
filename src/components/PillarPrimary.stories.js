import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import PillarPrimary from "./PillarPrimary";

export default {
  component: PillarPrimary,
  title: "PillarPrimary"
};

import { faBriefcase, faPeopleCarry } from "@fortawesome/free-solid-svg-icons";

export const withMentoring = () => ({
  render() {
    return (
      <PillarPrimary
        title="Mentoring"
        subtitle="Live 1-on-1 Mentorship"
        icon={faPeopleCarry}
      >
        <p>
          As a CodeX Leader, you'll be matched with your very own full-stack
          mentor who will be there with you every step of the way.
        </p>
      </PillarPrimary>
    );
  }
});
export const withInternships = () => ({
  render() {
    return (
      <PillarPrimary
        title="Internship"
        subtitle="Gaining Meaningful Experience"
        icon={faBriefcase}
      >
        <p>
          As a CodeX Leader, you'll be matched with your very own full-stack
          mentor who will be there with you every step of the way.
        </p>
      </PillarPrimary>
    );
  }
});

// export const withJSX = () => ({
//   render() {
//     return <MyButton onClick={linkTo('Button', 'With Some Emoji')}>With JSX</MyButton>;
//   }
// })

// export const withSomeEmoji = () => ({
//   components: { MyButton },
//   template: '<my-button>😀 😎 👍 💯</my-button>'
// })
