<template>
  <div class="container">
    <div
      class="row pathway"
      v-for="pathway in getPathways"
      :key="pathway.name"
      @click="selectPathway(pathway)"
    >
      <div class="col col-2 badgeImage mb-2 mt-2">
        <img class="fluid-image" :src="pathway.badgeImageUrl" />
      </div>
      <div class="col pb-2 pt-2">
        <h1>{{ pathway.name }}</h1>
        <p>{{pathway.description}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col col-2 badgeImage mb-5"></div>
      <div class="col">
        <h1>...more levels on the way!</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getPathways"])
  },
  methods: {
    selectPathway(pathway) {
      if (pathway.pathwayUrl) {
        window.open(pathway.pathwayUrl, "_blank");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pathway:hover {
  cursor: pointer;
  background-color: #eee;
}

.pathway {
  h1 {
    font-size: 2rem;
  }
  .badgeImage {
    img {
      width: 9rem;
      height: 9rem;
      border-radius: 50%;
    }
  }
}
</style>
