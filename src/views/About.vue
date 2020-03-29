<template>
  <div class="container">
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">
      About
      <!-- <small>CodeX Academy</small> -->
    </h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">About</li>
    </ol>

    <!-- Intro Content -->
    <!-- <div class="row"> -->
    <!-- <div class="col-lg-6"> -->
    <!-- <img class="img-fluid rounded mb-4" src="img/photos/camylla-battani-ABVE1cyT7hk-unsplash.jpg" alt /> -->
    <!-- <img class="img-fluid rounded mb-4" src="img/commercial/techs.png" alt /> -->
    <!-- </div> -->
    <!-- <div class="col-lg-6"> -->

    <h2>About CodeX Academy</h2>
    <p>
      CodeX Academy is a full service software development school with a
      different approach to how we develop and train our students to become full
      stack developers.
    </p>
    <p>
      Based on your learning style and personality, we will match you with a
      technical mentor to help you along your journey in programming. Your
      mentor will be there with you every step of the way. Stuck on a problem
      set? No problem your mentor can help guide you right through it. Need
      advice on how to approach your next course? No problem your mentor will
      help direct you in what path to take next. Feeling overwhelmed? Your
      mentor will help walk you through it and achieve your next goal! All while
      learning at your own pace. No rushing or tedious deadlines to compete
      with.
    </p>
    <p></p>
    <p>
      CodeX was founded in 2019 by Phil Henry, Byron Sommardahl and Christian
      Morsing.
    </p>

    <!-- </div> -->
    <!-- </div> -->
    <!-- /.row -->

    <!-- Team Members -->
    <h2>Our Team</h2>

    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="card h-100 text-center">
          <img class="card-img-top" src="img/headshots/hs_phenry.jpeg" alt />
          <div class="card-body">
            <h4 class="card-title">Phil Henry</h4>
            <h6 class="card-subtitle mb-2 text-muted">Co-founder &amp; Director of Buisness Dev</h6>
            <p class="card-text">
              Phillip Henry is the co-founder of business development of CodeX
              Academy. Phillip is a serial entrepreneur with over 15 years of
              experience. Before co-founding CodeX Academy, Phillip founded two
              previous startups with over $1M in valuation.
            </p>
            <p>
              As Director of Bisiness Development, Phillip monitors and supports the
              company’s performance, forecasts growth, fosters strategic
              partnerships, and champions the standards of the company.
            </p>
          </div>
          <div class="card-footer">
            <a href="mailto:phil@codex.academy">phil@codex.academy</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100 text-center">
          <img class="card-img-top" src="img/headshots/hs_bsommardahl.jpg" alt />
          <div class="card-body">
            <h4 class="card-title">Byron Sommardahl</h4>
            <h6 class="card-subtitle mb-2 text-muted">Co-founder &amp; Dean of Students</h6>
            <p class="card-text">
              Byron has been developing software since he was 9 years old, getting an early start with his Commodore 64 copmuter.
              Since then, Byron hasn't stopped growing as a programmer, working with various industries developing software and leading agile teams.
            </p>
            <p>
              Throughout Byron's career, education has been at the center of his passion. Byron has spent countless hours mentoring and teaching other developer around the world. Now, as Dean of Students at CodeX Academy, Byron plans and directs learning pathways, online
              curriculum and mentors. He also directs student evaluations for advancement and certification.
            </p>
          </div>
          <div class="card-footer">
            <a href="mailto:byron@codex.academy">byron@codex.academy</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100 text-center">
          <img class="card-img-top" src="img/headshots/hs_cmorsing.jpg" alt />
          <div class="card-body">
            <h4 class="card-title">Christian Morsing</h4>
            <h6 class="card-subtitle mb-2 text-muted">Co-founder &amp; Director of Admission</h6>
            <p class="card-text">
              Christian has spent most of his career in the wireless testing
              industry, building embedded systems for manufactoring.
            </p>
            <p>
              After mentoring various SW startups at Nashville EC he joined Phil
              in 2017. Christian has been part of 2 previous companies and then
              co-founded CodeX in 2019.
            </p>
            <p>
              As Director of Admissions, Christian handles student
              enrollment, initial onboarding, financial aid and student
              communication.
            </p>
          </div>
          <div class="card-footer">
            <a href="mailto:christian@codex.academy">christian@codex.academy</a>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</template>

<style lang="scss" scoped>
.card-img-top {
  //  width: 100%!important;
  height: 300px !important;
  object-fit: cover;
}
</style>
