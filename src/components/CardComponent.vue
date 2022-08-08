<template>
  <div>
    <div
      class="selector py-1 pt-2 rounded-lg transition ease-in-out border-wrapper-hover"
      @mouseenter="isHovering = true"
      @mouseleave="
        isHovering = false;
        isClicked = false;
      "
      @click="isClicked = !isClicked"
      :class="[
        isParagraph
          ? 'px-2 overflow-y-scroll h-[12rem] w-[12rem] icon-highlight-focus'
          : 'div-center hover:rotate-6 w-[10rem] h-[8rem] icon-highlight hover:border-2',
        isClicked && isParagraph
          ? 'icon-highlight border-2'
          : 'paragraph-option'
      ]"
    >
      <div
        class="flex flex-col items-center gap-2 animate__animated animate__fadeIn animate__fast"
        v-if="!isParagraph"
      >
        <i :class="image" class="text-7xl" style="font-weight: normal" />
        <p class="font-bold whitespace-nowrap">
          {{ title }}
        </p>
      </div>
      <div v-else>
        <div class="transition ease-in-out px-2 text-lg">
          {{ isClicked ? argOne : title }}
        </div>
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
			default: null
		},
		image: {
			type: String,
			required: false,
			default: null
		},
		argOne: {
			type: String,
			required: false,
			default: null
		},
		argTwo: {
			type: String,
			required: false,
			default: null
		},
		isParagraph: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			isHovering: false,
			isClicked: false
		};
	},
	mounted() {}
};
</script>

<style>
  .border-card-wrapper {
    border-color: var(--text-highlight-2);
    user-select: none;
  }

  .border-wrapper-hover {
    border-color: var(--text-highlight);
    user-select: none;
  }

  .div-center {
    display: flex;
    align-items: end;
    justify-content: center;
  }

  .paragraph-option {
    color: var(--text-highlight-2);
  }

  .icon-highlight {
    color: var(--text-highlight-2);
  }

  .icon-highlight:hover {
    color: var(--text-highlight);
  }
</style>

<style scoped>
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--text-highlight-2);
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar {
    width: 20px;
  }
</style>
