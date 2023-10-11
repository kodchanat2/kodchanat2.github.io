<template>
  <div class="relative">
    <div
      class="group bg-secondary z-30 relative inline-flex items-center rounded-full cursor-pointer p-1 transition-colors focus:outline-none"
      :class="shown ? '' : ''" @click="toggleMenu">
      <Icon name="ic:baseline-settings" aria-hidden="true" class="w-8 h-8 transition-transform duration-500"
        :class="shown ? 'scale-110 rotate-90' : 'scale-100 rotate-0'" />
    </div>

    <div v-if="shown" class="fixed top-0 left-0 w-screen h-screen-large bg-background/70" @click="toggleMenu"></div>

    <div v-if="shown" class="fixed top-0 left-0 z-20 w-screen bg-secondary">
      <div class="overflow-hidden mt-navbar shadow-line shadow-text/25 py-4">
        <div v-for="item in list" :key="item.name" class="w-full p-3 text-center text-xl font-medium">
          <NuxtLink :to="item.to" class="hover:underline" @click="toggleMenu">
            {{ $t(item.name+'_title') }}
            <Icon v-if="item.page" name="ep:right" />
          </NuxtLink>
        </div>
        <NavbarPreference class="mt-4" :menu="true"/>
        <div class="w-full p-4 text-center text-xl font-light" @click="toggleMenu">
          {{ $t('close') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const shown = useState('show', () => false)
const toggleMenu = () => shown.value = !shown.value

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
  {
    name: 'browse',
    page: true,
    to: '#'
  }
]

</script>