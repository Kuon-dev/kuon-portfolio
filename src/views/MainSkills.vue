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
          <strong> VueJS and PHP Laravel </strong>. He also possess soft skills
          to further enhance himself as a web developer with skills such as
          communication skills, creativity, problem solving, and adaptability.
        </p>
      </div>
      <br />
      <br />
      <br />
      <h2
        class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2"
      >
        My technology
      </h2>
      <SkillBarContent />

      <!-- auto code block -->

      <div class="pt-[3.5rem] sm:px-10 transition ease-in-out">
        <div
          class="lg:text-md md:text-sm text-[0.6rem] acrlyic selector min-h-[10rem] py-2 px-1 rounded-xl"
        >
          <div class="flex flex-row ml-2">
            <div
              class="code-block-terminal sm:h-4 h-2 sm:w-4 w-2 bg-rose-500"
            />
            <div
              class="code-block-terminal sm:h-4 h-2 sm:w-4 w-2 bg-yellow-500"
            />
            <div
              class="code-block-terminal sm:h-4 h-2 sm:w-4 w-2 bg-green-500"
            />
          </div>
          <div class="code-block-lines flex h-[0.05rem] w-full" />
          <div
            class="flex flex-row mt-3 leading-4 md:leading-6 overflow-x-scroll relative"
          >
            <!-- number line -->
            <div>
              <div
                v-for="n in 12"
                :key="n"
                class="flex flex-col sm:ml-3 text-center"
              >
                {{ n }}
              </div>
            </div>
            <!-- vertical line -->
            <div
              class="code-block-lines min-h-[10rem] w-[0.05rem] mx-2 sm:mx-3 flex selector leading-4 md:leading-6"
            />
            <!-- contents to render -->
            <div>
              <code id="demo" class="" ref="textField" />
            </div>
          </div>
        </div>

        <div
          id="render"
          class="mt-5 acrlyic selector py-10 px-5 rounded-xl"
          ref="contentRenderer"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import TypeIt from 'typeit';
// import Prism from 'prismjs';
import 'animate.css';
import { ref, computed, onMounted } from 'vue';
import SkillBarContent from '../components/SkillBarContent.vue';
import Skills from '../components/MainSkillsContent.json';

export default {
	data() {
		return {
			skillsData: Skills,
			paddingValue: 0,
			loaded: false
		};
	},
	props: {
		responsiveValue: {
			type: Number,
			default: 0
		}
	},

	components: {
		SkillBarContent
	},
	methods: {
		fetch: function () {
			console.log(document.getElementById('render'));
		}
	},

	setup() {
		let contentRenderer = ref('');
		let textField = ref('');

		const clearCodeBlock = () => {
			contentRenderer.value.innerHTML = null;
		};

		const clearTerminalBlock = () => {
			textField.value.innerText = null;
		};

		const renderOutTextField = computed(() => {
			if (
				textField.value.innerText === null ||
          textField.value.innerText === undefined
			)
				return null;
			let content = textField.value.innerText;
			content = content.replaceAll('|', '');
			return content;
		});

		onMounted(() => {
			window.Prism = window.Prism || {};
			window.Prism.manual = true;
			setTimeout(() => {}, 5000);
		});

		return {
			contentRenderer,
			textField,
			clearCodeBlock,
			clearTerminalBlock,
			renderOutTextField
		};
	},

	watch: {
		windowWidth() {
			if (this.windowWidth > 1280) {
				this.paddingValue = Math.trunc(this.windowWidth - 1280) / 2;
			} else if (this.windowWidth < 1280) {
				this.paddingValue = 0;
			}
		}
	},

	mounted() {
		const renderer = () => {
			const contents = document.getElementById('demo').innerHTML;
			document.getElementById('render').innerHTML = ''; // empty out elements in the code display
			let filter_contents = contents.replaceAll(
				'<span class="ti-cursor with-delay">|</span>',
				''
			);
			filter_contents = filter_contents.replaceAll('&lt;', '<');
			filter_contents = filter_contents.replaceAll('&gt;', '>');
			filter_contents = filter_contents.replaceAll('&nbsp;', '');

			filter_contents = filter_contents.replaceAll(
				'<span class="html-tag">div</span>',
				'div'
			);
			filter_contents = filter_contents.replaceAll(
				'<span class="html-attribute">class</span>',
				'class'
			);
			filter_contents = filter_contents.replaceAll(
				'<span class="html-tag">lable</span>',
				'lable'
			);
			filter_contents = filter_contents.replaceAll(
				'<span class="html-tag">input</span>',
				'input'
			);
			filter_contents = filter_contents.replaceAll(
				'<span class="html-attribute">placeholder</span>',
				'placeholder'
			);

			const dom = document.createElement('div');
			dom.innerHTML = filter_contents;
			dom.classList.add('rendered-contents');
			document.getElementById('render').appendChild(dom);
		};

		const animate_out = () => {
			const con = document.querySelector('.rendered-contents');
			con.classList.replace('rendered-contents', 'rem-rendered-contents');
		};

		const syntaxHighlighter = () => {
			let contents = document.getElementById('demo').innerHTML;

			contents = contents.replaceAll(
				'<span class="ti-cursor with-delay">|</span>',
				''
			);
			// temporary remove highlight
			contents = contents.replaceAll(
				'<span class="html-tag">div</span>',
				'div'
			);
			contents = contents.replaceAll(
				'<span class="html-tag">lable</span>',
				'lable'
			);
			contents = contents.replaceAll(
				'<span class="html-tag">input</span>',
				'input'
			);
			contents = contents.replaceAll(
				'<span class="html-attribute">class</span>',
				'class'
			);
			contents = contents.replaceAll(
				'<span class="html-attribute">placeholder</span>',
				'placeholder'
			);

			// add highlight
			let filterContents = contents.replaceAll(
				'class',
				'<span class="html-attribute">class</span>'
			);
			filterContents = filterContents.replaceAll(
				'placeholder',
				'<span class="html-attribute">placeholder</span>'
			);
			filterContents = filterContents.replaceAll(
				'div',
				'<span class="html-tag">div</span>'
			);
			filterContents = filterContents.replaceAll(
				'lable',
				'<span class="html-tag">lable</span>'
			);
			filterContents = filterContents.replaceAll(
				'input',
				'<span class="html-tag">input</span>'
			);

			// add back the cursor or else the typeit will break
			filterContents =
          filterContents + '<span class="ti-cursor with-delay">|</span>';
			document.getElementById('demo').innerHTML = filterContents;
		};

		new TypeIt('#demo', {
			speed: 30,
			waitUntilVisible: true,
			startDelay: 2000,
			startDelete: true,
			loop: true
			// remove cursor when finished
			// afterComplete: function (instance) {
			//     instance.destroy();
			// }
		})
			.type('<', { speed: 30 })
		// line 1
			.type('div class=\'flex lg:flex-row flex-col\'>')
			.break()
			.pause(1)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					syntaxHighlighter();
					setTimeout(() => {
						return resolve();
					}, 1);
				});
			})
			.type('&nbsp&nbsp<')

		// line 2
			.type('div class=\'flex flex-row gap-4\'>')
			.break()
			.pause(1)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					syntaxHighlighter();
					setTimeout(() => {
						return resolve();
					}, 1);
				});
			})

			.type('&nbsp&nbsp&nbsp&nbsp<')

		// line 3
			.type('div class=\'bg-sky-600 px-2\'>1<')
			.type('/div>')
			.break()
			.pause(1)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					syntaxHighlighter();
					setTimeout(() => {
						return resolve();
					}, 1);
				});
			})

			.type('&nbsp&nbsp&nbsp&nbsp<')

		// line 4
			.type('div class=\'bg-rose-600 px-2\'>2<')
			.type('/div>')
			.break()
			.pause(1)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					syntaxHighlighter();
					setTimeout(() => {
						return resolve();
					}, 1);
				});
			})

			.type('&nbsp&nbsp<')

		// line 5
			.type('/div>')
			.break()
			.pause(1)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					syntaxHighlighter();
					setTimeout(() => {
						return resolve();
					}, 1);
				});
			})

			.type('&nbsp&nbsp<')
		// line 6
			.type('div class=\'flex flex-row gap-4\'>')
			.break()
			.pause(1)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					syntaxHighlighter();
					setTimeout(() => {
						return resolve();
					}, 1);
				});
			})

			.type('&nbsp&nbsp&nbsp&nbsp<')
		// line 7
			.type('div class=\'bg-lime-600 px-2\'>1<')
			.type('/div>')
			.break()
			.pause(1)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					syntaxHighlighter();
					setTimeout(() => {
						return resolve();
					}, 1);
				});
			})

			.type('&nbsp&nbsp&nbsp&nbsp<')
		// line 8
			.type('div class=\'bg-teal-600 px-2\'>2<')
			.type('/div>')
			.break()
			.pause(1)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					syntaxHighlighter();
					setTimeout(() => {
						return resolve();
					}, 1);
				});
			})

			.type('&nbsp&nbsp<')
		// line 9
			.type('/div>')
			.break()
			.pause(1)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					syntaxHighlighter();
					setTimeout(() => {
						return resolve();
					}, 1);
				});
			})

			.type('<')
		// line 10
			.type('/div>')
			.pause(1)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					syntaxHighlighter();
					setTimeout(() => {
						return resolve();
					}, 1);
				});
			})

			.pause(1000)
		// reset
			.exec(async () => {
				await new Promise((resolve, reject) => {
					this.clearCodeBlock();
					renderer();
					setTimeout(() => {
						return resolve();
					}, 2000);
				});
			})
			.delete()
			.pause(1000)
			.type('<')
		// second phase
		// line 1
			.type('lable> Email: <')
			.type('/lable>')
			.break()
			.pause(1)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					syntaxHighlighter();
					setTimeout(() => {
						return resolve();
					}, 1);
				});
			})

			.type('<')
		// line 2
			.type('input placeholder=\'email\' class=\'p-1 w-20\'>', { speed: 50 })
			.pause(1)
			.exec(async () => {
				await new Promise((resolve, reject) => {
					syntaxHighlighter();
					setTimeout(() => {
						return resolve();
					}, 1);
				});
			})

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
					this.clearCodeBlock();
					renderer();
					setTimeout(() => {
						return resolve();
					}, 500);
				});
			})
			.pause(2000)
			.go();
	}
};
</script>

<style>
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

  .code-block-lines {
    color: var(--text);
    background-color: var(--text-highlight-2);
  }

  .code-block-terminal {
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    display: block;
  }

  #demo {
    white-space: nowrap;
    position: absolute;
    display: block;
  }

  #demo .html-tag {
    color: var(--text-highlight-2);
  }

  #demo .html-attribute {
    color: var(--text-highlight);
  }

  #demo .html-class {
    color: var(--text-highlight-2);
  }
</style>
