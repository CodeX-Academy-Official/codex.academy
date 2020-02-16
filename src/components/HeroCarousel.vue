<template>
  <header>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <!-- Slide One - Set the background image for this slide in the line below -->
        <div
          class="carousel-item align-middle active"
          style="background-image: url('img/photos/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg')"
        >
          <span class="hero-title middle">
            <h3>
              Learn to code.
              <br />Change the world.
            </h3>
            <br />
            <p>Join the workforce that rules the world!</p>
          </span>
        </div>
        <!-- Slide Two - Set the background image for this slide in the line below -->
        <div
          class="carousel-item"
          style="background-image: url('img/photos/christina-wocintechchat-com-HocFQHhGjDE-unsplash.jpg')"
        >
          <span class="hero-title middle">
            <h3>
              Learn to code.
              <br />Change the world.
            </h3>
            <br />
            <p>Join the workforce that rules the world!</p>
          </span>
        </div>
        <!-- Slide Three - Set the background image for this slide in the line below -->
        <!-- <div
          class="carousel-item align-middle"
          style="background-image: url('img/photos/christina-wocintechchat-com-VOYQEi3uv70-unsplash.jpg')"
        >
          <span class="hero-title topside">
            <h3>
              Learn to code.
              <br />Change the world.
            </h3>
            <br />
            <p>Join the workforce that rules the world!</p>
          </span>
        </div>-->
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

<style lang="scss" scoped>
.hero-title {
  color: white;
  height: inherit;
  position: relative;
  h3 {
    background-color: black;
    display: inline;
    font-size: 3.5rem;
    line-height: 3.4rem;
  }
  p {
    font-style: italic;
    background-color: black;
    display: inline;
    font-size: 1.2rem;
    position: relative;
    top: 20px;
  }
}
.carousel-item .middle {
  top: 9rem;
}
.carousel-item .topside {
  top: 1rem;
}
.carousel-item .middle-right {
  top: 2rem;
  right: 1rem;
}
</style>