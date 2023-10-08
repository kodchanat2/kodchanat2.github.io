<template>
  <div class="relative w-full">
    <textarea :id="id" v-bind="$attrs"
      class="block rounded-lg p-3 pb-2 pt-4 w-full text-text bg-background/90 border-0 border-x-0 border-b-2 border-text/10 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
      placeholder="" ></textarea>
    <label :for="id"
      class="absolute text-text/50 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] left-3 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
      {{label}}</label>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
})
</script>