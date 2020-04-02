<template>
  <div class="row justify-content-md-center">
    <div class="col-12 col-sm-4 col-md-3 mb-3">
      <CardSelector
        id="yes"
        name="With Mentor"
        icon="users"
        @onSelect="onSelect('yes')"
        :active="!selected || isActive('yes')"
      >
        <p>
          I understand how challenging it is to learn to code. I want to learn
          to code with a mentor so I can make it to the finish line!
        </p>
      </CardSelector>
    </div>
    <div class="col-12 col-sm-4 col-md-3 mb-3">
      <CardSelector
        id="no"
        name="Alone"
        icon="user"
        @onSelect="onSelect('no')"
        :active="!selected || isActive('no')"
      >
        <p>
          I prefer to learn on my own. I understand learing to code is hard, but
          I am sure I can handle it.
        </p>
      </CardSelector>
    </div>
  </div>
</template>

<script>
import CardSelector from "@/components/CardSelector";

export default {
  props: {},
  data: () => ({
    selected: false
  }),
  components: { CardSelector },
  methods: {
    isActive(id) {
      return this.selected === id;
    },
    onSelect(id) {
      this.selected = id;
      this.$emit("onSelect", id);
    }
  }
};
</script>

<style></style>
