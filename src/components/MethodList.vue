<template>
  <div class="container method-list">
    <div class="method" v-for="method in getMethods" :key="method.id">
      <Method
        :title="method.title"
        :description="method.description"
        :icon="method.icon"
        iconSide="left"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Method from "@/components/method";

export default {
  computed: { ...mapGetters(["getMethods"]) },
  components: {
    Method
  }
};
</script>

<style lang="scss">
@import "@/variables";

.method-list {
  .container {
    width: 10rem;
  }
  .fa-x3 {
    margin-bottom: 2rem;
  }

  .method {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: solid #eee 1px;
  }
}
</style>
