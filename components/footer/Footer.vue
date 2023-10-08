<template>
  <div class="w-screen bg-secondary pt-8 mt-16" id="contact">
    <div class="w-full max-w-sm mx-auto px-4 flex flex-col justify-center items-center">
      <h2 class="my-4 text-3xl px-4 font-semibold uppercase">{{ $t('contact_title') }}</h2>
      <FooterContact />
      <div
        class="w-full flex items-center gap-2 my-4 font-medium before:contents:[''] before:w-full before:border-b-2 before:border-text after:contents:[''] after:w-full after:border-b-2 after:border-text">
        {{ $t('or') }}
      </div>
      <div class="w-full flex justify-evenly items-center">
        <BaseTooltip v-for="link in links" :key="link.alt" :text="link.alt">
          <a :href="link.href">
            <Icon :name="link.icon" class="w-8 h-8 text-text/80 hover:text-text hover:scale-110 transition" />
          </a>
        </BaseTooltip>
      </div>

      <div class="w-full mt-8">
        <div class="w-fit mx-auto flex flex-col items-center gap-2 cursor-pointer p-4 group" @click="scrollTop">
          <Icon name="uiw:up" size="2rem" class="group-hover:scale-110 group-hover:-translate-y-2 transition"/>
          <p class="group-hover:-translate-y-1 transition">{{ $t('scroll_top') }}</p>
        </div>
      </div>

      <div class="w-full text-center my-4">
        <p class="text-text/75 font-light">{{ $t('copyright') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const links = [
  { icon: "fa6-brands:github", href: "#", alt: "github" },
  { icon: "fa6-brands:linkedin", href: "#", alt: "linkedin" },
  { icon: "fa6-solid:square-phone", href: "#", alt: "phone call" },
  { icon: "ic:round-email", href: "#", alt: "email" },
]

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

</script>