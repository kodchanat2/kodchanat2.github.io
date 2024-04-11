<template>
  <div class="w-full flex relative">
    <NuxtLink :href="'browse/'+name" class="w-[calc(100%+1rem)] h-full -left-2 absolute rounded-xl hover:bg-primary/20 transition-colors duration-300"></NuxtLink>
    <div class="w-14 shrink-0 my-4 mr-2">
      <img :src="`${baseLink}/${name}/favicon.ico`" class="w-full" :alt="`${name}-icon`" />
    </div>
    <div class="w-full flex justify-between items-center pl-2" :class="[line && 'border-t border-text/25']">
      <div class="w-full grid grid-cols-1 pr-2">
        <div class="w-full flex flex-col">
          <p class="font-medium truncate">{{ $t(`project_${name}_title`) }}</p>
          <p class="text-sm font-normal text-text/60 truncate">{{ $t(`project_${name}_description`) }}</p>
        </div>
      </div>
      <NuxtLink :href="`${baseLink}/${name}`" target="_blank" class="w-fit z-10 p-2 px-3 rounded-full bg-accent shrink-0 transition-all hover:bg-primary hover:scale-105">
        <p class="text-xs font-medium whitespace-nowrap text-white flex justify-center items-center">
          {{ $t('view_site') }}
          <Icon name="ep:top-right" size="0.825rem" class="translate-x-1" />
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  line: {
    type: Boolean,
    default: true,
  },
});

// const baseLink = useRuntimeConfig().public.base_url;
const baseLink = 'https://kodchanat2.github.io';
</script>