<template>
  <div class="w-full max-w-screen-lg lg:px-2 flex flex-col lg:flex-row items-start gap-2">
    <ContentFilterModal :show="isShowFilter" @close="isShowFilter=false" />
    <ContentModal :show="!!modalData" :data="modalData" @close="closeModal" />
    <div class="w-full lg:w-64 flex flex-col gap-2 shrink-0 sticky top-navbar -translate-y-px pt-px z-10 bg-secondary/80 lg:bg-transparent backdrop-blur">
      <ContentFilter class="hidden lg:flex mt-2" />
      <div class="w-full flex items-center border-y lg:border-0 border-primary/20">
        <div class="w-full flex items-center gap-2 p-2 overflow-x-scroll flex-nowrap lg:flex-wrap whitespace-nowrap scrollbar-hide scroll-smooth">
          <div v-if="!filters.length" class="p-1 px-3 text-sm font-light lg:hidden">{{ t('all_browse') }}</div>
          <div v-for="filter in filters" :key="filter.key" class="flex items-center text-primary px-3 p-1 rounded-full bg-background border border-primary/50">
            <span class="text-sm capitalize">{{ filter.text }}</span>
            <Icon name="mdi:close" class="cursor-pointer translate-x-1 transition-transform hover:scale-125" @click="closeFilter(filter)" />
          </div>
        </div>
        <div class="shrink-0 w-fit h-full lg:hidden">
          <div class="p-3 h-full flex items-center border-x border-primary/30 text-primary text-xl cursor-pointer bg-background" @click="isShowFilter=true">
            <Icon name="mage:filter" />
            <Icon :name="f.sortNewest?'fluent-mdl2:sort-up': 'fluent-mdl2:sort-down'" class="-ml-3 translate-x-2 scale-75" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full relative flex flex-col">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
        <TransitionGroup
          name="result"
          @before-leave="animateBeforeLeave"
        >
          <ContentCard v-for="ctx in results" :key="ctx.key" :data="ctx" />
        </TransitionGroup>
      </div>
      <Transition name="result">
        <div v-if="results.length === 0" class="w-full pt-10 bg-background flex flex-col gap-4 items-center text-center justify-center">
          <h3 class="text-2xl font-medium text-text/60">{{ t('no_browse') }}</h3>
          <div class="w-fit p-2 px-4 rounded-full border-2 border-primary shrink-0 transition-all cursor-pointer hover:bg-secondary/60" @click="f.clearSelected">
            <p class="text-base font-medium whitespace-nowrap text-primary flex justify-center items-center">
              {{ $t('browse_all') }}
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { useBrowseStore } from '~/stores/browseStore';
import { useFilterStore } from '~/stores/filterStore';
import ContentCard from '../../components/content/ContentCard.vue';
import { onMounted } from 'vue';
definePageMeta({
  layout: 'content',
})
const { t, locale } = useI18n();
const { $const } = useNuxtApp();
const browse = useBrowseStore();
const f = useFilterStore();
const modal = ref(null);
const isShowFilter = ref(false);
await useAsyncData('page-data', browse.fetch);

// console.log(browse.browse);
const all = computed(() => browse.browse?.[locale.value] || [], [browse.browse, locale.value]);
const results = computed(() => {
  let results = [];
  if(Object.keys(f.selected).every(key => !f.selected[key])) results = [...all.value];
  else results = all.value.filter(ctx => (ctx.tags || []).some(tag => f.selected[tag]));
  return f.sortNewest ? results : results.reverse();
}, [all, f.selected]);

const title = ref(t('meta.browse') + t('meta.browse_title'));
const description = ref(t('meta.description'));

watch([locale], () => {
  title.value = t('meta.browse') + t('meta.browse_title')
  description.value = t('meta.description')
})

useHead({
  title,
  meta: [
    {name: 'title', content: title},
    {name: 'description', content: description},
    {name: 'og:title', content: title},
    {name: 'og:description', content: description},
    {name: 'twitter:title', content: title},
    {name: 'twitter:description', content: description},
  ]
})

onMounted(() => {
  f.readQuery();
});

const filters = computed(() => {
  const filters = [];
  $const.tag.groups.forEach(group => {
    if (f.groupSelected?.[group.key]?.all) filters.push( {text:t('filter_key_'+group.key), key: group.key, group: true})
    else {
      group.value.map(tag => {
        if (f.selected[tag]) filters.push({text:t(`tag_${tag}`), key: tag, group: false});
      });
    }
  });
  return filters;
}, [f.groupSelected, f.selected]);

const closeFilter = (filter) => {
  if (filter.group) f.toggleGroup(filter.key);
  else f.toggleTag(filter.key);
}

const animateBeforeLeave = (el) => {
  el.style.width = el.offsetWidth + 'px';
  el.style.height = el.offsetHeight + 'px';
  el.style.top = el.offsetTop + 'px';
  el.style.left = el.offsetLeft + 'px';
}

onBeforeRouteLeave((to, from, next) => {
  // console.log(to, from);
  if(to.name.includes('browse-slug') && to.hash) showModal(to)
  else next();
})

onBeforeRouteUpdate((to, from, next) => {
  if(modal.value) {
    from.meta = {top: 1}
    modal.value = null;
  }
  next();
})

const modalData = computed(() => browse.browse?.[locale.value]?.find(item => item.key === (modal.value||'').toLowerCase()) || null, [locale.value, modal.value]);

const showModal = (to) => {
  modal.value = to.params.slug;
  window.history.pushState(window.history.state, '', (locale.value==='th' ? '/th/' : '/')+`browse/${to.params.slug}`);
}

const closeModal = () => {
  window.history.back();
}
</script>