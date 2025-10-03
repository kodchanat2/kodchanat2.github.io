<template>
  <div class="w-full h-screen-large relative overflow-hidden">
    <div class="w-full h-full relative z-[1] flex flex-col justify-around items-center">
      <div>
        <h1 style="
          font-size: 1px;
          color: #ffffff00;
          position: absolute;
          pointer-events: none;
        ">{{ $t('SEO_title') }}</h1>
      </div>
      <div class="text-center">
        <h2 id="hero-title" class="text-5xl sm:text-6xl font-semibold">{{ $t('title') }}</h2>
        <h2 id="hero-desc" class="mt-4 text-xl font-normal text-primary">
          {{ $rt($tm('alt_title')[0]) }}
          <span class="font-semibold">
            {{ $rt($tm('alt_title')[1]) }}
          </span>
        </h2>
      </div>
      <NuxtLink
        class="w-fit p-6 px-8 rounded-xl border-2 border-primary text-primary bg-background flex justify-center items-center text-xl font-medium cursor-pointer shadow-line shadow-primary transition-all duration-300 hover:scale-110 hover:shadow-none hover:bg-secondary/70"
        to="/browse">
        {{ $t('button_title') }}
      </NuxtLink>
    </div>
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none hero-bg bg-primary/10" />
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.set('#hero-desc', {
    y: -50,
    opacity: 0
  })
  $gsap.to('#hero-desc', {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: 'power4.out',
    delay: 0.5
  })
  $gsap.to('#hero-title', {
    scrollTrigger: {
      trigger: '#hero-title',
      start: '-200% top',
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
    scale: 0.5,
    opacity: 0,
  })
  $gsap.to('.hero-bg', {
    scrollTrigger: {
      trigger: '.hero-bg',
      start: 'top top',
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
    y: '20%',
  })
})
</script>