<template>
	<div>
		<div>
			<div>
				<h2
					class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2"
				>
					Overview
				</h2>
				<br />
				<p class="lg:text-lg text-sm text-justify leading-6">
					&nbsp;&nbsp;&nbsp;&nbsp; Aaron is a full-stacked developer focused on
					VueJS and PHP Laravel. He also possess soft skills to further enhance
					himself as a web developer with skills such as communication skills,
					creativity, problem solving, and adaptability.
				</p>
			</div>
			<br />
			<br />
			<br />
			<h2
				class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2"
			>
				Frontend technology
			</h2>
			<br />
			<div>
				<p class="lg:text-lg text-sm text-justify">
					&nbsp;&nbsp;&nbsp;&nbsp; For the frontend, Aaron is currently focused
					on <strong>VueJS</strong> as his frontend framework development for
					frontend and utilizing <strong>TailwindCSS</strong> to style the
					content.
				</p>
			</div>
			<br />
			<!-- auto code block -->
			<div class="pt-5">
				<pre
					id="demo"
					class="lg:text-md md:text-sm text-[0.6rem] acrlyic selector"
				></pre>
				<div id="render" class="mt-5 acrlyic selector py-10 px-5"></div>
			</div>
			<div class="pt-[4rem]">
				<p class="lg:text-xl text-md text-justify">
					Other frontend technology includes:
				</p>
				<br />
				<div class="flex sm:flex-row flex-col gap-4">
					<ul class="basis-1/2 text-sm lg:text-lg md:text-md ml-5 list-disc">
						<li>ReactJS - <span class="highlight">3 months</span></li>
						<li>Bootstrap - <span class="highlight">3 months</span></li>
						<li>Three.js - <span class="highlight">3 months</span></li>
					</ul>
					<ul class="basis-1/2 text-sm lg:text-lg md:text-md ml-5 list-disc">
						<li>HTML - <span class="highlight">3 years</span></li>
						<li>CSS - <span class="highlight">3 years</span></li>
						<li>Javascript - <span class="highlight">1 year</span></li>
					</ul>
				</div>
			</div>
			<br />
			<!-- backend part -->
			<section class="pt-10">
				<h2
					class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2"
				>
					Backend technology
				</h2>
				<br />
				<div>
					<p class="lg:text-lg text-sm text-justify">
						&nbsp;&nbsp;&nbsp;&nbsp; For the backend, Aaron is currently focused
						on <strong>PHP</strong> development, along with
						<strong>Laravel</strong> as the MVC framework. He is also more
						focused on using SQL databases to store data as compared to NoSQL,
						such as MySQL.
					</p>
				</div>
				<div class="pt-10">
					<p class="lg:text-xl text-md text-justify">
						Other backend technology includes:
					</p>
					<br />
					<div class="">
						<div class="flex sm:flex-row flex-col">
							<ul
								class="basis-1/2 text-sm lg:text-lg md:text-md ml-5 list-disc"
							>
								<li>Python - <span class="highlight">1 year</span></li>
								<li>Java - <span class="highlight">3 months</span></li>
							</ul>
							<ul
								class="basis-1/2 text-sm lg:text-lg md:text-md ml-5 list-disc"
							>
								<li>Node - <span class="highlight">1 year</span></li>
								<li>MongoDB - <span class="highlight">3 months</span></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section class="pt-10">
				<h2
					class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2"
				>
					Tools
				</h2>
				<br />
				<div>
					<p class="lg:text-lg text-sm text-justify">
						&nbsp;&nbsp;&nbsp;&nbsp; Other than programming languages or
						frameworks, Aaron also utilize other tools to assist him on his
						development. For example, he uses <strong>Github</strong> as his
						choice of SVC tool, <strong>Markdown</strong> and
						<strong>Microsoft Office Suite</strong>
						create documentations.
					</p>
				</div>
				<div class="pt-10">
					<p class="lg:text-xl text-md text-justify">Other tools:</p>
					<br />
					<div class="">
						<div class="flex sm:flex-row flex-col">
							<ul
								class="basis-1/2 text-sm lg:text-lg md:text-md ml-5 list-disc"
							>
								<li>Markdown - Documentation</li>
								<li>Figma - Prototyping</li>
							</ul>
							<ul
								class="basis-1/2 text-sm lg:text-lg md:text-md ml-5 list-disc"
							>
								<li>Pixlr - Image editing</li>
								<li>HitFilm Express - Video editing</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
		<div>
			<div></div>
		</div>
	</div>
</template>

<script>
import TypeIt from 'typeit';
import anime from 'animejs/lib/anime.es.js';
import 'animate.css';

export default {
	methods: {
		fetch: function () {
			console.log(document.getElementById('render'));
		},
	},

	mounted() {
		const renderer = () => {
			var contents = document.getElementById('demo').innerHTML;
			document.getElementById('render').innerHTML = ''; // empty out elements in the code display
			var filter_contents = contents.replaceAll(
				'<span class="ti-cursor with-delay">|</span>',
				''
			);
			var filter_contents = filter_contents.replaceAll('&lt;', '<');
			var filter_contents = filter_contents.replaceAll('&gt;', '>');
			var dom = document.createElement('div');
			dom.innerHTML = filter_contents;
			dom.classList.add('rendered-contents');
			document.getElementById('render').appendChild(dom);
		};

		const animate_out = () => {
			var con = document.querySelector('.rendered-contents');
			con.classList.replace('rendered-contents', 'rem-rendered-contents');
		};

		new TypeIt('#demo', {
			speed: 30,
			waitUntilVisible: true,
			startDelay: 2000,
			startDelete: true,
			loop: true,
			// remove cursor when finished
			// afterComplete: function (instance) {
			//     instance.destroy();
			// }
		})
			.type('<', { speed: 30 })
			.type('div class=\'flex lg:flex-row flex-col\'>')
			.break()
			.type('   <')
			.type('div class=\'flex flex-row gap-4\'>')
			.break()
			.type('      <')
			.type('div class=\'bg-sky-600 px-2\'>1<')
			.type('/div>')
			.break()
			.type('      <')
			.type('div class=\'bg-rose-600 px-2\'>2<')
			.type('/div>')
			.break()
			.type('   <')
			.type('/div>')
			.break()
			.type('   <')
			.type('div class=\'flex flex-row gap-4\'>')
			.break()
			.type('      <')
			.type('div class=\'bg-lime-600 px-2\'>1<')
			.type('/div>')
			.break()
			.type('      <')
			.type('div class=\'bg-teal-600 px-2\'>2<')
			.type('/div>')
			.break()
			.type('   <')
			.type('/div>')
			.break()
			.type('<')
			.type('/div>')
			.pause(1000)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					renderer();
					setTimeout(() => {
						return resolve();
					}, 2000);
				});
			})
			.delete()
			.type('<')
			.type('lable> Email: <')
			.type('/lable>')
			.break()
			.type('<')
			.type('input placeholder=\'email\' class=\'p-1 px-3 w-20\'>', { speed: 50 })
			.pause(2000)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					animate_out();
					setTimeout(() => {
						return resolve();
					}, 500);
				});
			})
			.pause(500)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					renderer();
					setTimeout(() => {
						return resolve();
					}, 500);
				});
			})
			.pause(2000)
			.go();
	},
};
</script>

<style>
#render input {
	@apply w-20 rounded-lg border-2 border-pink-500;
}

.rendered-contents * {
	animation: fadeIn;
	animation-duration: 1s;
}

.rem-rendered-contents * {
	animation: fadeOut;
	animation-duration: 1s;
}

.highlight {
	color: var(--text-highlight);
	font-weight: bold;
}
</style>
