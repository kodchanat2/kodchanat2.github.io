<template>
  <div>
    <h1>{{ $t('title') }}</h1>
    <a v-for="l in locales" :key="l.code" @click="() => setLocale(l.code)">
      {{ l.name }}
    </a>
  </div>
</template>

<script setup>
const { locale, locales: allLocales, setLocale } = useI18n()

const locales = computed(() => allLocales.value.filter((l) => l !== locale.value))
</script>