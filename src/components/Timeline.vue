<template>
  <div class="container py-2">
    <!-- timeline item 1 -->
    <div class="row no-gutters">
      <div class="col-sm"><!--spacer--></div>
      <!-- timeline item 1 center dot -->
      <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
        <div class="row h-50">
          <div class="col">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
        <h5 class="m-2">
          <span class="badge badge-pill bg-light border">+</span>
        </h5>
        <div class="row h-50">
          <div class="col border-right">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
      </div>
      <!-- timeline item 1 event content -->
      <div class="col-sm py-2">
        <div class="card">
          <div class="card-body">
            <div class="float-right text-muted small">Jan 9th 2019 7:00 AM</div>
            <h4 class="card-title text-muted">Orientation - Day 1</h4>
            <p class="card-text">
              Welcome to the campus, introduction and get started with the tour.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--/row-->
    <!-- timeline item 2 -->
    <div class="row no-gutters">
      <div class="col-sm py-2">
        <div class="card border-primary shadow">
          <div class="card-body">
            <div class="float-right text-primary small">
              Jan 10th 2019 8:30 AM
            </div>
            <h4 class="card-title text-primary">Daily Progress</h4>
            <p class="card-text">
              Sign-up for the lessons and speakers that coincide with your
              course syllabus. Meet and greet with instructors.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
        <div class="row h-50">
          <div class="col border-right">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
        <h5 class="m-2">
          <span class="badge badge-pill bg-primary">+</span>
        </h5>
        <div class="row h-50">
          <div class="col border-right">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
      </div>
      <div class="col-sm"><!--spacer--></div>
    </div>
    <!--/row-->
    <!-- timeline item 3 -->
    <div class="row no-gutters">
      <div class="col-sm"><!--spacer--></div>
      <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
        <div class="row h-50">
          <div class="col border-right">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
        <h5 class="m-2">
          <span class="badge badge-pill bg-light border">+</span>
        </h5>
        <div class="row h-50">
          <div class="col border-right">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
      </div>
      <div class="col-sm py-2">
        <div class="card">
          <div class="card-body">
            <div class="float-right text-muted small">
              Jan 11th 2019 8:30 AM
            </div>
            <h4 class="card-title">Certification</h4>
            <p>
              Shoreditch vegan artisan Helvetica. Tattooed Codeply Echo Park
              Godard kogi, next level irony ennui twee squid fap selvage.
              Meggings flannel Brooklyn literally small batch, mumblecore PBR
              try-hard kale chips. Brooklyn vinyl lumbersexual bicycle rights,
              viral fap cronut leggings squid chillwave pickled gentrify
              mustache.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--/row-->
    <!-- timeline item 2 -->
    <div class="row no-gutters">
      <div class="col-sm py-2">
        <div class="card border-primary shadow">
          <div class="card-body">
            <div class="float-right text-primary small">
              Jan 10th 2019 8:30 AM
            </div>
            <h4 class="card-title text-primary">Internship</h4>
            <p class="card-text">
              Sign-up for the lessons and speakers that coincide with your
              course syllabus. Meet and greet with instructors.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
        <div class="row h-50">
          <div class="col border-right">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
        <h5 class="m-2">
          <span class="badge badge-pill bg-primary">+</span>
        </h5>
        <div class="row h-50">
          <div class="col border-right">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
      </div>
      <div class="col-sm"><!--spacer--></div>
    </div>
    <!--/row-->
    <!-- timeline item 3 -->
    <div class="row no-gutters">
      <div class="col-sm"><!--spacer--></div>
      <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
        <div class="row h-50">
          <div class="col border-right">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
        <h5 class="m-2">
          <span class="badge badge-pill bg-light border">+</span>
        </h5>
        <div class="row h-50">
          <div class="col border-right">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
      </div>
      <div class="col-sm py-2">
        <div class="card">
          <div class="card-body">
            <div class="float-right text-muted small">
              Jan 11th 2019 8:30 AM
            </div>
            <h4 class="card-title">New Career</h4>
            <p>
              Shoreditch vegan artisan Helvetica. Tattooed Codeply Echo Park
              Godard kogi, next level irony ennui twee squid fap selvage.
              Meggings flannel Brooklyn literally small batch, mumblecore PBR
              try-hard kale chips. Brooklyn vinyl lumbersexual bicycle rights,
              viral fap cronut leggings squid chillwave pickled gentrify
              mustache.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--/row-->
  </div>
</template>

<script>
const data = [
  { dateLabel: "Morning", title: "Independent Study" },
  { dateLabel: "Afternoon", title: "Meet with Mentor" },
  { dateLabel: "Night", title: "Micro-Certification" }
];

export default {};
</script>

<style lang="scss" scoped>
@import "@/variables";
</style>
