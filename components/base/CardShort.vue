<template>
  <div class="w-full flex">
    <div class="w-14 h-14 shrink-0 my-4 mr-2 rounded-md bg-slate-500">
      <!-- img -->
    </div>
    <div class="w-full flex justify-between items-center pl-2" :class="[line && 'border-t border-text/25']">
      <div class="w-full flex flex-col">
        <p class="font-medium truncate">{{ $t('project_title') }}</p>
        <p class="text-sm font-light truncate">{{ $t('project_description') }}</p>
      </div>
      <div class="w-fit p-2 rounded-full bg-primary shrink-0">
        <p class="text-xs font-semibold whitespace-nowrap text-white">{{ $t('view_site') }} →</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
  line: {
    type: Boolean,
    default: true,
  },
});
</script>