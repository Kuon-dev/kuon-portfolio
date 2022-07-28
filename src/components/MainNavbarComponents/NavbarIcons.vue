<template>
  <div>
    <div v-if="selectedIcon === 'themeSelector'">
      <button
        class="border-2 rounded-md p-[0.35rem] svg_border"
        @click="toggleThemeOverlay"
      >
        <img
          :src="svgSource"
          class="svgColor inline min-w-[25px] min-h-[25px]"
          width="20px"
          height="20px"
        />
      </button>
    </div>

    <div v-else-if="selectedIcon === 'burgerMenu'">
      <button class="">
        <div class="border-2 rounded-md p-[0.48rem] svg_border -mt-[1px]">
          <div class="h-[0.15rem] w-[1.5rem] navbar_burger"></div>
          <div class="h-[0.15rem] w-[1.5rem] navbar_burger mt-2"></div>
          <div class="h-[0.15rem] w-[1.5rem] navbar_burger mt-2"></div>
        </div>
      </button>
    </div>

    <div v-else-if="selectedIcon === 'gitSource'">
      <button
        class="border-2 rounded-md p-[0.35rem] svg_border"
        onclick="window.open('https://github.com/Kuon-dev/kuon-portfolio/tree/main');"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          class="svgColor inline min-w-[25px] min-h-[25px]"
          width="20px"
          height="20px"
        />
      </button>
    </div>

    <div v-else></div>

    <div v-if="selectedIcon === 'themeSelector'">
      <MainThemeSelector
        :is-showing-theme-overlay="isShowingThemeOverlay"
        @closeOverlay="closeThemeOverlay"
      />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import MainThemeSelector from '../MainThemeSelectorComponents/MainThemeSelector.vue';

export default {
	props: {
		selectedIcon: {
			type: String,
			required: false,
			default: null,
		},
	},

	components: {
		MainThemeSelector,
	},

	setup(props) {
		const svgSource = './assets/theme.svg';

		const isShowingThemeOverlay = ref(false);

		const toggleThemeOverlay = () => {
			isShowingThemeOverlay.value = !isShowingThemeOverlay.value;
		};

		const closeThemeOverlay = () => {
			isShowingThemeOverlay.value = false;
		};

		return {
			svgSource,
			toggleThemeOverlay,
			isShowingThemeOverlay,
			closeThemeOverlay,
		};
	},
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
