<template>
  <div class="flex items-center justify-between" ref="preview">
    <div
      class="lg:inline-grid lg:grid-cols-3 lg:gap-x-8 inline-grid grid-cols-1 w-full justify-center"
    >
      <div
        class="div-center theme-selector-card-component rounded-lg px-2 py-2 text-center my-3 mx-3"
        @click="selectTheme(value)"
        @mouseenter="previewTheme(value)"
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

const body = document.body;
const setTheme = ref({});
const preview = ref('');
const checkCurrentTheme = ref(document.body.classList[0]);

const previewTheme = (theme) => {
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
};

const selectTheme = (theme) => {
	body.className = '';
	body.setAttribute('style', preview.value.attributes.style.value);

	body.classList.add('palette');

	checkCurrentTheme.value = theme.Name;
	localStorage.setItem('themePreference', theme.themeType);
};
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
