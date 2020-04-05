<template>
  <div class="row justify-content-md-center">
    <div class="col">
      <div class="stat">
        <div class="row number justify-content-center periwinkle">
          <Icon name="mentor" />
          <div class="title">76%</div>
        </div>
        <p>
          of people think mentors are important, but only 37% have a mentor.
        </p>
        <p>
          <a
            href="https://www.forbes.com/sites/christinecomaford/2019/07/03/new-study-76-of-people-think-mentors-are-important-but-only-37-have-one/#4faa11cc4329"
            target="_blank"
            >Learn More</a
          >
        </p>
      </div>
    </div>
    <div class="col">
      <div class="stat">
        <div class="row number justify-content-center lilac">
          <Icon name="happy" />
          <div class="title">9/10</div>
        </div>
        <p>
          workers who have a career mentor say they are happy in their jobs.
        </p>
        <p>
          <a
            href="https://www.cnbc.com/2019/07/16/nine-in-10-workers-who-have-a-mentor-say-they-are-happy-in-their-jobs.html"
            target="_blank"
            >Learn More</a
          >
        </p>
      </div>
    </div>
    <div class="col">
      <div class="stat">
        <div class="row number justify-content-center fucia">
          <Icon name="moneyBag" />
          <div class="title">65%</div>
        </div>
        <p>of paid interns get a job offer.</p>
        <p>
          <a
            href="https://universe.byu.edu/2017/02/22/interns-more-likely-to-be-hired-as-full-time-employees/"
            target="_blank"
            >Learn More</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
};
</script>

<style lang="scss">
@import "@/variables";

.stat {
  width: 200px;
  margin: auto;
  color: $navyBlue;

  p {
    margin-top: 10px;
    padding: 0px 15px;
    text-align: center;
  }
  .number {
    margin: 0px auto;

    .title {
      margin: 0px;
      display: inline;
      color: navyBlue;
      font-size: 3rem;
      font-weight: bolder;
      margin: auto 0px;
    }
    img {
      width: 80px;
      margin: 0px;
    }
  }

  .lilac {
    color: $lilac;
  }

  .periwinkle {
    color: $periwinkle;
  }
  .fucia {
    color: $fucia;
    object {
      svg {
        fill: $fucia;
      }
    }
  }
}
</style>
