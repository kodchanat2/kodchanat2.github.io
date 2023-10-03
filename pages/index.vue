<template>
    <div class="p-4">
      <h1 class="text-3xl font-bold">{{ $t('title') }}</h1>
    </div>
  </template>
  
  <script setup>
  const { locale, locales: allLocales, setLocale } = useI18n()
  
  const locales = computed(() => allLocales.value.filter((l) => l !== locale.value))
  </script>