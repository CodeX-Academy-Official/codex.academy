<template>
  <div class="mt-5">
    <div class>
      <div class="container">
        <div class="pt-5 text-center">
          <h1>Awards & Recognition</h1>
          <div class="mt-5 pb-5">
            <h5 class="winner">Technology Emerging Winner</h5>
            <img
              src="https://www.ec.co/wp-content/uploads/2021/06/EC_Next_Logo_2021_Black-1-768x321.png"
              alt="this slowpoke moves"
              class="winnerImg"
            />
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: { type: String, default: "video/movie.gif" },
  },
};
</script>

<style>
.winner {
  padding-bottom: 1rem;
}
.winnerDate {
  padding-top: 1rem;
  padding-left: 2rem;
}
.winnerImg {
  width: 40%;
}
</style>
