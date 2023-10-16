<template>
  <div>
    <Navbar class="sticky top-0"/>
    <slot/>
    <Footer/>
  </div>
</template>
  
<script setup>
const { $gsap } = useNuxtApp();

onMounted(()=>{
  $gsap.set('#about-text',{
    opacity: 0,
    y: 50,
  })
  $gsap.to('#about-text',{
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
})

</script>