<template>
  <div class="row">
    <div class="col">
      <testimonial
        name="Randy K."
        headshot="img/headshots/randy.jpg"
        comments="The CodeX curriculum allowed me to work at my own pace with mentors who were flexible with my ever changing schedule. As a busy professional, the scheduling flexibility made a big difference in helping me successfully complete the curriculum."
      />
    </div>
    <div class="col">
      <testimonial
        name="Louis P."
        headshot="img/headshots/louis.jpg"
        comments="I’ve wanted to learn code for years. CodeX has mentors that ensure I am understanding the material. I have learned so much and I am set up for success, I love it!"
      />
    </div>
    <div class="col">
      <testimonial
        name="LeAnne B."
        headshot="img/headshots/leanne.jpg"
        comments="CodeX was a really fun experience and has been valuable for my career!"
      />
    </div>
  </div>
</template>

<script>
import testimonial from "@/components/testimonial";

export default {
  components: {
    testimonial
  }
};
</script>