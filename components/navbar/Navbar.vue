<template>
  <nav class="w-full h-navbar flex justify-center items-center relative z-30">
    <div id="nav-bg" class="absolute w-full h-full top-0 left-0 opacity-0 bg-background/70 backdrop-blur" />
    <div class="w-full max-w-screen-lg flex justify-between items-center ml-4 relative">
      <NuxtLink id="nav-title" to="/" class="text-2xl font-bold z-30 hover:text-accent translate-x-full opacity-0">{{
        $t('title_short') }}</NuxtLink>
      <div class="hidden md:flex justify-between items-center">
        <NavbarHighlight class="nav-highlight opacity-0 -translate-x-4" />
        <NavbarSetting />
      </div>
      <div class="md:hidden mr-1">
        <NavbarMenu>
          <NavbarHighlight class="nav-highlight opacity-0 -translate-x-4 pointer-events-none" />
        </NavbarMenu>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.to(['#nav-title', '.nav-highlight', '#nav-bg'], {
    scrollTrigger: {
      trigger: '#hero-title',
      start: '-100% top',
      end: 'bottom top',
      scrub: true,
      // markers: true,
      snap: {
        snapTo: 'labels',
        duration: 0.5,
        delay: 0.2,
        ease: 'power4.out'
      }
    },
    x: 0,
    opacity: 1,
  });
})

</script>