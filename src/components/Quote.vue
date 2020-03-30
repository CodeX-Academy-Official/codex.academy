<template>
  <div class="row justify-content-md-center quote">
    <div class="col-11 col-md-8 quote-text">
      <span class="quote-icon">
        <font-awesome-icon icon="quote-left" class="fa-4x"></font-awesome-icon>
      </span>
      {{ text }} <span class="quote-author">- {{ author }}</span>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: { FontAwesomeIcon },
  props: { text: String, author: String }
};
</script>

<style lang="scss">
@import "@/variables";

.quote {
  .quote-icon {
    color: $primary;
    margin-right: 10px;
  }
  div.quote-text {
    color: $navyBlue;
  }
  span.quote-author {
    color: $muted;
  }
}
</style>
