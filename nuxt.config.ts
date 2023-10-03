// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/color-mode',{classSuffix: ''}],
    '@pinia/nuxt',
    'nuxt-icon',
    ['nuxt-headlessui', {prefix: 'H'}],
  ],
  i18n: {
    vueI18n: 'plugins/locales/i18n.js',
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
