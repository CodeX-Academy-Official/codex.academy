<template>
  <div>
    <div class="headshot">
      <img :src="headshot" class="img-fluid" />
    </div>
    <h1>{{name}}</h1>
    <p>{{comments}}</p>
  </div>
</template>

<script>
export default {
  props: {
    headshot: String,
    name: String,
    comments: String
  }
};
</script>

<style lang="sass" scoped>
img { border-radius: 50%; }
p { text-align: left;}
</style>