<template>
  <div class="w-full max-w-screen-lg px-2 flex items-start gap-2">
    <div class="w-64 h-full min-h-full bg-red-400 hidden md:flex"></div>
    <div class="w-full bg-lime-40 grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
      <template v-if="all.length === 0">
        <div class="w-full h-64 bg-background flex items-center justify-center">
          <h1 class="text-2xl font-semibold">{{ t('page_not_found') }}</h1>
        </div>
      </template>
      <ContentCard v-for="(ctx,i) in all" :key="i" :data="ctx" />
    </div>
  </div>
</template>

<script setup>
import { useBrowseStore } from '~/stores/browseStore';
import ContentCard from '../../components/content/ContentCard.vue';
definePageMeta({
  layout: 'content',
})
const $route = useRoute();
const { t, locale } = useI18n();
const browse = useBrowseStore();
await useAsyncData('page-data', browse.fetch);

// console.log(browse.browse);
const all = computed(() => browse.browse?.[locale.value] || [], [browse.browse, locale.value]);

const title = ref(t('meta.browse') + t('meta.browse_title'));
const description = ref(t('meta.description'));

watch([locale], () => {
  title.value = t('meta.browse') + t('meta.browse_title')
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