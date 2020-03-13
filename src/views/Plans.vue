<template>
  <div class="container">
<!-- <IntroBlock /> -->
     <h1 class="mt-4 mb-3">CodeX Academy Plans</h1>

    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb-item active">Plans</li>
    </ol>
 
    <div class="row d-none d-lg-block">
        <div class="row">
          <div class="col">
            <div class="card">
              <img
                src="https://source.unsplash.com/YK0HPwWDJ1I/348x232"
                class="card-img-top"
                alt="Self-Paced Plans"
              />
              <div class="card-body">
                <h5 class="card-title">Community Plan</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item price">Only $50/month</li>
                <li class="list-group-item">Self-Paced</li>

                <li class="list-group-item">Independent Study</li>
                <li class="list-group-item">No Weekly Commitment</li>
              </ul>
              <div class="card-body">
                <router-link to="/community" class="card-link btn btn-primary">
                  <strong>Community Plan</strong>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://source.unsplash.com/kwzWjTnDPLk/348x232"
                class="card-img-top"
                alt="Self-Paced Plans"
              />
              <div class="card-body">
                <h5 class="card-title">Self-Paced Plans</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item price">$400/mo and up</li>
                <li class="list-group-item">Self-Paced</li>

                <li class="list-group-item">Mentor-Driven</li>
                <li class="list-group-item">5 to 40 Hours/Week Commitment</li>
              </ul>
              <div class="card-body">
                <router-link to="/selfpaced" class="card-link btn btn-primary">
                  <strong>Self-Paced Plans</strong>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://source.unsplash.com/ABVE1cyT7hk/348x232"
                class="card-img-top"
                alt="Self-Paced Plans"
              />
              <div class="card-body">
                <h5 class="card-title">Immersive Bootcamps</h5>
                <p class="card-text"></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item price">$4500 and up</li>
                <li class="list-group-item">Self-Paced with Schedule</li>
                <li class="list-group-item">Mentor-Driven</li>
                <li class="list-group-item">40 to 50 Hours/Week Commitment</li>
              </ul>
              <div class="card-body">
                <router-link to="/bootcamps" class="card-link btn btn-primary">
                  <strong>Bootcamp Plans</strong>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import PlanTable from "@/components/PlanTable";
import Unsplash from "@/components/Unsplash";

export default {
  components: {
    PlanTable,
    Unsplash
  }
};
</script>

<style scoped>
.bootcamp-description {
  height: 2rem;
}
</style>
