<template>
  <video ref="videoPlayer" class="video-js mx-auto"></video>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.min.css";

export default {
  name: "VideoPlayer",
  props: {
    autoplay: Boolean,
    controls: { type: Boolean, default: true },
    mp4: String,
    width: Number,
    poster: String,
  },
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    const options = {
      autoplay: this.autoplay,
      controls: this.controls,
      width: this.width,
      responsive: true,
      poster: this.poster,
      sources: [
        {
          src: this.mp4,
          type: "video/mp4",
        },
      ],
    };

    this.player = videojs(
      this.$refs.videoPlayer,
      options,
      function onPlayerReady() {
        // console.log("onPlayerReady", this);
      }
    );
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>
