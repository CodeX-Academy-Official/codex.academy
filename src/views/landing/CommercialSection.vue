<template>
  <div class="commercial-section bg-navyblue p-5">
    <slot />
    <div class="container mt-5 mb-5">
      <Commercial width="600" />
    </div>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer";

const Commercial = {
  props: { width: Number },
  render() {
    return (
      <VideoPlayer
        mp4="video/2020-03-45s.mp4"
        width={this.width}
        poster="img/commercial/24-weeks.png"
      />
    );
  }
};

export default {
  components: { Commercial }
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
