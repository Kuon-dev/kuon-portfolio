<template>
  <section>
    <div class="divCenter">
      <p
        id="works_intro"
        class="lg:text-xl text-md acrlyic w-auto text-center selector"
      ></p>
    </div>
    <br />
    <div>
      <h2 class="text-2xl font-bold underline underline-offset-1">Works</h2>
    </div>
    <br />
    <div class="flex flex-col divCenter pt-5">
      <!-- works loop -->
      <div
        class="flex 2xl:flex-row flex-col xl:gap-[3rem] gap-[3rem] 2xl:mb-[5rem] mb-[3rem]"
        v-for="(value, index) in worksData"
        :key="index"
        :class="
          index % 2 !== 0 && !isInMobile
            ? '2xl:flex-row-reverse flex-col-reverse'
            : null
        "
      >
        <div class="xl:max-w-[40rem] w-auto rounded-lg border-2">
          <img :src="value.Image" class="bg-auto bg-center rounded-md" />
        </div>
        <div class="2xl:pt-2 xl:max-w-[40rem]">
          <h2
            class="lg:text-xl text-lg font-bold underline underline-offset-8 decoration-2"
          >
            {{ value.Title }}
          </h2>
          <p class="lg:text-lg text-sm text-justify leading-6 py-2 2xl:py-5">
            {{ value.Description }}
          </p>
          <p
            class="lg:text-lg text-sm text-justify leading-6 2xl:py-2 py-3"
            v-if="value.Sidenote !== ''"
          >
            {{ value.Sidenote }}
          </p>
          <br />
          <strong
            ><a :href="value.Github">View this project on Github</a>
          </strong>
          <TagsComponent :tagSettings="value.Tags"> </TagsComponent>
          <div v-if="isInMobile" class="mt-3">
            <br />
            <hr
              v-show="index !== indexMaxLength"
              style="border-color: var(--text-highlight)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TypeIt from 'typeit';
import Works from '../components/MainWorksContent.json';
import TagsComponent from '../components/TagsComponent.vue';

export default {
	components: {
		TagsComponent,
	},
	data() {
		return {
			worksData: Works,
			indexMaxLength: 0,
			isInMobile: false,
		};
	},
	methods: {},
	mounted() {
		this.indexMaxLength = this.worksData.length - 1;
		new TypeIt('#works_intro', {
			speed: 50,
			waitUntilVisible: true,
			startDelay: 2000,
			startDelete: true,
			// remove cursor when finished
			afterComplete: function (instance) {
				instance.destroy();
			},
		})
			.type('Here are a list of my personal projects!')
			.go();

		if (window.innerWidth < 1536) {
			this.isInMobile = true;
		}
	},
};
</script>

<style></style>
