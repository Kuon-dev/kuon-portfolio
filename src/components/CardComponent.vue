<template>
  <div>
    <div
      class="selector h-[8rem] w-[10rem] div-center py-1 pt-2 rounded-lg hover:border-2 transition ease-in-out border-wrapper-hover hover:rotate-12 icon-highlight"
      @mouseover="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <div
        class="flex flex-col items-center gap-2 animate__animated animate__fadeIn animate__fast"
      >
        <i :class="image" class="text-7xl" style="font-weight: normal" />
        <p class="font-bold whitespace-nowrap">{{ title }}</p>
      </div>

      <div
        class="animate__animated animate__fadeIn animate__fast text-center py-2 px-1 overflow-hidden hidden"
        v-show="isHovering"
        :class="isHovering ? null : 'animate__fadeOut'"
      >
        <p class="">{{ description }}</p>
        <p class="icon-highlight">{{ duration }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'CardComponent',
	props: {
		title: {
			type: String,
			required: false,
		},
		description: {
			type: String,
			required: false,
		},
		duration: {
			type: String,
			required: false,
		},
		image: {
			type: String,
			required: false,
		},
	},
	data() {
		return {
			isHovering: false,
		};
	},
	mounted() {
	},
};
</script>

<style>
.border-card-wrapper {
  border-color: var(--text-highlight-2);
}

.border-wrapper-hover {
  border-color: var(--text-highlight);
}

.div-center {
  display: flex;
  align-items: end;
  justify-content: center;
}

.icon-highlight {
  color: var(--text-highlight-2);
}

.icon-highlight:hover {
  color: var(--text-highlight);
}
</style>
