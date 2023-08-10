<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <img :src="Logo" alt="Logo" />
        </router-link>
        <label class="address">
          <input
            type="text"
            class="input input-address"
            placeholder="Адрес доставки"
          />
        </label>
        <div class="buttons">
          <span class="user-name"></span>
          <button class="button button-primary button-auth">
            <span class="button-auth-svg"></span>
            <span class="button-text">Войти</span>
          </button>
          <button
            class="button button-cart"
            id="cart-button"
            @click="isOpenModalCart = true"
            v-if="cartStore.items.length"
          >
            <span class="button-cart-svg"></span>
            <span class="button-text"
              >Корзина {{ cartStore.items.length }}</span
            >
          </button>
          <ModalCart
            :open="isOpenModalCart"
            @close-modal="isOpenModalCart = false"
          />
          <button class="button button-primary button-out">
            <span class="button-text">Выйти</span>
            <span class="button-out-svg"></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import Logo from "../../assets/img/logo.svg";
import ModalCart from "./modal/ModalCart.vue";
import { useCartStore } from "../../stores/cart";

const cartStore = useCartStore();

const isOpenModalCart = ref(false);
</script>

<style scoped>
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.address {
  flex: 0.8;
}

.input-address {
  width: 100%;
  background-image: url(/img/icon/home.svg);
}
</style>