<template>
  <div class="w-full flex flex-col">
    <ContentHeader :data="data" class="px-4" :head="head" :hideButton="hideButton" />
    <div class="w-full h-px bg-text/20 mt-6 mb-2"></div>
    <div class="w-full p-4 flex flex-col gap-4 items-center font-light">
      <div v-for="(ctx,i) in content" :key="i" class="w-full">
        <div v-if="ctx.img" class="w-full flex flex-col items-center">
          <img :src="imgUrl+'/images/content/'+ctx.img" class="w-auto max-w-full md:max-w-lg min-h-[100px] max-h-96 bg-secondary shadow-grow shadow-secondary" />
          <span v-if="ctx.html" v-html="ctx.html" class="font-light text-xs italic text-text/80" />
        </div>
        <span v-else v-html="ctx.html" />
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
const imgUrl = useRuntimeConfig().public.img_url || '';

const content = computed(() => {
  return data?.content?.split('\n').map((ctx) => {
    if (!ctx.includes(':img:')) return { html: '  '+ctx };
    else {
      const [_, img, html] = ctx.split(':img:');
      return { img , html: (html||'').trim()};
    }
  });
});
</script>
