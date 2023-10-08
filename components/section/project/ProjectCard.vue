<template>
  <div class="w-full mb-16 mt-4 p-4 px-2 rounded-lg relative overflow-hidden shadow-line">
    <div class="md:hidden absolute z-0 top-0 left-0 w-full h-full flex items-end blur">
      <div class="w-full h-3/4 absolute z-10 top-0 bg-gradient-to-t from-transparent via-background to-background" />
      <img :src="`images/projects/${project.img}_desktop.jpg`" class="h-3/4 object-cover opacity-70" />
    </div>
    <div class="w-full grid grid-cols-1 md:grid-cols-3 relative">
      <div class="flex flex-col items-center justify-around col-span-2 h-full" :class="[swap && 'order-2']">
        <h3 class="mt-4 text-xl font-semibold flex flex-col items-center">
          <span>{{ $t(project.title) }}</span>
          <span v-if="project.description" class="text-sm font-light">{{ $t(project.description) }}</span>
          <BaseLink class="mt-4 text-sm flex justify-center items-center" :underline="false" :href="project.link"
            target="_blank">
            {{ $t('view_site') }}
            <Icon name="line-md:external-link" size="1rem" class="ml-1" />
          </BaseLink>
        </h3>
        <div class="grid grid-cols-4 items-end md:grid-cols-1 mt-8 p-4  rounded-md">
          <div class="relative col-span-3">
            <img :src="`images/projects/${project.img}_desktop.jpg`"
              class="absolute top-[4%] left-1/2 -translate-x-1/2 object-cover w-3/4 aspect-[1.5785622239]" />
            <img src="images/desktop.webp" class="relative" />
          </div>
          <img src="images/phone.webp" class=" mb-auto relative block md:hidden" />
        </div>
      </div>
      <div class="hidden md:flex justify-center">
        <img src="images/phone.webp" />
      </div>
    </div>
  </div>
</template>

<script setup>
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
</script>