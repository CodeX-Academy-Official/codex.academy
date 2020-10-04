import Promo30PercentOff from "./Promo30PercentOff";

export default {
  component: Promo30PercentOff,
  title: "Promo30PercentOff"
};

export const withDefault = () => ({
  render() {
    return (
      <div class="container" style="background-color: #ccc;">
        <Promo30PercentOff code="COVID19" />
      </div>
    );
  }
});
