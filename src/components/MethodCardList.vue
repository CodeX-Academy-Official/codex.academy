<template>
  <div>
    <div class="row">
      <div
        class="col-lg-2 col-md-3 col-sm-6"
        v-for="method in getMethods"
        :key="method.id"
        @click.prevent="$bvModal.show(`modal-method-${method.id}`)"
      >
        <MethodCard :title="method.title" :icon="method.icon" />
        <b-modal :id="`modal-method-${method.id}`" hide-footer>
          <template v-slot:modal-title>
            {{ method.title }}
          </template>
          <div class="d-block">
            {{ method.description }}
          </div>
          <b-button
            class="mt-3"
            block
            @click="$bvModal.hide(`modal-method-${method.id}`)"
            >Close Me</b-button
          >
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MethodCard from "@/components/MethodCard";

export default {
  computed: { ...mapGetters(["getMethods"]) },
  components: {
    MethodCard
  }
};
</script>

<style lang="scss">
@import "@/variables";

.method-list {
  .fa-x4 {
    margin-bottom: 2rem;
    color: $primary;
  }
}

div.method-card {
  h4 {
    font-size: 1.2rem;
  }
}
div.method-card:hover {
  background-color: $primary;

  h4 {
    color: white;
  }

  svg {
    color: white;
  }
}

.method-card {
  border: none;
  cursor: pointer;
}
</style>
