<template>
  <div class="commercial-section bg-navyblue pt-5 pb-5">
    <h1>How it Works</h1>
    <h5>Welcome to our full-service software development school!</h5>

    <div class="container mt-5 mb-5">
      <div class="d-none d-xl-block">
        <VideoPlayer :mp4="video" :width="1100" :poster="poster" />
      </div>
      <div class="d-none d-lg-block d-xl-none">
        <VideoPlayer :mp4="video" :width="900" :poster="poster" />
      </div>
      <div class="d-none d-md-block d-lg-none">
        <VideoPlayer :mp4="video" :width="680" :poster="poster" />
      </div>
      <div class="d-none d-sm-block d-md-none">
        <VideoPlayer :mp4="video" :width="500" :poster="poster" />
      </div>
      <div class="d-xs-block d-sm-none">
        <VideoPlayer :mp4="video" :width="300" :poster="poster" />
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer";

export default {
  components: { VideoPlayer },
  props: {
    maxWidth: { type: Number, default: 600 },
    video: { type: String, default: "video/2020-03-45s.mp4" },
    poster: { type: String, default: "img/commercial/24-weeks.png" }
  },
  methods: {
    getWidth(multiplier) {
      return this.maxWidth * multiplier;
    }
  }
};
</script>

<style lang="scss">
.commercial-section {
  text-align: center;
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #eee;
  }
}
</style>
