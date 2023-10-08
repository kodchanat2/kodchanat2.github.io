<template>
  <div class="relative" @mouseover="setHover(true)" @mouseleave="setHover(false)">
    <div
      class="group inline-flex items-center rounded-t-full cursor-pointer p-2 transition-colors focus:outline-none"
      :class="hover ? 'bg-background':''">
      <Icon name="ic:baseline-settings" aria-hidden="true" class="w-8 h-8 transition-transform duration-500"
        :class="hover ? 'scale-110 rotate-90' : 'scale-100 rotate-0'" />
    </div>

    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="-translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100" leave-to-class="-translate-y-1 opacity-0">
      <div v-if="hover" class="absolute right-0 z-10 -mt-1 w-48 transform px-0">
        <div class="overflow-hidden rounded-lg rounded-tr-none bg-background shadow-line shadow-text/25">
          <NavbarPreference />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const hover = useState('hover', () => false)
const setHover = (value) => hover.value = value

</script>