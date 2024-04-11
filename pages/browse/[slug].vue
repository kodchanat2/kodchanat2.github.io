<template>
  <div v-if="data" class="w-full">
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
const browse = useBrowseStore();
if(!browse.browse.th) await useAsyncData('page-data', browse.fetch);

// console.log($route.params.slug);
// console.log(browse.browse);
const data = computed(() => browse.browse?.[locale.value]?.find(item => (item.key+'').toLowerCase() === ($route.params.slug||'').toLowerCase()) || null, [browse.browse, locale.value, $route.params.slug]);
// console.log(data.value);


const title = ref(data.value?.title ? (data.value?.title+' | '+t('title')) : t('page_not_found'));
const description = ref(t('meta.description'));

watch([locale, data], () => {
  title.value = data.value?.title ? (data.value?.title+' | '+t('title')) : t('page_not_found')
  description.value = t('meta.description')
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
  ]
})
</script>