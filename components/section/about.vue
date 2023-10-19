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

      <!-- <BaseLink to="#" class="mt-4 ml-auto p-4">{{ $t('link_award') }} →</BaseLink> -->
    </div>
  </div>
</template>

<script setup>
const dayjs = useDayjs();
const workDate = useDayjs('2018-12-13');
const expDate = useDayjs('2012-07-28');

</script>