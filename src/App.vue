<template>
  <Header />
  <RouterView />
  <Footer />
  <ModalCart />
</template>

<script setup>
import Header from "./components/Layout/Header.vue";
import Footer from "./components/Layout/Footer.vue";
import ModalCart from "./components/Layout/modal/ModalCart.vue";
</script>

<style scoped>
</style>
