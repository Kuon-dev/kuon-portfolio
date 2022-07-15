<template>
  <div class="flex items-center justify-between" ref="preview">
    <div class="flex flex-row flex-wrap">
      <div
        class="theme-selector-card-component rounded-lg block px-2 py-2 text-center my-3 mx-3 xl:w-48 w-full"
        @click="selectTheme(value)"
        @mouseenter="previewTheme(value, $event)"
        @mouseleave="revertTheme"
        v-for="value in themesData"
        :key="value.DomId"
        :style="
          checkCurrentTheme !== value.Name
            ? {
                backgroundColor: value.ColorScheme.bg,
                color: value.ColorScheme.textHighlight,
              }
            : {
                backgroundColor: value.ColorScheme.bgSelector,
                color: value.ColorScheme.textHighlight,
                fontWeight: 700,
              }
        "
      >
        <p class="">
          {{ value.Name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Themes from './Themes.json';
import { ref, computed, watchEffect } from 'vue';

const themesData = Themes;

const setTheme = ref({});
const preview = ref('');
const checkCurrentTheme = ref(document.body.classList);

const previewTheme = (theme, event) => {
	const { ColorScheme } = theme;

	setTheme.value = {
		bg: ColorScheme.bg,
		bgSelector: ColorScheme.bgSelector,
		svgColor: ColorScheme.svgColor,
		text: ColorScheme.text,
		tiCursorColor: ColorScheme.tiCursorColor,
		textHighlight: ColorScheme.textHighlight,
		textHighlightAlt: ColorScheme.textHighlightAlt,
	};
	// console.log(setTheme.value)
};

const revertTheme = () => {
	// revert the theme back
};

const selectTheme = (theme) => {
	// TODO
	// Set to local storage on click
	// Permenantly bind the styles onto the body

	const body = document.body;
	body.className = '';
	body.setAttribute('style', preview.value.attributes.style.value);

	body.classList.add('palette');

	checkCurrentTheme.value = theme.Name;
};

// TODO
// DONE: Set each card has their own theme
// Trigger each card color schemes on hover
// Add a close button or click outside of the overlay will close it
</script>

<style>
.theme-selector-card-component {
  background-color: var(--bg-sel);
  color: var(--text);
}

.palette {
  --bg: v-bind('setTheme.bg');
  --bg-sel: v-bind('setTheme.bgSelector');
  --svg-color: v-bind('setTheme.svgColor');
  --text: v-bind('setTheme.text');
  --ti-cursor-color: v-bind('setTheme.tiCursorColor');
  --text-highlight: v-bind('setTheme.textHighlight');
  --text-highlight-2: v-bind('setTheme.textHighlightAlt');
}
</style>
