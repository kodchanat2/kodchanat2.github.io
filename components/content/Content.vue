<template>
  <div class="w-full max-w-screen-md mx-auto flex flex-col">
    <ContentHeader :data="data" class="px-4" :head="head" :hideButton="hideButton" />
    <div class="w-full h-px bg-text/20 mt-6 mb-2"></div>
    <div class="w-full p-4 flex flex-col gap-6 items-center font-light">
      <div v-for="(ctx,i) in content" :key="i" class="w-full">
        <span v-if="!ctx.includes(':img:')" v-html="ctx" />
        <img v-else :src="data.img" class="w-full max-w-lg mx-auto min-h-[200px] bg-secondary" />
      </div>
    </div>

  </div>
</template>

<script setup>
const {data} = defineProps({
  data: {
    type: Object,
    required: true,
  },
  hideButton: {
    type: Boolean,
    default: false,
  },
  head: {
    type: Boolean,
    default: true,
  },
});

const content = computed(() => {
  return data?.content?.split('\n');
});
</script>
