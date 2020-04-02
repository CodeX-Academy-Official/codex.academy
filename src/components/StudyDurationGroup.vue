<template>
  <div class="row justify-content-md-center">
    <div class="col-6 col-sm-3 mb-3">
      <CardSelector
        name="3 Months"
        icon="chess-pawn"
        @onSelect="onSelect('3')"
        :active="!selected || isActive('3')"
      />
    </div>
    <div class="col-6 col-sm-3 mb-3">
      <CardSelector
        name="6 Months"
        icon="chess-bishop"
        @onSelect="onSelect('6')"
        :active="!selected || isActive('6')"
      />
    </div>
    <div class="col-6 col-sm-3 mb-3">
      <CardSelector
        name="9 Months"
        icon="chess-knight"
        @onSelect="onSelect('9')"
        :active="!selected || isActive('9')"
      />
    </div>
    <div class="col-6 col-sm-3 mb-3">
      <CardSelector
        name="12 Months"
        icon="chess-queen"
        @onSelect="onSelect('12')"
        :active="!selected || isActive('12')"
      />
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
