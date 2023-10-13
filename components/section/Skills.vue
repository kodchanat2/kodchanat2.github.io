<template>
  <div id="skill" class="w-screen py-4 pt-navbar">
    <div class="w-full max-w-screen-lg mx-auto md:px-2 flex flex-col justify-center">
      <h2 class="mt-4 text-4xl px-4 font-semibold uppercase">{{ $t('skill_title') }}</h2>

      <div class="w-full max-w-full overflow-hidden relative side-fade before:h-0 after:h-0 before:md:h-full after:md:h-full">
        <div class="w-full overflow-x-auto relative flex snap-x scrollbar-hide">
          <div
            class="snap-center max-w-[calc(100vw-4rem)] w-96 shrink-0 bg-secondary/25 shadow-line shadow-secondary/50 border-2 border-secondary rounded-lg mx-2 md:mx-4 my-8 first:md:ml-10 last:mr-20"
            v-for="skill in skills" :key="skill.title">
            <div class="w-full mx-auto px-4 flex flex-col justify-center">
              <h3 class="mt-4 text-xl font-semibold">
                <span>{{ $t(skill.title) }}</span>
                <!-- <span v-if="skill.description" class="text-sm font-light">・{{ $t(skill.description) }}</span> -->
              </h3>
              <div class="w-full flex flex-wrap justify-center items-center my-4">
                <div class="w-full px-2 flex" v-for="item in sortByLevel(skill.list)" :key="item.name">
                  <p class="w-full">
                    <span class="text-lg font-medium">{{ item.name }}</span>
                    <span v-if="item.level" class="text-sm self-center" :class="styleByLevel(item.level)">
                    ・{{ $t('skill_level_' + [item.level]) }} {{ item.date }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const { $const } = useNuxtApp();

const skills = $const.skills;


function styleByLevel(level){
  switch(Number(level)){
    case 9:
      return "text-green-700 font-semibold";
    case 5:
      return "text-gray-900 dark:text-gray-200 font-medium";
    case 0:
      return "text-gray-500 opacity-70 font-extralight";
    default:
      return "font-light opacity-50";
  }
}

function sortByLevel(array) {
  return array.sort((a, b) => {
    if (a.level === b.level) {
      return b.date - a.date;
    }
    return b.level - a.level;
  });
}
</script>