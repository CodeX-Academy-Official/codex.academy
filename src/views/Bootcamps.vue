<template>
  <div>
    <Hero unsplashId="y_6rqStQBYQ" height="40vh">
      <h2>Coding Bootcamps</h2>
      <h4>Full-time, Full-Immersion</h4>
    </Hero>
    <div class="container">
      <div class="row mt-5">
        <h2>Intense Intent and Direction</h2>
        <p class>
          Looking for an intense, immersive learning experience? CodeX Academy
          has a few bootcamp options to choose from, depending on how far you
          want to go.
        </p>
        <p>
          Like our
          <router-link to="/selfpaced">self-paced programs</router-link>, our
          bootcamps give you the opportunity to slow down and speed up as
          necessary. But, in a bootcamp, we have a specific goal in mind and we
          will push you to reach it!
        </p>
      </div>

      <div class="row mt-5">
        <BootcampsTable />
      </div>
    </div>
  </div>
</template>

<script>
import BootcampsTable from "@/components/BootcampsTable";
import Unsplash from "@/components/Unsplash";
import Hero from "@/components/Hero";

export default {
  components: {
    BootcampsTable,
    Unsplash,
    Hero,
  },
};
</script>
