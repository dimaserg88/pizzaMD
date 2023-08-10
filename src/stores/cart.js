import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    const items = ref([]);

    const addToCart = (item) => {
      const existingItem = items.value.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        item.quantity = 1;
        items.value.push(item);
      }
    };

    const removeFromCart = (item) => {
      const existingItem = items.value.find((i) => i.id === item.id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          const index = items.value.indexOf(existingItem);
          items.value.splice(index, 1);
        }
      }
    };

    const cartTotal = computed(() => {
      return items.value.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    });

    const clearCart = () => {
      items.value = [];
    };

    return {
      items,
      addToCart,
      removeFromCart,
      cartTotal,
      clearCart,
    };
  },
  { persist: true }
);
