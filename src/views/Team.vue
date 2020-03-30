<template>
  <div class="container">
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">
      Our Team
    </h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Our Team</li>
    </ol>

    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="card h-100 text-center">
          <img class="card-img-top" src="img/headshots/hs_phenry.jpeg" alt />
          <div class="card-body">
            <h4 class="card-title">Phil Henry</h4>
            <h6 class="card-subtitle mb-2 text-muted">
              Co-founder &amp; Director of Business Dev
            </h6>
            <p class="card-text">
              Phillip Henry is the co-founder of CodeX Academy. Phillip is a
              serial entrepreneur with over 15 years of experience. Before
              co-founding CodeX Academy, Phillip founded two previous startups
              with over $1M in valuation.
            </p>
            <p>
              As Director of Business Development, Phillip monitors and supports
              the company’s performance, forecasts growth, fosters strategic
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
          <img
            class="card-img-top"
            src="img/headshots/hs_bsommardahl.jpg"
            alt
          />
          <div class="card-body">
            <h4 class="card-title">Byron Sommardahl</h4>
            <h6 class="card-subtitle mb-2 text-muted">
              Co-founder &amp; Dean of Students
            </h6>
            <p class="card-text">
              Byron has been developing software since he was 9 years old,
              getting an early start with his Commodore 64 computer. Since then,
              Byron hasn't stopped growing as a programmer, working with various
              industries developing software and leading agile teams.
            </p>
            <p>
              Throughout Byron's career, education has been at the center of his
              passion. Byron has spent countless hours mentoring and teaching
              other developers around the world. Now, as Dean of Students at
              CodeX Academy, Byron plans and directs learning pathways, online
              curriculum and mentors. He also directs student evaluations for
              advancement and certification.
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
            <h6 class="card-subtitle mb-2 text-muted">
              Co-founder &amp; Director of Admission
            </h6>
            <p class="card-text">
              Christian has a background in the wireless testing industry,
              building embedded systems for manufacturing.
            </p>
            <p>
              After mentoring various SW startups at Nashville EC, he meet Phil
              in 2017. Christian has been part of 2 previous software companies
              with Phil and then co-founded CodeX Academy in 2019.
            </p>
            <p>
              As Director of Admissions, Christian handles student enrollment,
              initial onboarding, financial aid and student communication.
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
