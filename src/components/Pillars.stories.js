import Pillars from "./Pillars";
import store from "../store/index";

export default {
  component: Pillars,
  title: "Pillars"
};

const arr = store.getters.getMethods;

export const withDefault = () => ({
  render() {
    return <Pillars pillars={arr} />;
  }
});
