<template>
  <div class="w-full flex flex-col p-4 rounded-lg border-2 border-secondary bg-secondary/50">
    <div class="mb-2 w-full text-center relative">
      <p class="text-lg font-medium">{{ $t('filter') }}</p>
      <div 
        class="absolute right-0 top-1/2 -translate-y-1/2 p-2 py-1 rounded-md w-fit border border-primary/40 cursor-pointer hover:bg-background group"
        @click="f.toggleSort"
      >
        <Icon :name="f.sortNewest ? 'mdi:sort-clock-descending-outline' : 'mdi:sort-clock-ascending-outline'" class="text-xl transition group-hover:scale-110 group-hover:text-accent" />
      </div>
    </div>
    <div class="w-fit flex flex-col gap-2 ml-8">
      <!-- checkbox -->
      <div v-for="group in filters" :key="group.key" class="w-full flex flex-col gap-1">
        <label class="flex items-center group gap-2 hover:font-medium cursor-pointer" @click="f.toggleGroup(group.key)">
          <Icon 
            :name="f.groupSelected[group.key]?.all ? 'mdi:checkbox-marked': f.groupSelected[group.key]?.some ? 'mdi:checkbox-indeterminate-outline' : 'mdi:checkbox-blank-outline'" 
            class="text-primary transition group-hover:scale-110" 
          />
          <!-- <input type="checkbox" /> -->
          <span>{{ $t('filter_key_'+group.key) }}</span>
        </label>
        <div v-for="tag in (group.value||[])" :key="tag" class="w-full flex flex-col ml-5 gap-1">
          <label class="flex items-center group gap-2 font-light hover:font-normal cursor-pointer" @click="f.toggleTag(tag)">
            <Icon 
              :name="f.selected[tag] ? 'mdi:checkbox-marked' : 'mdi:checkbox-blank-outline'" 
              class="text-primary transition group-hover:scale-110" 
            />
            <!-- <input type="checkbox" /> -->
            <span>{{ $t('filter_key_'+tag) }}</span>
          </label>
        </div>
      </div>
    </div>
    <div class="w-full h-px bg-text/20 mt-4" />
    <p class="w-full text-center text-base font-normal mt-2 underline text-primary cursor-pointer hover:text-accent" @click="f.clearSelected">{{ $t('filter_clear') }}</p>
  </div>
</template>

<script setup>
import { useFilterStore } from '~/stores/filterStore';
const { $const } = useNuxtApp();

const f = useFilterStore();
const filters = computed(() => $const.tag.groups);

</script>