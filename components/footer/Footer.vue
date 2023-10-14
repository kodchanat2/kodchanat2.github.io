<template>
  <div class="w-screen bg-gradient-to-t from-secondary/50 via-secondary to-secondary pt-8 mt-16" id="contact">
    <div class="w-full max-w-sm mx-auto px-4 flex flex-col justify-center items-center">
      <h2 class="my-4 text-3xl px-4 font-semibold uppercase">{{ $t('contact_title') }}</h2>
      <FooterContact />
      <div
        class="w-full flex items-center gap-2 my-4 font-medium before:contents:[''] before:w-full before:border-b-2 before:border-text after:contents:[''] after:w-full after:border-b-2 after:border-text">
        {{ $t('or') }}
      </div>
      <div class="w-full flex justify-evenly items-center">
        <BaseTooltip v-for="link in links" :key="link.alt" :text="link.alt">
          <NuxtLink :href="link.href" target="_blank">
            <Icon :name="link.icon" class="w-8 h-8 text-text/80 hover:text-text hover:scale-110 transition" />
          </NuxtLink>
        </BaseTooltip>
      </div>

      <div class="w-full mt-8">
        <NuxtLink class="w-fit mx-auto flex flex-col items-center gap-2 cursor-pointer p-4 group" :to="$route.path">
          <Icon name="uiw:up" size="2rem" class="group-hover:scale-110 group-hover:-translate-y-2 transition"/>
          <p class="group-hover:-translate-y-1 transition">{{ $t('scroll_top') }}</p>
        </NuxtLink>
      </div>

      <div class="w-full text-center my-4">
        <p class="text-text/75 font-light">{{ $t('copyright') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const links = [
  { icon: "fa6-brands:github", href: "https://github.com/kodchanat2", alt: "github" },
  { icon: "fa6-brands:linkedin", href: "https://www.linkedin.com/in/kodchanat2", alt: "linkedin" },
  { icon: "fa6-solid:square-phone", href: "tel:+66822740014", alt: "phone call" },
  { icon: "ic:round-email", href: "mailto:kodchanat2@gmail.com", alt: "email" },
]

</script>