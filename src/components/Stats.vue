<template>
  <div class="row justify-content-md-center">
    <div class="col">
      <div class="stat">
        <div class="row number justify-content-center periwinkle">
          <Icon name="mentor" />
          <div class="title">76%</div>
        </div>
        <p>of people think mentors are important, but only 37% have a mentor.</p>
        <p>
          <a
            href="https://www.forbes.com/sites/christinecomaford/2019/07/03/new-study-76-of-people-think-mentors-are-important-but-only-37-have-one/#4faa11cc4329"
            target="_blank"
          >Learn More</a>
        </p>
      </div>
    </div>
    <div class="col">
      <div class="stat">
        <div class="row number justify-content-center lilac">
          <Icon name="happy" />
          <div class="title">84%</div>
        </div>
        <p>of employers think coding school graduates are just as or even more prepared than those with computer science degrees.</p>
        <p>
          <a
            href="http://blog.indeed.com/2017/05/02/what-employers-think-about-coding-bootcamp/"
            target="_blank"
          >Learn More</a>
        </p>
      </div>
    </div>
    <div class="col">
      <div class="stat">
        <div class="row number justify-content-center fucia">
          <Icon name="moneybag" />
          <div class="title">57%</div>
        </div>
        <p>increase in salary after coding bootcamp with an undergraduate degree.</p>
        <p>
          <a
            href="https://www.coursereport.com/blog/web-developer-salaries-after-coding-bootcamps"
            target="_blank"
          >Learn More</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon
  }
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

    svg {
      width: 90px;
    }
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
}
</style>
