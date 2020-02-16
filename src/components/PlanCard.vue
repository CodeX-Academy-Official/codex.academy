<template>
  <div class="card h-100" v-bind:class="{ 'card-outline-primary': primary}">
    <h3 class="card-header" v-bind:class="{ 'bg-primary': primary, 'text-white':primary}">{{title}}</h3>
    <div class="card-body">
      <div class="display-4">${{price}}</div>
      <div class="font-italic">{{duration}}</div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="d in details" :key="d">{{d}}</li>
      <li class="list-group-item">
        <a href="#" class="btn btn-primary">Enroll</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    price: String,
    duration: String,
    details: Array,
    id: String,
    primary: Boolean
  }
};
</script>