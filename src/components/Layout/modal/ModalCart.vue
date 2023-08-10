<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal modal-cart" v-if="open">
        <div class="modal-dialog">
          <div class="modal-header">
            <h3 class="modal-title">Корзина</h3>
            <button class="close" @click="$emit('close-modal')">&times;</button>
          </div>
          <!-- /.modal-header -->
          <div class="modal-body" v-if="cartStore.items.length">
            <div
              class="food-row"
              v-for="(item, index) in cartStore.items"
              :key="index"
            >
              <span class="food-name">{{ item.name }}</span>
              <strong class="food-price">{{ item.price }} ₽</strong>
              <div class="food-counter">
                <button
                  class="counter-button"
                  @click="cartStore.removeFromCart(item)"
                >
                  -
                </button>
                <span class="counter">{{ item.quantity }}</span>
                <button
                  class="counter-button"
                  @click="cartStore.addToCart(item)"
                >
                  +
                </button>
              </div>
            </div>
            <!-- /.foods-row -->
          </div>
          <!-- /.modal-body -->
          <div class="modal-footer" v-if="cartStore.items.length">
            <span class="modal-pricetag">{{ cartStore.cartTotal }} ₽</span>
            <div class="footer-buttons">
              <button class="button button-primary">Оформить заказ</button>
              <button class="button clear-cart" @click="cartStore.clearCart">
                Отмена
              </button>
            </div>
          </div>
          <!-- /.modal-footer -->
          <h3 v-if="!cartStore.items.length">Корзина пуста</h3>
        </div>
        <!-- /.modal-dialog -->
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useCartStore } from "../../../stores/cart";

const cartStore = useCartStore();

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["close-modal"]);
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: 0.5s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>