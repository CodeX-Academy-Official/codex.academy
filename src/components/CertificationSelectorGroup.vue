<template>
  <div class="row justify-content-md-center">
    <div class="col-12 col-sm-4 col-md-3 mb-3" v-for="c in displayCertifications" :key="c.id">
      <CardSelector
        :id="c.id+''"
        :name="c.name"
        :description="c.description"
        :icon="c.icon"
        @onSelect="onSelect(c)"
        :active="c.active"
      />
    </div>
  </div>
</template>

<script>
import CardSelector from "@/components/CardSelector";

export default {
  props: {
    certifications: Array
  },
  data: () => ({
    selectedCertification: false
  }),
  computed: {
    displayCertifications() {
      return this.certifications.map(x => ({
        ...x,
        active: this.selectedCertification
          ? x.id === this.selectedCertification.id
          : true
      }));
    }
  },
  components: { CardSelector },
  methods: {
    onSelect(c) {
      this.selectedCertification = c;
      this.$emit("onSelect", c);
    }
  }
};
</script>

<style></style>
