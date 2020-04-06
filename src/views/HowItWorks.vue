<template>
  <div class="container pt-4">
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-5 mb-3">How it Works</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">How it Works</li>
    </ol>

    <h2 id="formula" class="section-title mt-5 mb-5">The CodeX Academy Formula</h2>
    <Formula />

    <h2 id="curriculum" class="section-title mt-5 mb-5">The CodeX Academy Curriculum</h2>
    <CurriculumTable />

    <h2 id="timeline" class="section-title mt-5 mb-5">Start Strong, Finish Stronger</h2>
    <Timeline />

    <h2 id="tech" class="section-title mt-5 mb-5">Our Technologies and Tools</h2>
    <Technologies />
  </div>
</template>

<script>
import Technologies from "@/components/Technologies";
import Unsplash from "@/components/Unsplash";
import MethodCardList from "@/components/MethodCardList";
import Timeline from "@/components/Timeline";
import Formula from "@/components/Formula";
import CurriculumTable from "@/components/CurriculumTable";

export default {
  components: {
    Technologies,
    Unsplash,
    MethodCardList,
    Timeline,
    Formula,
    CurriculumTable
  }
};
</script>

<style lang="scss">
.badge-primary {
  color: white;
}
</style>
