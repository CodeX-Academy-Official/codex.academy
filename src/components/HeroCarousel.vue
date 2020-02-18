<template>
  <header class="dimmed mb-5">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <!-- Slide One - Set the background image for this slide in the line below -->
        <div
          class="carousel-item text-center align-middle active"
          style="background-image: url('img/photos/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg')"
        >
          <HeroText />
        </div>
        <!-- Slide Two - Set the background image for this slide in the line below -->
        <div
          class="carousel-item text-center"
          style="background-image: url('img/photos/christina-wocintechchat-com-HocFQHhGjDE-unsplash.jpg')"
        >
          <HeroText />
        </div>
        <!-- Slide Three - Set the background image for this slide in the line below -->
        <div
          class="carousel-item align-middle text-center"
          style="background-image: url('img/photos/christina-wocintechchat-com-VOYQEi3uv70-unsplash.jpg')"
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
const HeroText = () => (
  <div class="hero-title middle row">
    <div class="col-3 d-none d-md-block"></div>
    <div class="col d-flex">
      <div class="align-self-center">
        <p class="mb-5">
          <i>Join the workforce that changes the world!</i>
        </p>
        <h3 class="mb-4">Learn to code in 6 months</h3>
        <router-link to="/enroll" class="btn btn-primary btn-lg">
          <strong>Enroll Now</strong>
        </router-link>
      </div>
    </div>
    <div class="col-3 d-none d-md-block"></div>
  </div>
);

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

.hero-title {
  color: white;
  height: inherit;
  position: relative;
  width: 100%;
  z-index: 5;
  position: relative;
  left: 15px;

  h3 {
    font-size: 3.5rem;
    line-height: 4.2rem;
    letter-spacing: 0.3rem;
    font-weight: 900;
    color: white;
    padding: 0px;
    text-transform: uppercase;
  }
  p {
    font-style: italic;
    font-size: 1.2rem;
    position: relative;
    top: 20px;
  }
}
// .carousel-item {
//   .middle {
//     top: 9rem;
//   }
//   .topside {
//     top: 1rem;
//   }
//   .middle-right {
//     top: 2rem;
//     right: 1rem;
//   }
// }
</style>
