<template>
  <NuxtLink
    class="p-2 px-4 rounded-lg font-medium text-base flex justify-center items-center transition-all hover:scale-105"
    :class="[
      type === 'primary' && 'bg-primary text-background hover:bg-primary/90',
      type === 'secondary' && 'border border-primary text-primary hover:border-accent hover:text-accent hover:bg-secondary/10',
    ]">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import {PropType} from 'vue';
type ButtonType = 'primary' | 'secondary';
defineProps({
  type: {
    type: String as PropType<ButtonType>,
    default: 'primary',
  },
});
</script>