<template>
  <div class="pt-32 div-center w-full overflow-hidden animate-pulse">
    <div class="w-96">
      <p class="text-2xl mt-2 ml-5">loading...</p>
      <div class="w-full mt-2 border-2 rounded-lg loading-container">
        <div class="loading-view h-5 w-1 rounded-md" />
      </div>
    </div>
  </div>
</template>

<script>
// eslint-ignore-next-line
import anime from 'animejs/lib/anime.es.js';

export default {
	emits: ['apply-theme'],
	methods: {
		setApplyTheme() {
			this.$emit('apply-theme', true);
		},
	},
	mounted() {
		const animation = () => {
			const mutateLoading = anime({
				targets: '.loading-view',
				easing: 'easeInOutQuad',
				duration: 1500,
				width: '100%',
			});

			setTimeout(() => {
				this.setApplyTheme();
			}, 2000);
		};

		setTimeout(animation, 500);
	},
};
</script>

<style>
.loading-container {
  border-color: var(--text);
}

.loading-view {
  background-color: var(--text-highlight);
}
</style>
