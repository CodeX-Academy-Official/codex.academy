<template>
  <div class="container">
    <h1 class="mt-4 mb-3">Learning Pathways</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Learning Pathways</li>
    </ol>

    <div class="row">
      <div class="col-12 col-md-4 mb-5" v-for="pathway in getPathways" :key="pathway.name">
        <div class="card">
          <img class="card-img-top" :src="pathway.badgeImageUrl" :alt="pathway.name" />
          <div class="card-body text-center">
            <h5 class="card-title">{{pathway.name}}</h5>
            <p class="card-text">{{pathway.description}}</p>
            <a :href="pathway.pathwayUrl" target="_blank" class="btn btn-primary">
              <strong>View Pathway</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
    <h5>...more levels on the way!</h5>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getPathways"])
  }
};
</script>

<style lang="scss" scoped>
.card-text {
  min-height: 7rem;
}
</style>
