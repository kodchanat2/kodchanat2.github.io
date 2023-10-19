<template>
  <div class="-mt-navbar">
    <SectionHero />
    <SectionAbout />
    <SectionSkills />
    <SectionProject />
  </div>
</template>
  
<script setup>
const { t, locale } = useI18n();
const title = ref(t('meta.title'));
const description = ref(t('meta.description'));

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

</script>