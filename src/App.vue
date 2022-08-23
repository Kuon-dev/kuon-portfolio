<template>
  <div ref="baseModel">
    <div
      class="xl:px-[20rem] lg:px-[14rem] md:px-[10rem] sm:px-[7rem] px-[4rem]"
      :class="
        setAnimate && isThemeLoaded
          ? 'animate__animated animate__fadeInUp animate__fast'
          : null
      "
      ref="baseContainer"
    >
      <Navbar
        @updateWindowSize="setWindowWidth($event)"
        v-show="isThemeLoaded"
      />
      <ThreeJS
        v-if="isThemeLoaded && currentRouteName !== 'ngl'"
        :padding-value="paddingValue"
      />
      <div
        class="h-48 w-48"
        v-else-if="isThemeLoaded && currentRouteName === 'ngl'"
      />

      <div v-show="!isThemeLoaded" class="h-64">
        <MainLoading @apply-theme="applyTheme" />
      </div>

      <div
        class="pb-20 z-10 -mt-[5rem] -m-[3rem] px-5 sm:px-0 content-container"
        :class="isThemeLoaded ? 'divCenter' : null"
        :style="
          windowWidth < 1280
            ? null
            : {
                'padding-left': paddingValue - 50 + 'px',
                'padding-right': paddingValue - 50 + 'px'
              }
        "
      >
        <!-- contents -->
        <router-view v-slot="{ Component }" v-if="isThemeLoaded">
          <transition
            mode="out-in"
            enter-active-class="animate__animated animate__fadeInUp animate__fast"
            leave-active-class="animate__animated animate__fadeOutDown animate__fast"
          >
            <component :is="Component" :responsive-value="paddingValue" />
          </transition>
        </router-view>

        <div v-if="!isThemeLoaded">
          <MainSkeletonLoader />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ThreeJS from './components/ThreeJs.vue';
import Navbar from './components/MainNavbar.vue';
import 'animate.css';
import { ref, onMounted, computed } from 'vue';
import Themes from './components/MainThemeSelectorComponents/Themes.json';
import MainLoading from './views/MainLoading.vue';
import MainSkeletonLoader from './views/MainSkeletonLoader.vue';

const body = document.body;
const setTheme = ref({});
const baseModel = ref('');
const themesData = Themes;

const isThemeLoaded = ref(false);
const isThemeSelected = ref(false);
const baseContainer = ref('');

const setDefaultTheme = () => {
	// stop applying if the placeholder theme is removed
	if (body.className !== 'placeholder-theme') return;
	// get a random theme
	const randomTheme =
      themesData[Math.floor(Math.random() * themesData.length)];
	// based on the user preference
	const userPreferTheme = localStorage.getItem('themePreference');

	if (randomTheme.themeType === userPreferTheme || userPreferTheme === null) {
		isThemeSelected.value = true;
		setTheme.value = randomTheme.ColorScheme;
	} else {
		// recurse
		setDefaultTheme();
	}
};

const applyTheme = () => {
	body.setAttribute('style', baseModel.value.attributes.style.value);
	isThemeLoaded.value = true;
	body.className = '';
	body.classList.add('set-palette');
	console.log('Theme applied');
};

setDefaultTheme();

onMounted(() => {
	setTimeout(() => {
		const { classList } = baseContainer.value;
	}, 2500);
});
</script>

<script>
export default {
	data() {
		return {
			currentRoute: null,
			windowWidth: window.innerWidth,
			paddingValue: 0,
			setRoutingResizeDelay: false,
			setAnimate: true
		};
	},

	mounted() {
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize);
		});

		setTimeout(() => {
			this.setDefaultPadding();
			this.setDefaultWidth();
			const body = document.body;
		}, 1000);

		// the animation disables the fix heaader bar actually

		setTimeout(() => {
			this.setAnimate = false;
		}, 4000);
	},

	beforeDestroy() {
		window.removeEventListener('resize', this.onResize);
	},

	computed: {
		currentRouteName() {
			return this.$route.name;
		}
	},

	watch: {
		windowWidth() {
			if (this.windowWidth > 1280) {
				this.paddingValue = Math.trunc(this.windowWidth - 1280) / 2;
				if (this.paddingValue > 400) this.paddingvalue = 400;
			} else if (this.windowWidth < 1280) {
				this.paddingValue = 0;
			}
		}
	},

	methods: {
		setWindowWidth(v) {
			this.windowWidth = v;
		},
		setDefaultWidth() {
			if (this.windowWidth > 1280) {
				this.paddingValue = Math.trunc(this.windowWidth - 1280) / 2;
				if (this.paddingValue > 400) this.paddingvalue = 400;
			} else if (this.windowWidth < 1280) {
				this.paddingValue = 0;
			}
		},

		setDefaultPadding() {
			this.paddingValue = Math.trunc(this.windowWidth - 1280) / 2;
			if (this.paddingValue > 400) this.paddingValue = 400;
		}
	}
};
</script>

<style>
  @import '../public/catppuccin.css';

  :root {
    --white: #ffffff;
    --whiteFilter: invert(100%) sepia(0%) saturate(7482%) hue-rotate(149deg)
      brightness(101%) contrast(100%);
    --gray0: #f8f8f8;
    --gray1: #eeeeee;
    --gray2: #dcdcdc;
    --oxfordBlue: #011936;
    --oxfordBlueFilter: invert(6%) sepia(27%) saturate(6747%) hue-rotate(203deg)
      brightness(96%) contrast(99%);
    --blackCoral: #465362;
    --morningBlue: #82a3a1;

    --gray8: #2d2d2d;
    --gray8T: #2d2d2dee;
    --gray9: #232323;
    --gray10: #161616;

    --cyan1: #d8fdf7;
    --cyan2: #c5fcf3;
    --cyan2T: #b1fbefee;
    --cyan3: #b1fbef;
    --cyan4: #9efaeb;
    --cyan5: #64f7de;
    --cyan6: #2af4d2;
    --cyan7: #0bd5b4;

    /* dark mode */

    /* solarized mode */
    --solar1: #002b36;
    --solar2: #073642;
    --solar2T: #073642ee;
    --solar3: #586e75;
    --solar4: #657b83;
    --solar5: #839496;
    --solar6: #93a1a1;
    --solar7: #eee8d5;
    --solar8: #fdf6e3;
    --solar8T: #fdf6e3ee;
    --solar9: #b58900;
    --solar10: #859900;
    --solar11: #2aa198;
    --solar12: #084a47;
    --solar11Filter: invert(50%) sepia(82%) saturate(361%) hue-rotate(126deg)
      brightness(91%) contrast(89%);

    /* starfall  */
    --starfall-bg: #1b2636;
    --starfall-text: #cacde2;
    --starfall-sel: #214d63ee;
    --starfall-highlight: #e278c4;
    --starfall2: #8de8b0;
  }

  @media (max-width: 370px) {
  }

  html,
  body {
    background-color: rgb(45, 45, 45);
    font-family: Helvetica, Roboto, sans-serif;
    color: var(--text);
    caret-color: var(--text);
    background-color: var(--bg);
    transition: background 500ms ease-in-out, color 1000ms ease-in-out,
      filter 2000ms ease-in-out, border-color 1000ms ease-in-out;
  }

  .divCenter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .div-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .set-palette {
    --bg: v-bind('setTheme.bg');
    --bg-sel: v-bind('setTheme.bgSelector');
    --svg-color: v-bind('setTheme.svgColor');
    --text: v-bind('setTheme.text');
    --ti-cursor-color: v-bind('setTheme.tiCursorColor');
    --text-highlight: v-bind('setTheme.textHighlight');
    --text-highlight-2: v-bind('setTheme.textHighlightAlt');
  }

  .solarized {
    --bg: var(--solar8);
    --bg-sel: var(--solar8T);
    --svg-color: var(--oxfordBlueFilter);
    --text: var(--solar12);
    --ti-cursor-color: var(--text);
    --text-highlight: var(--solar11);
    --text-highlight-2: var(--solar9);
  }

  .dark_solar {
    --bg: var(--solar1);
    --bg-sel: var(--solar2T);
    --svg-color: var(--solar11Filter);
    --text: var(--solar11);
    --ti-cursor-color: var(--text);
    --text-highlight: var(--solar10);
    --text-highlight-2: var(--solar10);
  }

  .placeholder-theme {
    --bg: var(--starfall-bg);
    --bg-sel: var(--starfall-sel);
    --svg-color: var(--whiteFilter);
    --text: var(--starfall-text);
    --ti-cursor-color: var(--text);
    --text-highlight: var(--starfall-highlight);
    --text-highlight-2: var(--starfall2);
  }

  .acrlyic {
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    backdrop-filter: blur(20px) saturate(180%);
    padding: 1rem 2rem;
    border-radius: 4px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  }

  h1,
  h2 {
    color: var(--text-highlight);
  }

  strong {
    color: var(--text-highlight-2);
  }
</style>
