<template>
  <Transition name="modal">
    <div v-if="props.show" class="fixed z-40 top-0 left-0 w-screen h-screen transition-opacity duration-300 flex md:p-4">
      <div class="absolute top-0 left-0 w-full h-full bg-background/70 transition-opacity duration-300" :class="`modal-mask`" @click="emit('close')" />
      <div class="modal-container z-10 transition-all h-fit duration-300 relative m-auto mb-0 md:mb-auto md:max-w-sm w-full" >
        <div class="w-full h-fit relative rounded-t-lg md:rounded-lg overflow-x-hidden bg-background flex flex-col md:border-2 border-background/30 shadow-primary shadow-grow" >
          <ContentFilter />
          <BaseButton class="m-2" @click="emit('close')">{{ $t('close') }}</BaseButton>
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