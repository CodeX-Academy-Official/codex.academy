<template>
  <div class="container-fluid content-row mt-5 text-center programs-section">
    <h1>Certifications for Any Level</h1>
    <h5>Your Exciting Career Awaits</h5>
    <div class="pt-5 pb-5">
      <div class="row justify-content-center">
        <div
          class="col-10 col-sm-8 col-md-4 col-lg-4 mb-5"
          v-for="c in getCertifications"
          :key="c.name"
        >
          <div class="badge mb-4">

            <div class="d-none d-xl-block"><img :src="c.badgeUrl" :alt="c.name"  style="height: 280px;"  /></div>
            <div class="d-none d-lg-block d-xl-none"><img :src="c.badgeUrl" :alt="c.name" style="height: 200px;" /></div>
            <div class="d-none d-md-block d-lg-none"><img :src="c.badgeUrl" :alt="c.name" style="height: 200px;" /></div>
            <div class="d-none d-sm-block d-md-none"><img :src="c.badgeUrl" :alt="c.name" style="height: 250px;" /></div>
            <div class="d-xs-block d-sm-none"><img :src="c.badgeUrl" :alt="c.name" style="height: 250px;"  /></div>
          </div>
          <div class="certInfo">
            <div class="certName">
              <h4>{{ c.name }}</h4>
            </div>
            <div class="certDescription">
              <p>{{ c.description }}</p>
            </div>
          </div>

          <div class="container time-table">
            <div class="row title">
              <div class="col">Full-Time</div>
              <div class="col">Part-Time</div>
            </div>
            <div class="row months">
              <div class="col">Avg {{ c.levels }} Months</div>
              <div class="col">Avg {{ c.levels * 2 }} Months</div>
            </div>
            <div class="row hours">
              <div class="col">40 Hours/Week</div>
              <div class="col">20 Hours/Week</div>
            </div>
          </div>
          <p class="mt-3">
            <router-link :to="certLearnMoreUrl(c)">More Information</router-link>
          </p>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CertificationCard from "@/components/CertificationCard";

export default {
  components: { CertificationCard },
  computed: {
    ...mapGetters(["getCertifications"]),
  },
  methods: {
    certLearnMoreUrl(cert) {
      const name = cert.name.toLowerCase();
      const nameWithDashes = name.replace(" ", "-");
      return `/programs/${nameWithDashes}`;
    },
  },
};
</script>

<style lang="scss">
@import "@/variables";

.programs-section {
  .badge {

    img {
      // height: 250px;
    }
  }

  .certInfo {
    
    .certName {
    }
    .certDescription {
    }
  }

  .time-table {
    border: 1px solid #bbb;
    background-color: #eee;

    .title {
      padding: 5px;
      background-color: $primary;
      color: white;
      font-weight: bold;
    }
    .months {
      padding: 5px;
    }
    .hours{
      padding: 5px;
      font-size: .8em;
    }
  }
}
</style>
