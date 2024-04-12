<template>
  <div class="-mt-navbar">
    <SectionHero />
    <SectionAbout />
    <SectionSkills />
    <SectionProject />
    <ContentModal :show="!!modalData" :data="modalData" @close="closeModal" />
  </div>
</template>
  
<script setup>
import { useBrowseStore } from '~/stores/browseStore';

const browse = useBrowseStore();
const { t, locale } = useI18n();
const title = ref(t('meta.title'));
const description = ref(t('meta.description'));
const modal = ref(null);

watch(locale, () => {
  title.value = t('meta.title')
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

onMounted(() => {
  browse.fetch();
})

onBeforeRouteLeave((to, from, next) => {
  // console.log(to, from);
  if(to.name.includes('browse-slug')) {
    showModal(to)
  }
  else next();
})

onBeforeRouteUpdate((to, from, next) => {
  if(modal.value) {
    modal.value = null;
  }
  else next();
})

const modalData = computed(() => browse.browse?.[locale.value]?.find(item => (item.key+'').toLowerCase() === (modal.value||'').toLowerCase()) || null, [locale.value, modal.value]);

const showModal = (to) => {
  // console.log(to);
  modal.value = to.params.slug;
  // console.log(locale.value==='th' ? 'th' : '');
  window.history.pushState({}, '', (locale.value==='th' ? '/th/' : '/')+`browse/${to.params.slug}`);
}

const closeModal = () => {
  window.history.go(-1);
}

</script>