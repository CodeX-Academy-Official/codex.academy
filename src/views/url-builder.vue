<template>
  <div>
    <div class="container mt-5 mb-5">
      <h1>URL Builder</h1>
      <div class="row">
        <div class="col-4 form-label-group">
          <label for="promoCode">Source</label>
          <input class="form-control" v-model="source" />
        </div>
        <div class="col-4 form-label-group">
          <label for="promoCode">Campaign</label>
          <input class="form-control" v-model="campaign" />
        </div>
        <div class="col-4 form-label-group">
          <label for="promoCode">Program</label>
          <input class="form-control" v-model="program" />
        </div>
        <div class="col-4 form-label-group">
          <label for="promoCode">Price</label>
          <input class="form-control" v-model="price" />
        </div>
        <div class="col-4 form-label-group">
          <label for="promoCode">Features</label>
          <input class="form-control" v-model="features" disabled />
        </div>
        <div class="col-4 form-label-group">
          <label for="promoCode">Navigation</label>
          <input type="checkbox" class="form-control" v-model="nav" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 form-label-group">
          <label for="promoCode">URL</label>
          <textarea class="form-control">{{ url }}</textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  data: () => ({
    source: "",
    campaign: "",
    program: "",
    price: 0,
    features: "",
    nav: false,
  }),
  computed: {
    ...mapGetters([]),
    url() {
      const nav = this.nav ? "" : "nn/";
      const source = this.source ? `utm_source=${this.source}&` : "";
      const campaign = this.campaign ? `utm_campaign=${this.campaign}&` : "";

      const payload = {};
      if (this.price) payload.price = this.price;
      if (this.features)
        payload.features = this.features.split(",").map((x) => x.trim());

      const encoded = btoa(JSON.stringify(payload));

      const sku = encoded ? `sku=${encoded}&` : "";
      return `http://codex.academy/#/${nav}?${source}${campaign}${sku}`;
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">
@import "@/variables";
img.partner {
  border: #eee solid 1px;
  background-color: white;
  padding: 15px;
  max-height: 125px;
  max-width: 350px;
}

.level-up-landing-hero {
  .thanks-box {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    padding: 1em;
  }
  .big-message {
    .action {
      color: $primary;
    }
  }

  .checklist {
    font-size: 1.6rem;
    @media (max-width: 800px) {
      font-size: 1.4rem;
    }

    .title {
      text-align: left;
      padding-top: 30px;
      padding-bottom: 20px;
    }
    .item {
      padding-bottom: 5px;
      svg {
        fill: white;
        width: 20px;
        height: 20px;
      }
      span {
        padding-left: 15px;
      }
    }
  }

  .start-application-form {
    padding: 1em;
    background-color: rgba(255, 255, 255, 0.4);

    form {
      padding: 0px 1vw;
    }
    .btn-cta {
      background-color: rgb(255, 82, 28);
      color: white;
      font-weight: 900;
    }

    .form-label-group {
      margin-bottom: 10px;

      label {
        //font-size: 0.5em;
        //text-transform: capitalize;
        margin-bottom: 0px;
      }
    }
    .cta {
      margin-top: 20px;
    }
    .privacy {
      font-size: 0.8em;
      text-shadow: none;
      a {
        color: #eee;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-size: 4.2em;
    margin: 0px;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.5em;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1.1rem;
  }
}
</style>
