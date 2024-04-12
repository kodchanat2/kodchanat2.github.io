<template>
  <div class="w-full flex relative overflow-hidden justify-between items-center gap-2" :class="head?'flex-col md:flex-row':'flex-row'">
    <div class="w-full flex flex-col overflow-hidden" :class="head?'text-center md:text-left':''">
      <p class="font-medium" :class="head?'text-2xl':'text-lg truncate'">{{ data.title }}</p>
      <p class="font-normal text-text/60" :class="head?'text-base':'text-sm truncate'">{{ data.description }}</p>
      <p class="font-medium mt-2" :class="head?'text-sm':'text-xs'">{{ data.tags?.join(' ') }}・{{ data.date }}</p>
    </div>
    <NuxtLink v-if="head && data.url" :href="`${data.url}`" target="_blank" class="w-fit p-2 px-3 rounded-full bg-accent shrink-0 transition-all hover:bg-primary hover:scale-105" :class="hideButton?'hidden md:block':''">
      <p class="text-xs font-medium whitespace-nowrap text-white flex justify-center items-center">
        {{ $t('view_site') }}
        <Icon name="ep:top-right" size="0.825rem" class="translate-x-1" />
      </p>
    </NuxtLink>
    <NuxtLink v-else-if="!head" :href="'browse/'+data.key" class="w-fit p-2 px-3 rounded-full bg-accent shrink-0 transition-all hover:bg-primary hover:scale-105">
      <p class="text-xs font-medium whitespace-nowrap text-white flex justify-center items-center">
        {{ $t('read_more') }}
      </p>
    </NuxtLink>
  </div>
</template>

<script setup>
const {data} = defineProps({
  data: {
    type: Object,
    required: true,
  },
  head: {
    type: Boolean,
    default: true,
  },
  hideButton: {
    type: Boolean,
    default: false,
  },
});

import { useBrowseStore } from '~/stores/browseStore';
const browse = useBrowseStore();
onMounted(() => {
  browse.fetch();
});
</script>
