<template>
  <div>
    <div class="headshot d-flex circle">
      <img :src="headshot" class="img-fluid mx-auto mb-4" />
    </div>
    <p class="text-center pl-3 pr-3 stars">
      <font-awesome-icon :icon="star" class="checked" />
      <font-awesome-icon :icon="star" class="checked ml-1" />
      <font-awesome-icon :icon="star" class="checked ml-1" />
      <font-awesome-icon :icon="star" class="checked ml-1" />
      <font-awesome-icon :icon="star" class="checked ml-1" />
    </p>
    <blockquote class="blockquote d-block w-75 mx-auto text-center">
      {{ comments }}
      <footer class="blockquote-footer text-right">
        {{name}}
        <br />
        <cite title="Position">{{position}}</cite>
        <br />
        <cite title="Location">{{location}}</cite>
      </footer>
    </blockquote>
  </div>
</template>

<script>
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default {
  data: () => ({
    star: faStar
  }),
  props: {
    headshot: String,
    name: String,
    location: String,
    comments: String,
    position: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/variables";

img {
  border-radius: 50%;
  -webkit-transform: translateZ(0);
  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
  width: 60%;
}
p {
  text-align: left;
}
.stars {
  .checked {
    color: $primary;
  }
}

blockquote {
  font-size: 1rem;
}
</style>
