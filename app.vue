<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold">{{ $t('title') }}</h1>
    <a class="cursor-pointer mx-2" v-for="l in locales" :key="l.code" @click="() => setLocale(l.code)">
      {{ l.name }}
    </a>
  </div>
</template>

<script setup>
const { locale, locales: allLocales, setLocale } = useI18n()

const locales = computed(() => allLocales.value.filter((l) => l !== locale.value))
</script>