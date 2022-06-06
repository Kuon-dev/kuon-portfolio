<template>
  <!-- pc view port -->
  <!-- old navbar tags xl:px-[20rem] lg:px-[14rem] md:px-[10rem] sm:px-[7rem] px-[5rem]  -->
  <section class="pt-2 navbar fixed w-full divCenter ]">
    <div class="2xl:flex flex-row py-3 px-3 hidden">
      <div>
        <h1 class="text-4xl font-bold">
          <router-link to="/" @click="Scroll_Top">Aaron</router-link>
        </h1>
      </div>
      <div class="text-2xl inline-block px-10 pt-[0.4rem]">
        <ul class="flex flex-row">
          <li class="px-3">
            <button>
              <router-link to="/contact" @click="Scroll_Top"
                >Contact</router-link
              >
            </button>
          </li>
          <li class="px-3">
            <button>
              <router-link to="/skills" @click="Scroll_Top">Skills</router-link>
            </button>
          </li>
          <li class="px-3">
            <button>
              <router-link to="/work" @click="Scroll_Top">Works</router-link>
            </button>
          </li>
        </ul>
      </div>
      <!-- spacing -->
      <div>
        <div class="w-[30rem]"></div>
      </div>
      <!-- select theme icon && dropdown -->
      <div class="rightSide has-dpdn">
        <!-- select theme icon -->
        <button class="border-2 rounded-lg p-[0.35rem] svg_border">
          <img
            :src="svgSource"
            class="svgColor inline min-w-[30px] min-h-[30px]"
            width="30px"
            height="30px"
          />
        </button>
        <!-- drop down section  -->
        <ul
          class="p-3 px-5 mt-3 rounded-md dpdn translate-x-[-30%] drop-shadow-lg"
        >
          <li class="py-1">
            <button class="dpdn_item text-xl" id="light">Light</button>
          </li>
          <li class="py-1">
            <button class="dpdn_item text-xl" id="dark">Dark</button>
          </li>
          <li class="py-1">
            <button class="dpdn_item text-xl" id="solarized">Solarized</button>
          </li>
          <li class="py-1">
            <button class="dpdn_item text-xl" id="dark_solar">
              Dark Solarized
            </button>
          </li>
          <li class="py-1">
            <button class="dpdn_item text-xl" id="starfall">Starfall</button>
          </li>
        </ul>
      </div>
    </div>

    <!-- mobile viewport -->
    <div class="2xl:hidden flex flex-row py-3 items-center">
      <div>
        <h1 class="text-3xl font-bold sm:-ml-[0px]">
          <router-link to="/" @click="Scroll_Top" class="scroll-smooth"
            >Aaron</router-link
          >
        </h1>
      </div>
      <div>
        <div class="lg:w-[30rem] md:w-[20rem] sm:w-[15rem] w-20"></div>
      </div>
      <div class="rightSide flex flex-row">
        <div class="has-dpdn px-[2rem]">
          <!-- select theme icon -->
          <button class="border-2 rounded-md p-[0.35rem] svg_border">
            <img
              :src="svgSource"
              class="svgColor inline min-w-[25px] min-h-[25px]"
              width="20px"
              height="20px"
            />
          </button>
          <!-- drop down section  -->
          <ul
            class="p-3 px-5 mt-3 rounded-md dpdn 2xl:translate-x-[-40%] lg:translate-x-[-30%] translate-x-[-35%] drop-shadow-lg whitespace-nowrap acrlyic"
          >
            <li class="py-1 z-40">
              <button class="dpdn_item md:text-2xl text-3xl" id="MB_light">
                Light
              </button>
            </li>
            <li class="py-1">
              <button class="dpdn_item md:text-2xl text-3xl" id="MB_dark">
                Dark
              </button>
            </li>
            <li class="py-1">
              <button class="dpdn_item md:text-2xl text-3xl" id="MB_solarized">
                Solarized
              </button>
            </li>
            <li class="py-1">
              <button class="dpdn_item md:text-2xl text-3xl" id="MB_dark_solar">
                Dark Solarized
              </button>
            </li>
            <li class="py-1">
              <button class="dpdn_item md:text-2xl text-3xl" id="MB_starfall">
                Starfall
              </button>
            </li>
          </ul>
        </div>
        <div class="has-dpdn">
          <button class="">
            <div class="border-2 rounded-md p-[0.48rem] svg_border -mt-[1px]">
              <div class="h-[0.15rem] w-[1.5rem] navbar_burger"></div>
              <div class="h-[0.15rem] w-[1.5rem] navbar_burger mt-2"></div>
              <div class="h-[0.15rem] w-[1.5rem] navbar_burger mt-2"></div>
            </div>
          </button>
          <ul
            class="p-3 px-5 mt-2 rounded-md dpdn xl:translate-x-[-10%] translate-x-[-60%] drop-shadow-lg whitespace-nowrap"
          >
            <li class="py-1">
              <button class="dpdn_item md:text-2xl text-3xl">
                <router-link to="/contact" @click="Scroll_Top"
                  >Contact</router-link
                >
              </button>
            </li>
            <li class="py-1">
              <button class="dpdn_item md:text-2xl text-3xl">
                <router-link to="/skills" @click="Scroll_Top"
                  >Skills</router-link
                >
              </button>
            </li>
            <li class="py-1">
              <button class="dpdn_item md:text-2xl text-3xl">
                <router-link to="/work" @click="Scroll_Top">Works</router-link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  data(){
    return {
      "svgSource": "./assets/theme.svg"
    }
  },

	methods: {
		Scroll_Top() {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		},
	},
	mounted() {
		// DOM elements
		const lightBtn = document.getElementById('light');
		const darkBtn = document.getElementById('dark');
		const solarBtn = document.getElementById('solarized');
		const darkSolarBtn = document.getElementById('dark_solar');
		const starfall = document.getElementById('starfall');

		// Dom elements for mobile viewport
		const mb_lightBtn = document.getElementById('MB_light');
		const mb_darkBtn = document.getElementById('MB_dark');
		const mb_solarBtn = document.getElementById('MB_solarized');
		const mb_darkSolarBtn = document.getElementById('MB_dark_solar');
		const mb_starfall = document.getElementById('MB_starfall');

		const body = document.body;

		// local storage cache for themes
		const theme = localStorage.getItem('theme');
		if (theme) {
			body.classList.add(theme);
		}

		// event listiners
		lightBtn.onclick = () => {
			body.className = '';
			body.classList.add('light');
			localStorage.setItem('theme', 'light');
		};

		darkBtn.onclick = () => {
			body.className = '';
			body.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		};

		solarBtn.onclick = () => {
			body.className = '';
			body.classList.add('solarized');
			localStorage.setItem('theme', 'solarized');
		};

		darkSolarBtn.onclick = () => {
			body.className = '';
			body.classList.add('dark_solar');
			localStorage.setItem('theme', 'dark_solar');
		};

		starfall.onclick = () => {
			body.className = '';
			body.classList.add('starfall');
			localStorage.setItem('theme', 'starfall');
		};
		// mobile event listeners

		mb_lightBtn.onclick = () => {
			body.className = '';
			body.classList.add('light');
			localStorage.setItem('theme', 'light');
		};

		mb_darkBtn.onclick = () => {
			body.className = '';
			body.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		};

		mb_solarBtn.onclick = () => {
			body.className = '';
			body.classList.add('solarized');
			localStorage.setItem('theme', 'solarized');
		};

		mb_darkSolarBtn.onclick = () => {
			body.className = '';
			body.classList.add('dark_solar');
			localStorage.setItem('theme', 'dark_solar');
		};

		mb_starfall.onclick = () => {
			body.className = '';
			body.classList.add('starfall');
			localStorage.setItem('theme', 'starfall');
		};

		// anime({
		//     targets: elements,
		//     translateX: 270
		// })
	},
};
</script>

<style>
.navbar {
  /* background-color: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 50;
  left: 50%;
  transform: translateX(-50%);
  /* box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1); */
}
/* || drop down on focus  */
/* ======================================================================= */
.dpdn {
  /* positions  */
  position: absolute;
  opacity: 0;
  z-index: 40;
  visibility: hidden;

  /* typology */
  background-color: var(--bg-sel);
  color: var(--text);

  transition: opacity 0.15s ease-out;

  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
}

.has-dpdn:focus-within .dpdn {
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
}

/* || drop down text underline animation */
/* ======================================================================= */
.dpdn_item {
  color: var(--text);
  display: inline-block;
  position: relative;
  font-size: 1rem;
}

.dpdn_item:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--text);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.dpdn_item:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
/* ======================================================================= */

.navbar_burger {
  background-color: var(--text);
}
/* || SVG icons  */
/* ======================================================================= */
.svg_border {
  border-color: var(--text);
}

.svgColor {
  filter: var(--svg-color);
}
/* ======================================================================= */

/* test css sections (make sure to delete stuff below lol) */
html {
  scroll-behavior: smooth;
}

.router-link-exact-active {
  /* color: white; */
  font-weight: bold;
  text-decoration: underline;
  cursor: default;
  color: var(--text-highlight);
  text-underline-offset: 4.1px;
  text-decoration-thickness: auto;
}
</style>
