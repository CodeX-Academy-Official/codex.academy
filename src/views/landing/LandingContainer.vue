<template>
  <div>
    Loading...    
  </div>
</template>

<script>
export default {
  mounted() {
    const source = this.$route.meta.source;
    if (source) {
      this.$store.dispatch("setSource", source.toLowerCase());
    }

    const international = this.$route.meta.international;
    if (international) {
      this.$store.dispatch("setPriceClass", "international");
      this.$store.dispatch("setProgramTitle", "CodeX Academy International");
    }
    else{
      this.$store.dispatch("setPriceClass", false);
      this.$store.dispatch("setProgramTitle", false);
    }

    this.$router.push("/");
  },
};
</script>

<style>
</style>