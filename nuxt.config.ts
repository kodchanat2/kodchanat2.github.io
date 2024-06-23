// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  app: {
    buildAssetsDir: 'src',
    head: {
      meta: [
        { charset: 'utf-8' },
        { property: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: process.env.BASE_URL },
        { property: 'og:image', content: process.env.BASE_URL + '/thumbnail.png' },
        { property: 'twitter:image', content: process.env.BASE_URL + '/thumbnail.png' },
        { property: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: process.env.BASE_URL + '/favicon.ico' },
      ],
      script: [
        {
          innerHTML: process.env.DEV_MODE ? '' : `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${process.env.CLARITY||'jd33997k1e'}");`
        }
      ],
    }
  },
  runtimeConfig: {
    public: {
      hooks: process.env.CONTACT_HOOK,
      base_url: process.env.BASE_URL,
      edge_url: process.env.EDGE_URL,
      img_url: process.env.IMG_URL,
    }
  },
  // devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/color-mode', { classSuffix: '' }],
    ['@pinia/nuxt', { storeDirs: ['~/stores/*'] }],
    'nuxt-icon',
    ['@nuxtjs/google-fonts', {
      download: false,
      families: { 
        'Prompt': [200, 300, 400, 500, 600, 700],
        'Sarabun': [200, 300, 400, 500, 600, 700],
      },
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
    baseUrl: process.env.BASE_URL,
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'th', iso: 'th-TH', file: 'th.json', name: 'ไทย' }
    ],
    defaultLocale: 'en',
    // strategy: "no_prefix",
    lazy: true,
    langDir: 'plugins/locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_configured_locale',
      fallbackLocale: 'en'
    },
  },
})
