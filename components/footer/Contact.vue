<template>
  <form class="w-full relative flex flex-col text-black gap-2" @submit.prevent="handleSubmit">
    <BaseInput v-model="from" pattern=".*\S+.*" :label="$t('from') + '*'" id="from" required />
    <BaseTextarea v-model="message" :label="$t('message') + '*'" id="message" class="h-32 resize-none" required />
    <BaseInput v-model="contact" :label="$t('contact_back')" id="contact" :placeholder="$t('contact_back_eg')" />
    <button type="submit" :disabled="isLoading"
      class="w-full mt-1 p-3 bg-primary text-background text-lg font-medium rounded-lg transition hover:bg-primary/80 disabled:bg-text/20">
      {{ isLoading ? $t('sending_message') : $t('send_message') }}
    </button>

    <div
      class="absolute w-full h-full top-0 left-0 justify-center items-center backdrop-blur-sm scale-105 z-[1] transition duration-500 flex" :class="[!isSent&&'translate-y-2 opacity-0 pointer-events-none']">
      <div class="px-4 pb-8 rounded-3xl bg-background/90 text-text flex flex-col justify-center items-center shadow-line shadow-text/25 text-center">
        <Icon name="mdi:email-fast-outline" size="8rem" class="text-accent transition delay-300 duration-1000" :class="[!isSent&&'opacity-0 -translate-x-10']" />
        <p class="text-lg mb-1 font-medium">{{ $t('message_sent') }}</p>
        <p class="text-sm font-light">{{ $t('message_sent_description') }}</p>
      </div>
    </div>
  </form>
</template>

<script setup>
const message = ref('');
const from = ref('');
const contact = ref('');
const isLoading = ref(false);
const isSent = ref(false);
const config = useRuntimeConfig().public;
const { t } = useI18n();

async function handleSubmit() {
  if (isLoading.value || !message.value || !from.value) return;
  isLoading.value = true;

  const data = {
    message: message.value,
    from: from.value.trim(),
    contact: contact.value.trim(),
  }
  // console.log(data);
  
  try {
    await $fetch(config.hooks, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    })
    isSent.value = true;
  } catch (error) {
    alert(t('message_sent_failed'));
  } finally {
    isLoading.value = false;
  }

}
</script>