<template>
  <div>
    <Navbar :home="false" class="sticky top-0" />
    <main class="min-h-[calc(100vh-4rem-3rem)] pt-8 flex justify-center">
      <slot />
    </main>
    <Footer />
  </div>
</template>
  
<script setup>
const head = useLocaleHead({ addDirAttribute: true, addSeoAttributes: true });

useHead(head.value);


</script>