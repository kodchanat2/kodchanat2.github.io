<template>
  <div class="relative w-full flex flex-col p-4 rounded-xl bg-background hover:shadow-secondary transition hover:-translate-y-0.5 hover:shadow-md">
    <NuxtLink :href="`/browse/${data.key}#`" class="z-[1] w-full h-full left-0 top-0 absolute rounded-xl hover:bg-text/5 transition-colors"></NuxtLink>
    <ContentHeader :data="data" :head="false"/>
    <div class="w-full p-2 pt-4 flex flex-col items-center font-light">
      <div class="w-full aspect-video rounded-md overflow-hidden bg-secondary">
        <img :src="'/images/content/'+data.key+'.webp'" class="w-full aspect-video" />
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
});
</script>
