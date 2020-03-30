import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import PlanCard from "./PlanCard";

export default {
  component: PlanCard,
  title: "PlanCard"
};

const plan = {
  id: "selfpaced10",
  title: "Full-Time",
  description: "Your full-time job is to learn to code.",
  minimumWeeklyStudyHours: 40,
  levelPerMonth: 1,
  price: 1500,
  duration: "per month",
  details: [
    "40 hour/week commitment",
    "10 hours/week live 1:1 mentoring",
    "Up to 10 Evaluations/month"
  ],
  primary: true,
  isSelfpaced: true,
  isMentoring: true
};

export const withSelfPaced = () => ({
  render() {
    return (
      <div class="col-3">
        <PlanCard plan={plan} selectable={false} />
      </div>
    );
  }
});
export const withSelactable = () => ({
  render() {
    return (
      <div class="col-3">
        <PlanCard plan={plan} selectable={true} />
      </div>
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
