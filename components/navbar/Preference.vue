<template>
  <div class="relative grid justify-items-center gap-4 p-4 px-0">
    <div class="flex items-center ">
      <div class="text-center items-center grid grid-cols-2 gap-2">
        <p class="text-right" :class="menu ? 'text-lg' : 'text-sm font-bold '">
          {{ $t('theme') }}:
        </p>
        <div @click="toggleTheme()"
          class="relative inline-flex h-8 w-20 bg-background shrink-0 cursor-pointer rounded-full border-2 border-primary transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <span class="sr-only">theme setting</span>
          <span aria-hidden="true" :class="theme ? 'translate-x-12' : 'translate-x-0'"
            class="z-[1] pointer-events-none mt-0.5 ml-0.5 flex justify-center items-center h-6 w-6 transform rounded-full bg-primary text-background ring-0 transition duration-200 ease-in-out">
            <Transition name="fade">
              <Icon v-if="theme" name="ic:round-dark-mode" class="mx-auto" />
              <Icon v-else name="material-symbols:light-mode" class="mx-auto" />
            </Transition>
          </span>
          <span class="absolute z-0 h-full w-full text-sm font-semibold  text-primary flex items-center justify-center">
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
        <p class="text-right" :class="menu ? 'text-lg' : 'text-sm font-bold '">
          {{ $t('language') }}:
        </p>
        <div @click="toggleLang()"
          class="relative inline-flex h-8 w-20 bg-accent/60 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <span class="sr-only">language setting</span>
          <span aria-hidden="true" :class="lang ? 'translate-x-9' : 'translate-x-0'"
            class="z-[1] pointer-events-none flex items-center justify-center text-sm font-bold h-7 w-10 transform rounded-full bg-primary text-background shadow-lg ring-0 transition duration-200 ease-in-out">
            <Transition name="fade">
              <span v-if="lang">ไทย</span>
              <span v-else>EN</span>
            </Transition>
          </span>
          <span class="absolute z-0 h-full w-full text-xs text-background/80 flex items-center justify-center tracking-tighter">
            EN ・ ไทย
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  menu: {
    type: Boolean,
    default: false
  }
})
const { locale, setLocale } = useI18n()
const colorMode = useColorMode();
const route = useRoute();

const lang = useState('language', () => false);
const toggleLang = () => {
  setLocale(locale.value !== 'en' ? 'en' : 'th')
  route.meta.top = window.scrollY
}
watch(locale, () => {
  lang.value = locale.value !== 'en'
});

const theme = useState('theme', () => true);
const toggleTheme = () => {
  theme.value = !theme.value
  colorMode.preference = theme.value ? 'light' : 'dark'
}


onMounted(() => {
  lang.value = locale.value !== 'en';
  theme.value = colorMode.preference === 'light' || (colorMode.preference === 'system' && window.matchMedia('(prefers-color-scheme: light)').matches);
})

</script>
