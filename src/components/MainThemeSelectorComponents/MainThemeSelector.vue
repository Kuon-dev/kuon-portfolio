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
        class="top-0 fixed z-50 w-full bg-black bg-opacity-50 h-full overflow-auto"
        v-show="isShowingThemeOverlay"
        :class="isShowingThemeOverlay ? '' : 'overflow-auto '"
        @click.stop.prevent="closeThemeOverlay($event)"
      >
        <div
          class="flex items-start justify-center min-h-screen pt-24 text-center"
          ref="container"
        >
          <div
            class="overlay-bg acrlyic rounded-lg text-left overflow-hidden shadow-xl w-10/12 sm:w-1/2 overflow-y-auto"
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
  // import { ref, onMounted } from 'vue';

  const props = defineProps({
    isShowingThemeOverlay: {
      type: Boolean,
      default: false
    }
  });

  const emit = defineEmits(['closeOverlay']);
  const closeThemeOverlay = (e) => {
    // only close the overlay when user clicks outside of the overlay
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
