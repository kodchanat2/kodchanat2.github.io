// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    buildAssetsDir: 'src',
  },
  runtimeConfig: {
    public: {
      hooks: process.env.CONTACT_HOOK,
    }
  },
  // devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/color-mode', { classSuffix: '' }],
    '@pinia/nuxt',
    'nuxt-icon',
    ['@nuxtjs/google-fonts', {
      download: false,
      families: { 'Prompt': [200, 300, 400, 500, 600, 700], },
    }],
    'dayjs-nuxt',
    '@hypernym/nuxt-gsap',
  ],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  i18n: {
    vueI18n: 'plugins/locales/i18n.config.ts',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'th', iso: 'th-TH', file: 'th.json', name: 'ไทย' }
    ],
    defaultLocale: 'en',
    strategy: "no_prefix",
    lazy: true,
    langDir: 'plugins/locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_configured_locale',
      fallbackLocale: 'en'
    },
  },
})
