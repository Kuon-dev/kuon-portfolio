<template>
  <div class="divCenter flex-col pt-10">
    <form
      @submit.prevent="submitHandler($event)"
      class="question-container flex flex-col py-10 sm:px-10 px-8 selector max-w-[18rem] sm:max-w-[25rem]"
    >
      <lable class="text-xl sm:text-2xl sm:py-5 text-center font-bold"
        >Send me an anonymous message!</lable
      >
      <textarea
        type="textbox"
        name="question"
        placeholder="Enter your message here..."
        value=""
        class="border-2 rounded-lg py-2 px-5 h-auto text-xl mt-5"
      >
      </textarea>
      <div ref="hasError" class="sm:mt-5 text-center error-text"></div>
      <div class="m-auto">
        <button class="">submit</button>
      </div>
    </form>
    <div class="flex flex-col divCenter py-10">
      <div class="text-2xl pb-10">List of questions sent:</div>
      <div
        v-show="submittedQuestions"
        class="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2"
      >
        <CardComponent
          ref="submittedQuestions"
          class="px-1 sm:px-5 py-3 left-border-one transition ease-in-out delay-100 flex"
          v-for="data in submittedQuestions"
          :key="data.id"
          :title="data.question"
          :is-paragraph="true"
          :arg-one="data.answer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import CardComponent from '../components/CardComponent.vue';

export default {
	components: {
		CardComponent
	},
	setup() {
		const backendPort = import.meta.env.VITE_API_ENDPOINT;
		const url = backendPort + '/ngl';

		const hasError = ref('');

		const submitHandler = (e) => {
			const { value } = e.target.question;

			if (!value) {
				hasError.value.innerHTML =
            'Sorry I do not want empty response to flood my database, thanks';
				return;
			}

			const specialChars = /[`@#$%^&*()_\[\]{};':"\\|<>\/~]/;
			if (specialChars.test(value)) {
				hasError.value.innerHTML = 'Special characters are not allowed';
				return;
			}

			const payload = {
				question: value,
				answer: null
			};

			(async () => {
				const rawResponse = await fetch(url, {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(payload)
				})
					.then((response) => response.json())
					.then((data) => {})
					.catch((error) => {
						console.log(error);
					});
				const content = await rawResponse?.json();
				fetchAllQuestions();
			})();
		};

		const submittedQuestions = ref('null');
		const fetchAllQuestions = () => {
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					submittedQuestions.value = data;
				})
				.catch((error) => {
					console.log(error);
				});
		};

		fetchAllQuestions();

		return {
			submitHandler,
			fetchAllQuestions,
			submittedQuestions,
			hasError
		};
	}
};
</script>

<style scoped>
  textarea {
    background-color: var(--background-color);
    border-color: var(--text-highlight-2);
  }

  input:focus-within {
    background-color: var(--background-color);
    border-color: var(--text-highlight-2);
  }

  .error-text {
    color: var(--text-highlight);
  }

  button {
    background-color: var(--text-highlight-2);
    @apply rounded-lg mt-10 py-5 px-3 w-32 font-bold;
    color: var(--bg);
  }

  .question-container {
    border-radius: 2rem;
  }
</style>
