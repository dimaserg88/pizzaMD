<template>
  <router-link
    :to="`/restaurant/${slug.split('.')[0]}`"
    class="card card-restaurant"
  >
    <img :src="image" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ name }}</h3>
        <span class="card-tag tag">{{ time_of_delivery }} мин</span>
      </div>
      <div class="card-info">
        <div class="rating">{{ stars }}</div>
        <div class="price">От {{ price }} ₽</div>
        <div class="category">{{ kitchen }}</div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  slug: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  time_of_delivery: {
    type: Number,
    default: 0,
  },
  stars: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  kitchen: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
</style>