<template>
  <div>
    <p>
      Sample loan for representative purposes. Actual terms may vary based on a
      number of factors.
    </p>
    <div class="row loan-table justify-content-center">
      <div class="col-4 col-md-2 data" v-for="d in sampleData" :key="d.title">
        <div class="header align-middle">
          <span class="align-middle">
            {{ d.title }}
            <sup>{{ d.footnote }}</sup>
          </span>
        </div>
        <div class="content">
          <span class="align-middle">{{ d.content }}</span>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <div class="text-muted small text-left" v-for="d in sampleData" :key="d.title">
        <sup>{{ d.footnote }}</sup>
        {{ d.footnoteText }}
      </div>
    </div>
    <div class="mt-3 text-muted small text-left">{{disclaimer}}</div>
  </div>
</template>

<script>
export default {
  props: {
    sampleData: Array,
    disclaimer: String
  }
};
</script>

<style lang="scss">
@import "@/variables";
.loan-table {
  .data {
    color: white;
    padding: 0px 2px;
    margin-bottom: 4px;
  }
  .header {
    background-color: $periwinkle;
    padding: 10px;
    margin-bottom: 4px;
    height: 70px;
  }
  .content {
    background-color: $lilac;
    padding: 10px;
    height: 70px;
  }
}
</style>
