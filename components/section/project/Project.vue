<template>
  <div class="w-full py-8">
    <div class="w-full max-w-screen-lg mx-auto px-2 flex flex-col justify-center items-center">
      <h2 class="my-4 text-4xl px-4 font-semibold uppercase">{{ $t('project_title') }}</h2>

      <SectionProjectCard v-for="(project, index) in projects" :key="index" :project="project" :swap="index % 2 == 1" />

      <div class="w-full px-2 mb-8 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div class="w-full flex flex-col justify-center items-center text-center my-4 px-8">
          <h3 class="text-3xl font-semibold uppercase mx-auto">{{ $t('project_exp_title') }}</h3>
          <p class="text-base font-normal mt-2">{{ $t('project_exp_description') }}</p>
        </div>
        <div class="w-full flex flex-col">
          <BaseCardShort v-for="(exp, index) in projectsExp" :key="exp" :name="exp" :line="!!index" />
        </div>
      </div>

      <BaseLink to="#" class="mt-4 p-4">{{ $t('link_project') }} →</BaseLink>
    </div>
  </div>
</template>

<script setup>
const projects = [{
  "title": "project_lensod_title",
  "description": "project_lensod_description",
  "img": "lensod",
  "link": 'https://www.lensod.com/',
},
{
  "title": "project_lensod_mc_title",
  "description": "project_lensod_mc_description",
  "img": "lensod_mc",
  "link": 'https://www.lensod.com/browse/mc',
},
{
  "title": "project_bff_title",
  "description": "project_bff_description",
  "img": "bff",
  "link": "https://bff-whal-dolph.web.app",
}]

const projectsExp = [
  "popme",
  "hex-snake",
  "infinity-crush",
]

</script>