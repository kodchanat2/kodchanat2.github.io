<template>
  <div v-if="data" class="w-full max-w-screen-lg mx-auto flex flex-col items-center">
    <div class="w-full flex items-center justify-between border-b border-text/25 -translate-y-6">
      <NuxtLink :to="localePath('/browse')" class="flex items-center gap-1 cursor-pointer py-2 text-primary transition-colors group hover:text-accent">
        <Icon name="mdi:chevron-left" class="w-8 h-8 translate-x-1 transition-transform group-hover:translate-x-0 duration-300" />
        <p class="text-lg font-medium">{{ $t('browse_all') }}</p>
      </NuxtLink>
    </div>
    <Content :data="data" />
  </div>
  <div v-else class="w-full mt-4 flex justify-center items-center">
    <h1 class="text-2xl font-semibold">{{ $t('page_not_found') }}</h1>
  </div>
</template>

<script setup>
import { useBrowseStore } from '~/stores/browseStore';
definePageMeta({
  layout: 'content',
})
const $route = useRoute();
const { t, locale } = useI18n();
const config = UseRuntimeConfig().public;
const browse = useBrowseStore();
await useAsyncData('page-data', browse.fetch);

// console.log($route.params.slug);
// console.log(browse.browse);
const data = computed(() => browse.browse?.[locale.value]?.find(item => (item.key+'').toLowerCase() === ($route.params.slug||'').toLowerCase()) || null, [browse.browse, locale.value, $route.params.slug]);
// console.log(data.value);


const title = ref((data.value?.title || t('page_not_found')) +t('meta.browse_title'));
const description = ref(t('meta.description'));
const img = ref(data.value?.key ? '/images/content/'+data.value.key+'.webp' : '/thumbnails.png');

watch([locale, data], () => {
  title.value = (data.value?.title || t('page_not_found')) +t('meta.browse_title') 
  description.value = t('meta.description')
  img.value = data.value?.key ? '/images/content/'+data.value.key+'.webp' : '/thumbnails.png';
})

useHead({
  title,
  meta: [
    {name: 'title', content: title},
    {name: 'description', content: description},
    {name: 'og:title', content: title},
    {name: 'og:description', content: description},
    {name: 'twitter:title', content: title},
    {name: 'twitter:description', content: description},
    {name: 'og:image', content: config.base_url + img}
  ]
})
</script>