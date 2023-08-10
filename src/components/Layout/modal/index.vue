<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal" v-if="open">
        <div class="overlay" @click="$emit('close-modal')"></div>
        <div class="wrap">
          <div class="content">
            <slot @close-modal="$emit('close-modal')" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["close-modal"]);
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #101010d4;
}

.wrap {
  max-height: 100%;
  max-width: 540px;
  overflow-y: auto;
}

.content {
  background-color: white;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

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