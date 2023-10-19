<template>
  <div class="flex flex-col md:flex-row gap-2 relative justify-center items-center pr-2">
    <div ref="hf" class="absolute hidden md:block rounded-lg bg-primary w-16 h-9 left-1 transition-all ease-in-out duration-200"></div>
    <div v-for="(item, index) in list" :key="item.name" :id="`nav-${item.name}`" class="w-full p-2 text-center relative text-lg font-normal transition delay-50" :class="route==item.name?'text-accent md:text-background font-semibold':'hidden md:block'">
      <NuxtLink :to="item.to" class="uppercase whitespace-nowrap">
        {{ $t(item.name + '_title') }}
        <Icon v-if="item.page" name="ep:right" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRouteStore } from '~/stores/routeStore';
const routeStore = useRouteStore();
const {locale} = useI18n();
const { route } = storeToRefs(routeStore);
const hf = ref(null);

const list = [
  {
    name: 'home',
    to: '/',
  },
  {
    name: 'skill',
    to: '/#skill',
  },
  {
    name: 'project',
    to: '/#project',
  },
  {
    name: 'contact',
    to: '/#contact',
  },
]
const setHighlightPosition = async () =>{
  await nextTick();
  // console.log('trigger hightlight');
  const curr = document.querySelector(`#nav-${route.value}`);
  hf.value.style.transform = `translateX(${curr.offsetLeft-4}px)`;
  hf.value.style.width = `${curr.offsetWidth}px`;
}

watch([route,()=>locale.value], setHighlightPosition);
onMounted(()=>setHighlightPosition());

</script>