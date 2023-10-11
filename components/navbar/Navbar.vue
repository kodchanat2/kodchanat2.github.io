<template>
  <nav class="w-full h-navbar bg-background/70 backdrop-blur flex justify-center items-center relative z-30">
    <div class="w-full max-w-screen-lg flex justify-between items-center ml-4">
      <NuxtLink to="/" class="text-2xl font-bold z-30">{{ $t('title_short') }}</NuxtLink>
      <div class="hidden md:flex justify-between items-center">
        <NavbarSetting />
      </div>
      <div class="md:hidden mr-1">
        <NavbarMenu />
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>