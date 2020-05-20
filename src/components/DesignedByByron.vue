<template>
  <div class="designed-by row">
    <div class="headshot">
      <img class="fluid-img" src="img/headshots/hs_bsommardahl.jpg" />
    </div>
    <div class="col">
      <h5>Mastery Transfer Initiated</h5>
      <div>
        CodeX Academy Developer Programs are designed by

        <a href="https://www.linkedin.com/in/sommardahl/" target="_blank"
          >Byron Sommardahl</a
        >, a veteran full-stack software engineer, Agile leader, architect and
        CTO with more than 30 years of development experience. Byron is from
        Nashville, TN where he runs the technical arms of three successful tech
        startups.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.designed-by {
  .headshot {
    width: 110px;
    img {
      object-fit: cover;
      border-radius: 50%;
      height: 100px;
      width: 100px;
      -webkit-clip-path: circle(50% at 50% 50%);
      clip-path: circle(50% at 50% 50%);
      border: 1px solid #bbb;
      padding: 2px;
    }
  }
}
</style>
