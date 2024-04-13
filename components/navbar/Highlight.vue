<template>
  <div class="flex flex-col md:flex-row gap-2 relative justify-center items-center pr-2">
    <div ref="hf"
      class="absolute hidden md:block rounded-lg bg-primary w-16 h-9 left-1 transition-all ease-in-out duration-200">
    </div>
    <div v-for="(item, index) in list" :key="item.name" :id="`nav-${item.name}`"
      class="w-full p-2 text-center relative text-lg font-normal transition delay-50"
      :class="route == item.name ? 'text-accent md:text-background font-semibold' : 'hidden md:block'">
      <div class="pointer-events-none absolute top-0 left-0 w-full h-full scale-y-[0.85]" :class="isPage(item) ? 'border border-primary rounded-lg': ''"/>
      <NuxtLink :to="localePath(item.page?item.to:{hash: item.to})" class="uppercase whitespace-nowrap group" :class="route == item.name ? '' : 'hover:text-accent'">
        {{ $t(item.name + '_title') }}
        <Icon v-if="isPage(item)" name="ph:arrow-right-bold" class="-ml-1 -translate-y-px transition-transform group-hover:translate-x-1 duration-200"/>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRouteStore } from '~/stores/routeStore';
const { $const } = useNuxtApp();
const routeStore = useRouteStore();
const { locale } = useI18n();
const { route } = storeToRefs(routeStore);
const hf = ref(null);
const props = defineProps({
  home: {
    type: Boolean,
    default: true,
  }
})

const list = computed(() => props.home ? $const.route_list : $const.route_list.filter(item => item.page))
const isPage = (item) => (item.page&&(item.name!=='home' ^ !props.home))

const setHighlightPosition = async () => {
  await nextTick();
  // console.log('trigger hightlight');
  const curr = document.querySelector(`#nav-${route.value}`);
  hf.value.style.transform = `translateX(${curr.offsetLeft - 4}px)`;
  hf.value.style.width = `${curr.offsetWidth}px`;
}

watch([route, () => locale.value], setHighlightPosition);
onMounted(() => setHighlightPosition());

</script>