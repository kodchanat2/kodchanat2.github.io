<template>
  <NuxtLink class="underline-offset-4 font-medium text-lg" :class="[underline && 'underline', border && 'border-b-2 border-text']">
    <slot />
  </NuxtLink>
</template>

<script setup>
defineProps({
  underline: {
    type: Boolean,
    default: true,
  },
  border: {
    type: Boolean,
    default: false,
  },
});
</script>