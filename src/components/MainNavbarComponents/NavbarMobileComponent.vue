<template>
  <Teleport to="body">
    <transition
      enter-active-class="animate__animated animate__slideInRight animate__fast"
      leave-active-class="animate__animated animate__slideOutRight animate__fast"
    >
      <div
        class="top-0 fixed z-50 w-full h-full overflow-auto"
        v-show="isShowingNavbarOverlay"
        :class="isShowingNavbarOverlay ? '' : 'overflow-auto '"
        @click.stop.prevent="closeNavbarOverlay($event)"
      >
        <div
          class="flex items-start justify-end h-full text-center closeable-wrapper"
        >
          <ul
            class="overlay-bg acrlyic text-left overflow-hidden shadow-xl md:w-1/3 w-2/3 h-full overflow-y-auto"
            style="border-radius: 0px"
          >
            <li class="pb-8">
              <button
                class="right-0 ml-auto float-right closeable-wrapper select-none"
                @click="closeNavbarOverlay($event)"
              >
                X
              </button>
            </li>
            <li
              v-for="items in navbarItems"
              :key="items.route"
              class="text-3xl font-bold sm:-ml-[0px] text-center py-3"
              @click="closeNavbarOverlay($event)"
            >
              <router-link
                :to="items.route"
                class="scroll-smooth closeable-wrapper-sidebar"
              >
                {{ items.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
	isShowingNavbarOverlay: {
		type: Boolean,
		default: false
	},
	navbarItems: {
		type: Array,
		default: null
	}
});

const emit = defineEmits(['closeOverlay']);

const closeNavbarOverlay = (e) => {
	// only close the overlay when user clicks outside of the overlay
	if (e.target.classList.contains('closeable-wrapper')) emit('closeOverlay');
	if (e.target.classList.contains('closeable-wrapper-sidebar'))
		setTimeout(() => emit('closeOverlay'), 300);
};
</script>

<style></style>
