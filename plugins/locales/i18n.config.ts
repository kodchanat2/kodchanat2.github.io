import en from '@/plugins/locales/en.json';
import th from '@/plugins/locales/th.json';

export default defineI18nConfig(()=>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, th },
}))