<template>
  <div class="animate-pulse mt-48 px-10 sm:px-20">
    <transition
      enter-active-class="animate__animated animate__fadeInUp animate__fast"
      leave-active-class="animate__animated animate__fadeOutDown animate__fast"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isLoadingRendered">
        <section class="flex flex-col gap-4 w-full">
          <div class="sm:w-48 w-32 h-6 mb-6 skeleton-title-bar-i" />
          <div class="sm:w-96 w-24 h-3 skeleton-text-bar-i" />
          <div class="sm:w-32 w-32 h-3 skeleton-text-bar-i" />
          <div class="sm:w-64 w-8 h-3 skeleton-text-bar-ii" />
          <div class="sm:w-64 w-20 h-3 skeleton-text-bar-i" />
        </section>

        <section class="flex flex-col gap-4 pt-20 w-full">
          <div class="sm:w-64 w-24 h-6 mb-6 ml-6 skeleton-header-bar-i" />
          <div class="sm:w-64 w-24 h-3 skeleton-text-bar-ii" />
          <div class="sm:w-96 w-32 h-3 skeleton-text-bar-i" />
          <div class="sm:w-24 w-8 h-3 skeleton-text-bar-ii" />
          <div class="sm:w-64 w-20 h-3 skeleton-text-bar-i" />
          <div class="sm:w-32 w-20 skeleton-text-bar-i" />
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import 'animate.css';
import { ref } from 'vue';
export default {
	setup() {
		const isLoadingRendered = ref(false);
		isLoadingRendered.value = false;
		setTimeout(() => {
			isLoadingRendered.value = true;
		}, 1200);

		return {
			isLoadingRendered
		};
	}
};
</script>

<style>
  .skeleton-text-bar-i {
    background-color: var(--text);
    justify-content: flex-start !important;
    border-radius: 0.5rem;
  }

  .skeleton-text-bar-ii {
    background-color: var(--text);
    border-radius: 0.5rem;
    right: 0;
    margin-left: auto;
  }

  .skeleton-title-bar-i {
    background-color: var(--text-highlight);
    border-radius: 0.5rem;
  }

  .skeleton-header-bar-i {
    background-color: var(--text-highlight-2);
    border-radius: 0.5rem;
  }
</style>
