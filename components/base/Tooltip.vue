<template>
  <span class="relative group underline decoration-dashed">
    <slot />
    <div class="whitespace-nowrap hidden group-hover:block absolute -top-1 left-1/2 -translate-y-full -translate-x-1/2 bg-text/70 text-background text-sm px-2 py-1 rounded-md">
      {{ text }}
    </div>
  </span>
</template>

<script setup>
const { text } = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>