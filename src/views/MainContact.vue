<template>
  <div>
    <section class="">
      <h2
        class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2"
      >
        Get in touch
      </h2>
      <br />
      <p class="lg:text-lg text-sm text-justify leading-6">
        &nbsp;&nbsp;&nbsp;&nbsp; Have an idea you want it to become a reality? I
        can make it happen for you! Don't feel hesitated to contact me, I will
        be responding to your messages as soon as possible.
      </p>
    </section>
    <section
      class="divCenter pt-5 8xl:ml-[-70rem] 7xl:ml-[-55rem] 6xl:ml-[-20rem] 5xl:ml-[-10rem] 4xl:ml-[-5rem] 3xl:ml-[-2rem] xl:mr-[40rem] lg:mr-[27rem] md:mr-[15rem] sm:ml-[0rem] ml-[3rem] flex flex-col w-full"
    >
      <div id="Contact_ThreeContainer" class="-mt-10 pl-20 hidden"></div>
    </section>
    <section class="pt-5">
      <p class="lg:text-lg text-sm text-justify leading-6">
        You can reach me by emailing me at
        <strong>aaronlyn88@gmail.com</strong>. I will be able to reply to your
        mail within 2 days of working days.
      </p>
    </section>
    <br />
    <section class="">
      <p class="lg:text-lg text-sm text-justify leading-6">
        You can visit my
        <strong class="underline"
          ><router-link to="/work">portfolio</router-link></strong
        >
        to view my works. Alternatively, you can visit my
        <strong class="underline"
          ><a href="https://github.com/Kuon-dev">Github Profile</a></strong
        >
        to view my projects posted on Github
      </p>
    </section>
    <section class="pt-10 hidden">
      <div class="">
        <h2
          class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2"
        >
          Send me a message!
        </h2>
      </div>
      <div class="divCenter pt-10">
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                v-model="firstName"
                type="text"
                placeholder="Jane"
              />
              <p class="text-red-500 text-xs italic" v-if="showNoFirstName">
                Please fill out this field.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name (optional)
              </label>
              <input
                class="appearance-none block w-full border rounded py-3 px-4 leading-tight focus:outline-none"
                v-model="lastName"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-xs font-bold mb-2"
                for="grid-password"
              >
                E-mail
              </label>
              <input
                class="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                v-model="userEmail"
                type="email"
              />
              <p class="text-red-500 text-xs italic" v-if="showNoEmail">
                Please fill out this field.
              </p>
              <p class="text-red-500 text-xs italic" v-if="showInvalidEmail">
                Email entered is invalid
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-xs font-bold mb-2"
                for="grid-password"
              >
                Message
              </label>
              <textarea
                class="no-resize block w-full appearance-none border rounded py-3 px-4 mb-3 leading-tight focus:outline-none h-48 resize-none"
                placeholder="Enter your message here"
                v-model="userText"
              />
              <p class="text-red-500 text-xs italic" v-if="showNoMessage">
                Please fill out this field.
              </p>
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-2/3">
              <button
                class="shadow focus:shadow-outline focus:outline-none font-bold py-4 px-10 rounded"
                @click.prevent="submitHandler($event)"
              >
                Submit
              </button>
              <p class="text-red-500 text-xs italic pt-5" v-if="failedPost">
                An error has occurred, please try again later.
              </p>
              <p class="success text-md pt-5" v-if="showPostSuccess">
                Your message has been received!
              </p>
            </div>
            <div class="md:w-1/3"></div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		// link your backend port API in the dotenv file, otherwise you won't be able to receive messages
		// for example in .env file
		// VITE_API_ENDPOINT = http://localhost:4000

		const backendPort = import.meta.env.VITE_API_ENDPOINT;
		const url = backendPort + '/message';

		const failedPost = ref(false);

		const firstName = ref('');
		const lastName = ref('');
		const userEmail = ref('');
		const userText = ref('');

		const showNoFirstName = ref(false);
		const showNoEmail = ref(false);
		const showNoMessage = ref(false);
		const showInvalidEmail = ref(false);
		const showPostSuccess = ref(false);

		const submitHandler = (e) => {
			// reset user input
			showNoFirstName.value = false;
			showNoEmail.value = false;
			showNoMessage.value = false;
			showInvalidEmail.value = false;
			showPostSuccess.value = false;
			failedPost.value = false;

			// display error message if input is empty
			if (!firstName.value) showNoFirstName.value = true;
			if (!userEmail.value) showNoEmail.value = true;
			if (!userText.value) showNoMessage.value = true;

			// if any input are empty stop the function
			if (showNoMessage.value || showNoEmail.value || showNoFirstName.value)
				return;

			// email regex
			const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
			const validEmail = userEmail.value.match(emailValidator);
			if (!validEmail) {
				showInvalidEmail.value = true;
				return;
			}

			// payload for post request
			const payload = {
				firstName: firstName.value,
				lastName: lastName.value ?? '',
				userEmail: userEmail.value,
				userMessage: userText.value
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
					.catch((error) => {
						console.log(error);
						failedPost.value = true;
					});
				if (!failedPost.value) showPostSuccess.value = true;
			})();
		};

		return {
			submitHandler,
			firstName,
			lastName,
			userEmail,
			userText,
			showNoFirstName,
			showNoEmail,
			showNoMessage,
			showInvalidEmail,
			showPostSuccess,
			failedPost
		};
	}
};
</script>

<style scoped>
  /* scoped so the styles aren't global and only applied on this file */
  hr {
    border-color: var(--text);
  }

  input {
    background-color: var(--bg-sel);
    border-color: var(--text-highlight);
  }

  input:focus {
    border-color: var(--text-highlight-2);
  }

  textarea {
    background-color: var(--bg-sel);
    border-color: var(--text-highlight);
  }

  textarea:focus {
    border-color: var(--text-highlight-2);
  }

  button {
    background-color: var(--bg-sel);
  }

  .success {
    color: var(--text-highlight);
  }
</style>
