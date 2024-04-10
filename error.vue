<template>
  <div class="w-screen h-screen-large flex justify-center items-center">
    not found
  </div>
</template>
<script setup>
// redirect to home
import { useRouter } from 'vue-router';
const router = useRouter();
router.push('/');
</script>