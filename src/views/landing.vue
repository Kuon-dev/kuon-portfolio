<template>
  <div class="flex flex-col gap-[2.5rem]">
    <!-- introduction section -->
    <div class="divCenter">
      <p id="landing_intro" class="lg:text-xl text-md acrlyic w-auto text-center selector"></p>
    </div>
    <section class="">
      <h2 class="text-4xl font-bold">Aaron Lyn</h2>
      <p class="text-lg">Professional developer</p>
    </section>
    <section class="pt-2">
      <h2 class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2">Professional background</h2>
      <br>
      <p class="lg:text-lg text-sm text-justify leading-6">
        &nbsp;&nbsp;&nbsp;&nbsp;
        Professional web developer with 2 years of experience capable professional looking and user-friendly websites from stratch and
        writes <strong>performance optimized, reusable and refactorable codes</strong>. Professionally developed 5
        web applications with multiple Javascript frameworks.
      </p>
      <br>
      <p class="lg:text-lg text-sm text-justify leading-6">
        <!-- &nbsp;&nbsp;&nbsp;&nbsp; -->
        Hungry for knowledge, collaborative individual and possess analytical skills. Enjoys problem
        solving and willing to adapt to changes in the industry to stay on top.
      </p>
    </section>
    <!-- info section -->
    <section class="">
      <h2 class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2">Bio</h2>
      <br>
      <p class="lg:text-lg text-sm text-justify leading-6">
          &nbsp;&nbsp;&nbsp;&nbsp;
        Aaron has a strong passion on technology and computers.
        Outside of programmimg, Aaron has a hobby of collecting and engage with technology.
        He likes to tinker with his Arch Linux Operating System and enjoys collecting custom keyboards.
      </p>
    </section>
    <!-- journey section -->
    <section class="">
      <h2 class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2">Journey</h2>
      <br>
      <div class="flex flex-col gap-2">
        <!-- year 2017 -->
        <p class="lg:text-lg text-sm text-justify">
          <strong>2017:</strong>
          &nbsp;
          Started journey on programming as a hobby
        </p>
        <!-- year 2020 -->
        <p class="lg:text-lg text-sm text-justify">
          <strong>2020:</strong>
          &nbsp;
          Enrolled for diploma of ICT with specalism in software engineering
        </p>
        <!-- year 2022  -->
        <p class="lg:text-lg text-sm text-justify">
          <strong>2022:</strong>
          &nbsp;
          Started journey on web development
        </p>
      </div>
    </section>

    <!-- philosophy section  -->
    <section class="hidden">
      <h2 class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2">Philosophy</h2>
      <br>
      <p class="lg:text-lg text-sm text-justify leading-6">&nbsp;&nbsp;&nbsp;&nbsp; 
        Aaron 
        thinks that the technology will continue to evolve, web development industry will stay relevant 
        for a long time, but the technology used to develop web applications will constantly change. He believes that 
        a web developer must be agile and willing to learn and adapt to changes to stay relevant on the industry. 
      </p>
    </section>
  </div>
</template>

<script>
import TypeIt from "typeit";
import 'animate.css';

export default {
  data(){
    return {
      display: false
    }
  },
  methods(){

  },
  mounted(){
    new TypeIt("#landing_intro", {
      speed: 50,
      waitUntilVisible: true,
      startDelay: 2000,
      startDelete: true,
      // remove cursor when finished
      afterComplete: function (instance) {
        instance.destroy();
      }
    })
    .type("Hello! I am a full stack web developer based in Malaysia.")
    .go();
    
  }
}
</script>

<style>

.selector {
  background-color: var(--bg-sel);
}

.copyright {
  animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
  animation-delay: 3s;
  
}

/* @keyframes copyright {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
} */
</style>
