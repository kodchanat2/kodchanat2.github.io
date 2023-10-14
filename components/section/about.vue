<template>
  <div class="w-screen bg-secondary text-text/80 py-8">
    <div class="w-full max-w-screen-md mx-auto px-2 flex flex-col justify-center items-center">
      <h3 class="px-4">
        <span v-html="$t('about_msg_1', ['<b>', '</b>'])" />
        <BaseTooltip class="px-2" :text="$t('since')+' '+workDate.format('DD/MM/YYYY')">
          {{ dayjs.diff(workDate, 'year') }}
          {{ $t('year') }}
        </BaseTooltip>
        <span v-html="$t('about_msg_2')" />
        <BaseTooltip class="px-2" :text="$t('since')+' '+expDate.format('DD/MM/YYYY')">
          {{ dayjs.diff(expDate, 'year') }}
          {{ $t('year') }}
        </BaseTooltip>
        <span v-html="$t('about_msg_3')" />
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