<template>
  <div id="project" class="w-full py-8 mt-navbar">
    <div class="w-full max-w-screen-lg mx-auto px-2 flex flex-col justify-center items-center">
      <h2 class="my-4 text-5xl px-4 font-semibold uppercase">{{ $t('project_title') }}</h2>

      <SectionProjectCard v-for="(project, index) in projects" :key="index" :project="project" :swap="index % 2 == 1" />

      <div class="w-full px-2 mb-8 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div class="w-full flex flex-col justify-center items-center text-center my-4 px-8">
          <h3 class="text-3xl font-semibold uppercase mx-auto">{{ $t('project_exp_title') }}</h3>
          <p class="text-base text-text/60 font-normal mt-2">{{ $t('project_exp_description') }}</p>
        </div>
        <div id="pj-exp" class="w-full flex flex-col">
          <BaseCardShort v-for="(exp, index) in projectsExp" :key="exp" :name="exp" :line="!!index" />
        </div>
      </div>

      <BaseLink :to="localePath('/browse?filter=project')" class="mt-4 p-4">{{ $t('link_project') }} →</BaseLink>
    </div>
  </div>
</template>

<script setup>
const {$gsap} = useNuxtApp();
const projects = [{
  "name": "lensod",
  "img": "lensod",
  "link": 'https://www.lensod.com/',
},
// {
//   "name": "lensod_mc",
//   "img": "lensod_mc",
//   "link": 'https://www.lensod.com/browse/mc',
// },
{
  "name": "bff",
  "img": "bff",
  "link": "https://bff-whal-dolph.web.app",
}]

const projectsExp = [
  "popme",
  "hex-snake",
  "infinity-crush",
]

onMounted(() => {
  setTimeout(() => {
  $gsap.set('#pj-exp', {
    opacity: 0,
    y: 50,
  })
  $gsap.to('#pj-exp', {
    scrollTrigger: {
      trigger: '#pj-exp',
      start: 'top bottom',
      end: 'bottom 80%',
      scrub: true,
      // markers: true,
      snap: {
        snapTo: 'labels',
        duration: 0.5,
        delay: 0.2,
        ease: 'power4.out'
      }
    },
    opacity: 1,
    y: 0,
  })
  }, 100);
})

</script>