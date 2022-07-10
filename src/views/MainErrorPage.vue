<template>
  <div class="divCenter flex flex-col gap-10">
    <div
      class="pt-5 flex lg:flex-row flex-col lg:gap-[3rem] gap-5 items-center"
    >
      <h2 class="text-5xl">404</h2>
      <p class="text-5xl lg:flex hidden">|</p>
      <p class="text-3xl">Oops! The page you requested could not be found...</p>
    </div>
    <div>
      <button
        class="return_to_home_btn border-2 p-2 px-5 text-xl lg:mt-[3rem] mt-5 transition ease-in-out"
      >
        <router-link to="/">Back to home page</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.return_to_home_btn {
  border-color: var(--text-color);
  border-radius: 7px;
}

.return_to_home_btn:hover {
  color: var(--text-highlight-2);
  border-radius: 7px;
}
</style>
