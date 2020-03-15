<template>
  <div>
    <div class="headshot d-flex">
      <img :src="headshot" class="img-fluid mx-auto mb-4" />
    </div>
    <h1>{{ name }}</h1> 
    <h5>{{ location }}</h5>
    <p class="pl-2 pr-2">{{ comments }}</p>
  </div>
</template>

<script>
export default {
  props: {
    headshot: String,
    name: String,
    location: String,
    comments: String
  }
};
</script>

<style lang="sass" scoped>
img { border-radius: 50%; width: 60%; }
p { text-align: left;}
</style>
