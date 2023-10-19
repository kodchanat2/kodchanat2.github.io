<template>
  <div class="relative">
    <div class="group flex justify-between items-center z-30 relative cursor-pointer focus:outline-none"
      :class="shown ? '' : ''" @click="toggleMenu">
      <slot />
      <div class=" bg-secondary rounded-full p-1 transition-colors">
        <Icon :name="shown ? 'mdi:close-thick' : 'ic:baseline-settings'" aria-hidden="true"
          class="w-8 h-8 transition-transform duration-500 delay-100"
          :class="shown && !closing ? 'scale-110 rotate-90' : 'scale-100 rotate-0'" />
      </div>
    </div>

    <div v-if="shown" class="fixed top-0 left-0 w-screen h-screen-large bg-background/70 menu-mask"
      :class="closing ? 'reverse' : ''" @click="toggleMenu"></div>

    <div class="fixed top-0 left-0 z-20 w-screen overflow-hidden" :class="[!shown && 'hidden']">
      <div
        class="absolute right-0 top-0 bg-secondary rounded-full w-full aspect-square transition-transform expand-menu-animate"
        :class="[closing && 'reverse']"></div>
      <div class="overflow-hidden mt-navbar relative py-4 fade-down-enter-active fade-down-animate"
        :class="[closing && 'fade-down-leave-active fade-down-leave-to']">
        <div v-for="(item, index) in list" :key="item.name" class="w-full p-3 text-center text-xl font-semibold">
          <NuxtLink :to="item.to" class="uppercase" :class="routeStore.route==item.name&&'text-primary'" @click="toggleMenu">
            {{ $t(item.name + '_title') }}
            <Icon v-if="item.page" name="ep:right" />
          </NuxtLink>
        </div>
        <NavbarPreference class="mt-4" :menu="true" />
        <!-- <div class="w-full absolute pt-8 text-center text-xl font-light pointer-events-none">
            {{ $t('close') }}
          </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouteStore } from '~/stores/routeStore';

const routeStore = useRouteStore();
const shown = useState('show', () => false)
const closing = useState('closing', () => false)
let timer = null;

const toggleMenu = () => {
  if (!shown.value) {
    document.body.style.overflow = 'hidden';
    return shown.value = true;
  }

  clearTimeout(timer);
  closing.value = true;
  timer = setTimeout(() => {
    document.body.style.overflow = 'auto';
    closing.value = false;
    shown.value = false;
  }, 500);
}

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
  // {
  //   name: 'browse',
  //   page: true,
  //   to: '#'
  // }
]

</script>