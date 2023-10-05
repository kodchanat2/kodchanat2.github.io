<template>
  <div class="w-full h-screen-large flex flex-col justify-around items-center">
    <div/>
    <div class="text-center">
      <h1 class="text-5xl sm:text-6xl font-semibold">{{ $t('title') }}</h1>
      <h2 class="mt-4 text-xl font-light" v-html="$t('alt_title',['<b>','</b>'])"/>
    </div>
    <div class="w-fit p-6 px-8 rounded-xl border-2 border-primary flex justify-center items-center text-xl font-medium cursor-pointer">
      <Icon name="👋" class="mr-2 animate-pulse" size="2rem" /> {{ $t('button_title') }}
    </div>
  </div>
</template>