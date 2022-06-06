<template>
  <div :bind="tagSettings"></div>
</template>

<script>
export default {
	props: {
		tagSettings: {
			type: Array,
			required: false,
		},
	},

	mounted() {
		console.log(tagSettings);
	},
};
</script>

<style></style>
