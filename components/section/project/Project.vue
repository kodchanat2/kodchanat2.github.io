<template>
  <div class="w-full py-8">
    <div class="w-full max-w-screen-lg mx-auto px-2 flex flex-col justify-center items-center">
      <h2 class="my-4 text-4xl px-4 font-semibold uppercase">{{ $t('project_title') }}</h2>

      <SectionProjectCard v-for="(project, index) in projects" :key="index" :project="project" :swap="index % 2 == 1" />

      <div class="w-full px-2 mb-8 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <h3 class="my-4 text-2xl px-4 font-semibold uppercase mx-auto">{{ $t('project_exp_title') }}</h3>
        <div class="w-full flex flex-col">
          <BaseCardShort v-for="(exp, index) in projectsExp" :key="index" :project="exp" :line="!!index" />
        </div>
      </div>

      <BaseLink to="#" class="mt-4 p-4">{{ $t('link_project') }} →</BaseLink>
    </div>
  </div>
</template>

<script setup>
const projects = [{
  "title": "project_title",
  "description": "project_description",
  "img": "lensod",
  "link": "#",
},
{
  "title": "project_title",
  "description": "project_description",
  "img": "lensod",
  "link": "#",
},
{
  "title": "project_title",
  "description": "project_description",
  "img": "lensod",
  "link": "#",
}]

const projectsExp = [{
  "title": "project_title",
  "description": "project_description",
  "img": "lensod",
  "link": "#",
},
{
  "title": "project_title",
  "description": "project_description",
  "img": "lensod",
  "link": "#",
},
{
  "title": "project_title",
  "description": "project_description",
  "img": "lensod",
  "link": "#",
}]

</script>