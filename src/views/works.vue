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
			<!-- works 1 -->
			<div class="flex 2xl:flex-row flex-col xl:gap-[3rem] gap-[3rem]">
				<div class="xl:max-w-[40rem] w-auto rounded-lg border-2">
					<img src="../assets/images/work1.png" class="bg-auto bg-center" />
				</div>
				<div class="pt-2">
					<h2
						class="lg:text-xl text-lg font-bold underline underline-offset-8 decoration-2"
					>
						Shopify clone
					</h2>
					<br />
					<p class="lg:text-md text-sm text-justify leading-6">
						Shopify is a popular E-commerce website that allows the users to
						setup an online store and sell their products. This project aims to
						clone the basic functionalities of shopfiy clone such as user
						interface, user authentication functionalities, along with adding
						products to the database.
						<br />
						<br />
						This project is Aaron's first project which is developed using VueJS
						and Laravel framework.
						<br />
						<br />
						<strong
							><a href="https://github.com/Kuon-dev/Shopify-Clone"
								>View this project on Github</a
							></strong
						>
					</p>
				</div>
			</div>
			<br />
			<br />
			<br />
			<!-- works 2 -->
			<div class="flex 2xl:flex-row-reverse flex-col xl:gap-[3rem] gap-[2rem]">
				<div class="xl:max-w-[40rem] w-auto rounded-lg border-2">
					<img src="../assets/images/work2.png" class="bg-auto bg-center" />
				</div>
				<div class="pt-2">
					<h2
						class="lg:text-xl text-lg font-bold underline underline-offset-8 decoration-2"
					>
						Mersing website with AI Chatbot
					</h2>
					<br />
					<p class="lg:text-md text-sm text-justify leading-6">
						Mersing is a location in West Malaysia. The purpose of this wesite
						is to boost the tourism industry of this location by making a
						chatbot powered by Microsoft Virtual Agent.
						<br />
						<br />
						The chatbot is placed on top of a demo Mersing web browser which is
						built on Vue.JS and TailwindCSS.
					</p>
					<br />
					<br />
					<strong
						><a href="https://github.com/Kuon-dev/IaI-project"
							>View this project on Github</a
						></strong
					>
				</div>
			</div>
		</div>

		<br />
		<br />
		<br />

		<!-- works 3 -->
		<div class="flex 2xl:flex-row flex-col xl:gap-[3rem] gap-[2rem]">
			<div class="xl:max-w-[40rem] w-auto rounded-lg border-2">
				<img src="../assets/images/work3.png" class="bg-auto bg-center" />
			</div>
			<div class="pt-2">
				<h2
					class="lg:text-xl text-lg font-bold underline underline-offset-8 decoration-2"
				>
					Paws Heaven
				</h2>
				<br />
				<p class="lg:text-md text-sm text-justify leading-6">
					Paws Heaven is an online ecommerce website developed by a team of 3
					developers. Paws Heaven offers a variety of pet products such as food,
					vitamins and cages.
					<br />
					<br />
					Paws Heaven is developed in primary in PHP with MYSQL as the database
					to store information such as user and product details.
					<br />
					<br />
					<strong
						><a href="https://github.com/Kuon-dev/WDT-assignment"
							>View this project on Github</a
						></strong
					>
				</p>
			</div>
		</div>
	</section>
</template>

<script>
import TypeIt from 'typeit';

export default {
	data() {},
	methods: {},
	mounted() {
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

		console.log('test');
	},
};
</script>

<style></style>
