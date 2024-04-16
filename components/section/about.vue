<template>
  <div class="w-screen bg-secondary text-text/80 py-8">
    <div class="w-full max-w-screen-md mx-auto px-2 flex flex-col justify-center items-center">
      <h3 id="about-text" class="px-4">
        <i18n-t keypath="about_msg" tag="span">
          <template #webdev>
            <span class="font-semibold">{{ $t('about_webdev') }}</span>
          </template>
          <template #eyear>
            <BaseTooltip class="px-2" :text="$t('since') + ' ' + workDate.format('DD/MM/YYYY')">
              {{ dayjs.diff(workDate, 'year') }}
              {{ $t('year') }}
            </BaseTooltip>
          </template>
          <template #pyear>
            <BaseTooltip class="px-2" :text="$t('since') + ' ' + expDate.format('DD/MM/YYYY')">
              {{ dayjs.diff(expDate, 'year') }}
              {{ $t('year') }}
            </BaseTooltip>
          </template>
          <template #contact>
            <NuxtLink to="#contact" class="underline">{{ $t('about_contact') }}</NuxtLink>
          </template>
        </i18n-t>
      </h3>

      <div class="w-full py-16 flex gap-4 relative overflow-x-scroll scroll-smooth scrollbar-hide">
        <TransitionGroup name="slide" @after-leave="slideTrigger">
          <div v-for="logo in logos" :key="logo" class="w-16 h-16 shrink-0">
            <img :src="`${imgUrl}/images/awards/${logo.replaceAll('#','')}.webp`" :alt="logo.replaceAll('#','')" class="transition-all duration-300 md:grayscale hover:grayscale-0 hover:scale-110" />
          </div>
        </TransitionGroup>
      </div>

      <BaseLink :to="localePath('/browse?filter=award')" class="ml-auto md:mx-auto px-4 -mt-10 z-10">{{ $t('link_award') }} →</BaseLink>
    </div>
  </div>
</template>

<script setup>
const dayjs = useDayjs();
const workDate = useDayjs('2018-12-13');
const expDate = useDayjs('2012-07-28');
const imgUrl = useRuntimeConfig().public.img_url || '';

const _logos = [
  'toi',
  'posn',
  'ipst',
  'acm',
  'sipa',
  'nsc',
  'nectec',
  'itpe',
  'nstda',
  'startup',
  'kidbright',
  'nstda#',
]
const logos = ref([..._logos]);
const tempLogo = ref(null);

const slideTrigger = ()=> {
  if(tempLogo.value) logos.value.push(tempLogo.value);
  tempLogo.value = logos.value.shift();
}

onMounted(() => {
  slideTrigger();
})
</script>