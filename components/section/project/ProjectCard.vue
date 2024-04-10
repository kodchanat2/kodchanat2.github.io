<template>
  <div ref="el" class="w-full mb-16 mt-4 p-4 px-2 rounded-lg relative overflow-hidden md:overflow-visible">
    <div class="md:hidden absolute z-0 top-0 left-0 w-full h-full flex items-end blur">
      <div class="w-full h-3/4 absolute z-10 top-0 bg-gradient-to-t from-transparent via-background to-background" />
      <img :src="`/images/projects/${project.name}_desktop.webp`" class="h-3/4 object-cover opacity-70"
        :alt="`${project.name}-desktop`" />
    </div>
    <div class="w-full grid grid-cols-1 md:grid-cols-3 relative">
      <div class="flex flex-col items-center justify-around col-span-2 h-full" :class="[swap && 'order-2']">
        <h3 class="md:w-1/2 mt-4 flex flex-col items-center text-center">
          <span class="text-2xl font-semibold">{{ $t(`project_${project.name}_title`) }}</span>
          <span class="text-base font-normal text-text/60 mt-2">{{ $t(`project_${project.name}_description`)
          }}</span>
          <div class="w-full mt-6 flex justify-center gap-4">
            <!-- <BaseButton :href="`browse/${project.name}`">
              {{ $t('read_more') }}
            </BaseButton> -->
            <BaseButton type="secondary" :href="project.link" target="_blank">
              {{ $t('view_site') }}
              <Icon name="ep:top-right" size="1.25rem" class="ml-1 translate-x-1" />
            </BaseButton>
          </div>
        </h3>
        <div class="grid grid-cols-4 items-end md:grid-cols-1 mt-6 p-4  rounded-md">
          <div class="relative col-span-3">
            <img :src="`/images/projects/${project.name}_desktop.webp`" :alt="`${project.name}-desktop`"
              class="absolute top-[5%] left-1/2 -translate-x-1/2 object-cover w-[74.5%] aspect-[595/372]" />
            <img src="/images/desktop.webp" class="relative" alt="desktop" />
          </div>
          <SectionProjectPhone :src="`/images/projects/${project.name}_phone.webp`"
            class="md:hidden scale-110 -translate-x-4 -translate-y-4" :alt="`${project.name}-phone`" />
        </div>
      </div>
      <div ref="phone" class="hidden md:flex justify-center">
        <SectionProjectPhone :src="`/images/projects/${project.name}_phone.webp`"
          :class="swap ? 'translate-x-10' : '-translate-x-10'" :alt="`${project.name}-phone`" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();
const el = ref(null);
const phone = ref(null);
defineProps({
  project: {
    type: Object,
    required: true,
  },
  swap: {
    type: Boolean,
    default: false,
  },
});

onMounted(() => {
  setTimeout(() => {
    $gsap.set(el.value, {
      opacity: 0,
      y: 100,
    })
    $gsap.to(el.value, {
      scrollTrigger: {
        trigger: el.value,
        start: 'top bottom',
        end: 'top center',
        scrub: true,
        // markers: true,
      },
      opacity: 1,
      y: 0,
    })
    $gsap.set(phone.value, {
      y: 0,
    })
    $gsap.to(phone.value, {
      scrollTrigger: {
        trigger: phone.value,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        // markers: true,
      },
      y: 100,
    })

  }, 100);
})
</script>