<template>
  <div class="covid-19-promo">
    <div class="row">
      <div class="col-12 col-md-4 header">
        <div class="subtitle">Use Promo Code:</div>
        <div class="title">COVID19</div>
      </div>
      <div class="col-12 col-md-8 promos ">
        <div class="row justify-content-center h-100">
          <div class="col-5 promo my-auto">
            Application Fee Waived
          </div>
          <div class="plus my-auto">+</div>
          <div class="col-5 promo promo-lg my-auto">
            30% Off<span class="subtext">on all programs</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: { Icon }
};
</script>

<style lang="scss" scoped>
@import "@/variables";
.covid-19-promo {
  .header {
    background-color: $lilac;
    color: white;
    text-align: center;
    padding: 15px;

    .subtitle {
      font-size: 0.9em;
      display: block;
    }

    .title {
      font-size: 2em;
      font-weight: 900;
      line-height: 1em;
    }
  }
  .promos {
    background-color: transparent;
    border: dashed 2px $lilac;
    color: white;

    @media screen and (max-width: 600px) {
      margin-top: -2px;
    }
    @media screen and (min-width: 600px) {
      margin-left: -2px;
    }

    .promo {
      text-align: center;
      font-size: 1.2em;
      font-weight: 800;

      @media screen and (max-width: 400px) {
        font-size: 1em;
      }
    }

    .promo-lg {
      font-size: 1.6em;
      @media screen and (max-width: 400px) {
        font-size: 1.4em;
      }
    }

    .subtext {
      display: block;
      font-size: 0.5em;
    }

    .plus {
      font-size: 3em;
      font-weight: 1000;
      text-align: center;
    }
  }
}
</style>
