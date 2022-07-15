<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        class="top-0 fixed z-10 h-full w-full bg-black bg-opacity-50"
        v-show="isShowingThemeOverlay"
        @click.stop.prevent="closeThemeOverlay($event)"
      >
        <div
          class="flex items-start justify-center min-h-screen pt-24 text-center"
        >
          <div
            class="overlay-bg acrlyic rounded-lg text-left overflow-hidden shadow-xl w-10/12 sm:w-1/2"
          >
            <CardComponent />
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
/* eslint-disable */
import CardComponent from './MainThemeCardComponent.vue';
import { defineEmits, defineProps, computed, ref } from 'vue';

const props = defineProps({
  isShowingThemeOverlay: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['closeOverlay']);
const closeThemeOverlay = (e) => {
  if (e.target.classList.contains('min-h-screen')) emit('closeOverlay');
};
/* eslint-enable */
</script>

<style>
.overlay-bg {
  background-color: var(--bg);
  color: var(--text);
}
</style>
