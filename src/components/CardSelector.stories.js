import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import CardSelector from "./CardSelector";

export default {
  component: CardSelector,
  title: "CardSelector"
};

const cert = {
  id: 1,
  name: "Front-End Developer",
  description:
    "Graduates able to develop and deploy simple web applications using HTML, CSS, JavaScript and JQuery.",
  level: 3,
  icon: "tv"
};

export const withDefault = () => ({
  render() {
    return (
      <div class="col-4">
        <CardSelector
          id="1"
          name="Some Card"
          description="This is a long but understated description."
          icon="tv"
          buttonText="Click Me!"
          onSelect={action("selected")}
        />
      </div>
    );
  }
});

export const withSlot = () => ({
  render() {
    return (
      <div class="col-4">
        <CardSelector
          id="1"
          name="Some Card"
          icon="tv"
          buttonText="Click Me!"
          onSelect={action("selected")}
        >
          <p>This is a long but understated description.</p>
          <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </CardSelector>
      </div>
    );
  }
});

export const withNoName = () => ({
  render() {
    return (
      <div class="col-4">
        <CardSelector
          description="This is a long but understated description."
          icon="tv"
          buttonText="Click Me!"
          onSelect={action("selected")}
        />
      </div>
    );
  }
});

export const withInactive = () => ({
  render() {
    return (
      <div class="col-4">
        <CardSelector
          name="Some Card"
          description="This is a long but understated description."
          buttonText="Click Me!"
          active={false}
        />
      </div>
    );
  }
});
