<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2 class="section-title restaurant-title">Пицца Плюс</h2>
          <div class="card-info">
            <div class="rating">4.5</div>
            <div class="price">От 900 ₽</div>
            <div class="category">Пицца</div>
          </div>
          <!-- /.card-info -->
        </div>
        <div class="cards cards-menu">
          <ProductsItem
            v-for="product in products"
            :key="product.id"
            :id="product.id"
            :name="product.name"
            :description="product.description"
            :price="product.price"
            :image="product.image"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import ProductsItem from "../components/ProductsItem.vue";
import http from "../http";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const products = ref([]);

onMounted(() => {
  fetchData();
});

const fetchData = async () => {
  try {
    const { data } = await http.get("/data.json");
    products.value = data.db[route.params.slug];
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
</style>
