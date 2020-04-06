<template>
  <header class="dimmed mb-5">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <!-- Slide One - Set the background image for this slide in the line below -->
        <div
          class="carousel-item text-center align-middle active"
          style="background-image: url('https://source.unsplash.com/vLwH8bWoi_8/1600x900')"
        >
          <HeroText />
        </div>
        <!-- Slide Two - Set the background image for this slide in the line below -->
        <div
          class="carousel-item text-center"
          style="background-image: url('https://source.unsplash.com/HocFQHhGjDE/1600x900')"
        >
          <HeroText />
        </div>
        <!-- Slide Three - Set the background image for this slide in the line below -->
        <div
          class="carousel-item align-middle text-center"
          style="background-image: url('https://source.unsplash.com/VOYQEi3uv70/1600x900')"
        >
          <HeroText />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </header>
</template>

<script>
import HeroText from "@/components/HeroText";

export default {
  components: {
    HeroText
  }
};
</script>

<style lang="scss" scoped>
.dimmed {
  position: relative;
}

.dimmed:after {
  content: " ";
  z-index: 4;
  display: block;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
}

.carousel-control-prev,
.carousel-control-next {
  z-index: 100;
}
</style>
