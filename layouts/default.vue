<template>
  <div>
    <Navbar class="sticky top-0" />
    <slot />
    <Footer />
  </div>
</template>
  
<script setup>
import { useRouteStore } from '~/stores/routeStore';
const routeStore = useRouteStore();
const { $gsap } = useNuxtApp();
const head = useLocaleHead({addDirAttribute: true,addSeoAttributes: true});

useHead(head.value);

onMounted(() => {
  $gsap.set('#about-text', {
    opacity: 0,
    y: 50,
  })
  $gsap.to('#about-text', {
    scrollTrigger: {
      trigger: '#about-text',
      start: 'bottom bottom',
      end: 'top center',
      scrub: true,
      // markers: true,
    },
    opacity: 1,
    y: 0,
  })
  setTimeout(() => {
    routeTrigger()
  }, 100);
})

function setRoute(route) {
  // console.log(route);
  routeStore.setRoute(route)
}

function routeTrigger() {
  $gsap.to('#about-text', {
    scrollTrigger: {
      trigger: '#about-text',
      start: 'bottom bottom',
      end: 'top center',
      // markers: true,
      onEnterBack: () => {
        setRoute('home')
      },
      onEnter: () => {
        setRoute('home')
      },
    }
  })
  $gsap.to('#skill',{
    scrollTrigger: {
      trigger: '#skill',
      start: 'top center',
      end: 'bottom center',
      // markers: true,
      onEnterBack: () => {
        setRoute('skill')
      },
      onEnter: () => {
        setRoute('skill')
      },
    }
  })
  $gsap.to('#project',{
    scrollTrigger: {
      trigger: '#project',
      start: 'top center',
      end: 'bottom center',
      // markers: true,
      onEnterBack: () => {
        setRoute('project')
      },
      onEnter: () => {
        setRoute('project')
      },
    }
  })
  $gsap.to('#contact',{
    scrollTrigger: {
      trigger: '#contact',
      start: 'top center',
      end: 'bottom center',
      // markers: true,
      onEnterBack: () => {
        setRoute('contact')
      },
      onEnter: () => {
        setRoute('contact')
      },
    }
  })
}

</script>