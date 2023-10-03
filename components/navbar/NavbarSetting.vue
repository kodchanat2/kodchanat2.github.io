<template>
  <HPopover class="relative" @mouseover="setHover(true)" @mouseleave="setHover(false)">
    <HPopoverButton
      class="group inline-flex items-center rounded-full cursor-pointer p-2 transition-colors focus:outline-none"
      :class="hover ? 'bg-black/10 dark:bg-white/10':''">
      <Icon name="ic:baseline-settings" aria-hidden="true" class="w-8 h-8 transition-transform duration-500"
        :class="hover ? 'scale-110 rotate-90' : 'scale-100 rotate-0'" />
    </HPopoverButton>

    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
      <HPopoverPanel :static="hover" class="absolute right-0 z-10 mt-0 w-48  transform px-4 sm:px-0">
        <div class="overflow-hidden rounded-lg bg-black/5 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10">
          <div class="relative grid justify-items-center gap-4 p-4 px-0">
            <div class="flex items-center ">
              <div class="text-center items-center grid grid-cols-2 gap-2">
                <p class="text-sm font-bold text-right">
                  {{$t('theme')}}:
                </p>
                  <HSwitch v-model="theme" @click="setTheme(!theme)"
                    class="relative inline-flex h-6 w-14 bg-background shrink-0 cursor-pointer rounded-full border-2 border-text transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <span class="sr-only">theme setting</span>
                    <span aria-hidden="true" :class="theme ? 'translate-x-8' : 'translate-x-0'"
                      class="z-[1] pointer-events-none flex justify-center items-center h-5 w-5 transform rounded-full bg-text text-background ring-0 transition duration-200 ease-in-out">
                      <Transition name="fade">
                        <Icon v-if="theme" name="ic:round-dark-mode" class="mx-auto"/>
                        <Icon v-else name="material-symbols:light-mode" class="mx-auto"/>
                      </Transition>
                    </span>
                    <span class="absolute z-0 h-full w-full text-xs font-bold flex items-center justify-center">
                      <Transition name="fade">
                        <span v-if="theme" class="pr-4">{{ $t('theme_light') }}</span>
                        <span v-else class="pl-4">{{ $t('theme_dark') }}</span>
                      </Transition>
                    </span>
                  </HSwitch>
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-center items-center grid grid-cols-2 gap-2">
                <p class="text-sm font-bold text-right">
                  {{$t('language')}}:
                </p>
                  <HSwitch v-model="lang" @click="setLang(!lang)"
                    class="relative inline-flex h-8 w-14 bg-secondary shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <span class="sr-only">language setting</span>
                    <span aria-hidden="true" :class="lang ? 'translate-x-6' : 'translate-x-0'"
                      class="z-[1] pointer-events-none flex items-center justify-center text-sm font-bold h-7 w-7 transform rounded-full bg-primary text-background shadow-lg ring-0 transition duration-200 ease-in-out">
                      <Transition name="fade">
                        <span v-if="lang">TH</span>
                        <span v-else>EN</span>
                      </Transition>
                    </span>
                    <span class="absolute z-0 h-full w-full text-xs flex items-center justify-center">EN | TH</span>
                  </HSwitch>
              </div>
            </div>
          </div>
          
        </div>
      </HPopoverPanel>
    </transition>
  </HPopover>
</template>

<script setup>
const { locale, setLocale } = useI18n()
const colorMode = useColorMode();

const hover = useState('hover', () => false)
const setHover = (value) => hover.value = value

const lang = useState('language', () => locale.value !== 'en');
const setLang = (value) => {
  setLocale(!value ? 'en' : 'th')
}

const theme = useState('theme', () => true);
const setTheme = (value) => {
  colorMode.preference = value ? 'light' : 'dark'
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
}</style>