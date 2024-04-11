<template>
  <Transition name="modal">
    <div v-if="props.show" class="fixed z-40 top-0 left-0 w-screen h-screen transition-opacity duration-300 flex md:p-4">
      <div class="absolute top-0 left-0 w-full h-full bg-secondary/70 transition-opacity duration-300" :class="`modal-mask`" @click="emit('close')" />
      <div class="modal-container z-10 transition-all h-full max-h-[800px] md:h-5/6 duration-300 relative m-auto mb-0 md:mb-auto md:max-w-screen-md w-full" >
        <div class="absolute -top-10 -right-2 z-20 w-8 h-8 hidden md:flex justify-center items-center bg-accent/30 rounded-full cursor-pointer shadow-lg" @click="emit('close')">
          <Icon name="mdi:close-thick" class="w-6 h-6 text-text" />
        </div>
        <div class="w-full h-full relative rounded-t-2xl md:rounded-2xl overflow-x-hidden flex flex-col md:border-2 border-background/30 shadow-primary shadow-grow" >
          <div class="w-full h-navbar md:hidden flex items-center justify-between border-b border-text/25 absolute top-0 z-10 bg-background">
            <div class="flex items-center gap-1 cursor-pointer px-3 p-2" @click="emit('close')">
              <Icon name="mdi:chevron-left" class="w-8 h-8 text-primary" />
              <p class="text-lg font-medium text-primary">{{ $t('back') }}</p>
            </div>
            <NuxtLink v-if="data.url" :href="`${data.url}`" target="_blank" class="w-fit p-2 px-3 mr-3 rounded-full bg-accent shrink-0 transition-all hover:bg-primary hover:scale-105">
              <p class="text-xs font-medium whitespace-nowrap text-white flex justify-center items-center">
                {{ $t('view_site') }}
                <Icon name="ep:top-right" size="0.825rem" class="translate-x-1" />
              </p>
            </NuxtLink>
          </div>
          <div class="w-full pt-navbar md:pt-0 h-full bg-background relative overflow-x-hidden">
            <div class="w-full h-auto p-4 py-6">
              <Content :data="data" :hide-button="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: true,
  },
  data: {
    type: Object,
  },
})
defineOptions({
  inheritAttrs: false
})
const emit = defineEmits(['close'])
watch(() => props.show, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
})

</script>