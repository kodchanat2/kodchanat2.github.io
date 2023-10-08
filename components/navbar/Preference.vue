<template>
  <div class="relative grid justify-items-center gap-4 p-4 px-0">
    <div class="flex items-center ">
      <div class="text-center items-center grid grid-cols-2 gap-2">
        <p class="text-sm font-bold text-right">
          {{ $t('theme') }}:
        </p>
        <div @click="toggleTheme()"
          class="relative inline-flex h-6 w-14 bg-background shrink-0 cursor-pointer rounded-full border-2 border-text transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <span class="sr-only">theme setting</span>
          <span aria-hidden="true" :class="theme ? 'translate-x-8' : 'translate-x-0'"
            class="z-[1] pointer-events-none flex justify-center items-center h-5 w-5 transform rounded-full bg-text text-background ring-0 transition duration-200 ease-in-out">
            <Transition name="fade">
              <Icon v-if="theme" name="ic:round-dark-mode" class="mx-auto" />
              <Icon v-else name="material-symbols:light-mode" class="mx-auto" />
            </Transition>
          </span>
          <span class="absolute z-0 h-full w-full text-xs font-bold flex items-center justify-center">
            <Transition name="fade">
              <span v-if="theme" class="pr-4">{{ $t('theme_light') }}</span>
              <span v-else class="pl-4">{{ $t('theme_dark') }}</span>
            </Transition>
          </span>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div class="text-center items-center grid grid-cols-2 gap-2">
        <p class="text-sm font-bold text-right">
          {{ $t('language') }}:
        </p>
        <div @click="toggleLang()"
          class="relative inline-flex h-8 w-14 bg-accent shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <span class="sr-only">language setting</span>
          <span aria-hidden="true" :class="lang ? 'translate-x-6' : 'translate-x-0'"
            class="z-[1] pointer-events-none flex items-center justify-center text-sm font-bold h-7 w-7 transform rounded-full bg-secondary text-text shadow-lg ring-0 transition duration-200 ease-in-out">
            <Transition name="fade">
              <span v-if="lang">TH</span>
              <span v-else>EN</span>
            </Transition>
          </span>
          <span class="absolute z-0 h-full w-full text-xs text-background flex items-center justify-center">EN |
            TH</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n()
const colorMode = useColorMode();

const lang = useState('language', () => locale.value !== 'en');
const toggleLang = () => {
  lang.value = !lang.value
  setLocale(!lang.value ? 'en' : 'th')
}

const theme = useState('theme', () => true);
const toggleTheme = () => {
  theme.value = !theme.value
  colorMode.preference = theme.value ? 'light' : 'dark'
}


onMounted(() => {
  theme.value = colorMode.preference === 'light' || (colorMode.preference === 'system' && window.matchMedia('(prefers-color-scheme: light)').matches);
})

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>