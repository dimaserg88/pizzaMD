<template>
  <div class="card">
    <img :src="'/' + image" :alt="name" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ name }}</h3>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="ingredients">{{ description }}</div>
      </div>
      <!-- /.card-info -->
      <div class="card-buttons">
        <button class="button button-primary button-add-cart">
          <span
            class="button-card-text"
            @click="cartStore.addToCart({ id, name, price })"
            >В корзину</span
          >
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">{{ price }} ₽</strong>
      </div>
    </div>
    <!-- /.card-text -->
  </div>
</template>

<script setup>
import ModalCart from "./Layout/modal/ModalCart.vue";
import { useCartStore } from "../stores/cart";

defineProps({
  id: {
    type: String,
  },
  name: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: "",
  },
});

const cartStore = useCartStore();
</script>

<style scoped>
</style>