<template>
  <div id="skill" class="w-screen py-4 pt-navbar">
    <div class="w-full max-w-screen-lg mx-auto md:px-2 flex flex-col justify-center">
      <h2 class="mt-4 text-4xl px-4 font-semibold uppercase">{{ $t('skill_title') }}</h2>

      <div
        class="w-full max-w-full overflow-hidden relative side-fade before:h-0 after:h-0 before:md:h-full after:md:h-full">
        <div ref="scroller" class="w-full overflow-x-auto relative flex snap-x snap-mandatory pl-10 pr-20 scrollbar-hide">
          <div
            class="snap-center max-w-[calc(100vw-4rem)] w-96 shrink-0 bg-gradient-to-tr from-secondary/25 to-accent/30 shadow-line shadow-secondary/50 border-2 border-secondary rounded-lg mx-2 md:mx-4 my-8"
            v-for="skill in skills" :key="skill.title">
            <div class="w-full mx-auto px-4 flex flex-col justify-center">
              <h3 class="mt-4 pb-2 text-xl font-semibold text-center md:text-left w-full border-b-2 border-accent/30">
                <span>{{ $t(skill.title) }}</span>
                <!-- <span v-if="skill.description" class="text-sm font-light">・{{ $t(skill.description) }}</span> -->
              </h3>
              <div class="w-full flex flex-wrap justify-center items-center my-4">
                <div class="w-full px-0 flex" v-for="item in sortByLevel(skill.list)" :key="item.name">
                  <p class="w-full">
                    <Icon
                      :name="item.icon || `skill-icons:${item.alt}${item.mono ? '' : ('-' + (!isLightColor ? 'dark' : 'light'))}`"
                      class="mr-2 mb-1" size="1.2rem" :style="[item.fill && `color:${item.fill}`]" />
                    <span class="text-lg font-normal">{{ item.name }}</span>
                    <span v-if="item.level" class="text-sm self-center" :class="styleByLevel(item.level)">
                      {{ '・' + $t('skill_level_' + [item.level]) }} {{ item.date }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="absolute top-1 md:top-1/2 translate-y-1/2 translate-x-1/2 md:translate-x-0 md:-translate-y-full left-0 z-[3] rounded-full md:bg-background/80 text-primary p-4"
          @click="prev">
          <Icon name="ic:round-arrow-back-ios" size="1.5rem" />
        </button>
        <button
          class="absolute top-1 md:top-1/2 translate-y-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-full right-0 z-[3] rounded-full md:bg-background/80 text-primary p-4"
          @click="next">
          <Icon name="ic:round-arrow-forward-ios" size="1.5rem" />
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
const { $const, $gsap } = useNuxtApp();
const colorMode = useColorMode();
const scroller = ref(null);

const skills = $const.skills;
const isLightColor = computed(()=> colorMode.preference === 'light' || (colorMode.preference === 'system' && window?.matchMedia('(prefers-color-scheme: light)').matches))



function styleByLevel(level) {
  switch (Number(level)) {
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

const next = () => {
  scroller.value?.scrollBy({ left: 300, behavior: 'smooth' });
}
const prev = () => {
  scroller.value?.scrollBy({ left: -300, behavior: 'smooth' });
}

onMounted(() => {
  setTimeout(() => {
    $gsap.timeline({
      scrollTrigger: {
        trigger: scroller.value,
        start: 'bottom bottom',
        end: 'bottom center',
        scrub: true,
        // markers: true,
        once: true,
        onEnter: next,
      }
    })
  }, 5);
});
</script>
