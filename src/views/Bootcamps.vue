<template>
  <div>
    <Hero unsplashId="y_6rqStQBYQ" height="40vh">
      <h2>Coding Bootcamps</h2>
      <h5>Full-time, Full-Immersion</h5>
    </Hero>
    <div class="container">
      <div class="mt-5">
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

      <div class="d-block d-md-none mt-5">
        <BootcampsTable />
      </div>

      <div class="d-none d-md-block mt-3">
        <ProgramTable :programs="getBootcamps" title="Bootcamps" />
      </div>
    </div>
  </div>
</template>

<script>
import BootcampsTable from "@/components/BootcampsTable";
import Unsplash from "@/components/Unsplash";
import Hero from "@/components/Hero";
import ProgramTable from "@/components/ProgramTable";
import { mapGetters } from "vuex";

export default {
  components: {
    BootcampsTable,
    Unsplash,
    Hero,
    ProgramTable
  },
  computed: {
    ...mapGetters(["getBootcamps"])
  }
};
</script>
