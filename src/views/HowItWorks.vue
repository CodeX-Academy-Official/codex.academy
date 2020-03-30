<template>
  <div class="container">
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">How it Works</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">How it Works</li>
    </ol>

    <h2 class="section-title">The CodeX Academy Formula</h2>
    <Formula />

    <h2 class="section-title">Start Strong, Finish Stronger</h2>
    <Timeline />

    <a name="tech" />
    <h2 class="section-title">Our Technologies and Tools</h2>
    <Technologies />
  </div>
</template>

<script>
import Technologies from "@/components/Technologies";
import Unsplash from "@/components/Unsplash";
import MethodCardList from "@/components/MethodCardList";
import Timeline from "@/components/Timeline";
import Formula from "@/components/Formula";

export default {
  components: {
    Technologies,
    Unsplash,
    MethodCardList,
    Timeline,
    Formula
  }
};
</script>

<style lang="scss">
.badge-primary {
  color: white;
}
</style>
