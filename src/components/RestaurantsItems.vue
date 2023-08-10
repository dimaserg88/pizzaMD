<template>
  <section class="restaurants">
    <div class="section-heading">
      <h2 class="section-title">Рестораны</h2>
      <label class="search">
        <input
          type="text"
          class="input input-search"
          placeholder="Поиск блюд и ресторанов"
        />
      </label>
    </div>
    <div class="cards cards-restaurants" v-if="partners.length">
      <RestaurantsItem
        v-for="(partner, index) in partners"
        :key="index"
        :name="partner.name"
        :time_of_delivery="partner.time_of_delivery"
        :stars="partner.stars"
        :price="partner.price"
        :kitchen="partner.kitchen"
        :image="partner.image"
        :slug="partner.products"
      />
    </div>
  </section>
</template>

<script setup>
import RestaurantsItem from "./RestaurantsItem.vue";
import http from "../http";
import { onMounted, ref } from "vue";

const partners = ref([]);

onMounted(() => {
  fetchData();
});

const fetchData = async () => {
  try {
    const { data } = await http.get("/data.json");
    partners.value = data.db.partners;
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
</style>