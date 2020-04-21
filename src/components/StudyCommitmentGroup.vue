<template>
  <div class="row justify-content-md-center">
    <div class="col-6 col-sm-3 mb-3">
      <CardSelector
        name="Less than 10 hours"
        noun="sitting"
        @onSelect="onSelect('0')"
        :active="!selected || isActive('0')"
      />
    </div>
    <div class="col-6 col-sm-3 mb-3">
      <CardSelector
        name="10 Hours"
        noun="standing"
        @onSelect="onSelect('10')"
        :active="!selected || isActive('10')"
      />
    </div>
    <div class="col-6 col-sm-3 mb-3">
      <CardSelector
        name="20 Hours"
        noun="walking"
        @onSelect="onSelect('20')"
        :active="!selected || isActive('20')"
      />
    </div>
    <div class="col-6 col-sm-3 mb-3">
      <CardSelector
        name="40 Hours"
        noun="running"
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
