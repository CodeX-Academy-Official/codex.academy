<template>
  <div class="card certification h-100" :class="{ muted: !active }">
    <div class="card-body">
      <div class="icon mb-3 text-center" v-if="icon">
        <font-awesome-icon :icon="['fas', icon]" />
      </div>
      <h5 class="card-title text-center" v-if="name">{{ name }}</h5>
      <p class="card-text text-muted small" :class="{ 'text-center': !name }" v-if="description">
        {{ description }}
        <slot />
      </p>
    </div>
    <div class="card-footer text-center">
      <button class="btn btn-primary" @click.prevent="buttonClick">{{ buttonText }}</button>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  props: {
    id: String,
    icon: String,
    name: String,
    description: String,
    active: { type: Boolean, default: true },
    buttonText: { type: String, default: "Select" }
  },
  components: { FontAwesomeIcon },
  methods: {
    buttonClick() {
      this.$emit("onSelect", this);
    }
  }
};
</script>

<style lang="scss">
@import "@/variables";
.certification {
  border-color: $primary;

  .icon {
    svg {
      font-size: 3em;
      color: $primary;
    }
  }
}
.muted {
  border-color: $muted;
  .icon {
    svg {
      color: $muted;
    }
  }
  .card-title {
    color: $muted;
  }
  .btn-primary {
    background-color: $muted;
  }
}
</style>
