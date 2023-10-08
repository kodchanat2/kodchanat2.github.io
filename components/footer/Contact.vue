<template>
  <div class="w-full flex flex-col text-black gap-2">
    <BaseTextarea :label="$t('message')" id="message" class="h-32 resize-none"/>
    <BaseInput :label="$t('from')" id="from" />
    <BaseInput :label="$t('contact_back')" id="contact" />
  <button class="w-full mt-1 p-3 bg-primary text-background text-lg font-medium rounded-lg transition hover:bg-primary/80">
    {{ $t('send_message') }}
  </button>
</div></template>