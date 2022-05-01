const locales = [
  {
    code: 'en',
    file: 'en.js',
    iso: 'en',
  },
  {
    code: 'it',
    file: 'it.js',
    iso: 'it',
  },
  {
    code: 'fr',
    file: 'fr.js',
    iso: 'fr',
  },
  {
    code: 'pl',
    file: 'pl.js',
    iso: 'pl',
  },
]

exports.locales = locales

module.exports = {
  locales,
  strategy: 'prefix',
  defaultLocale: 'en',
  seo: false,
  lazy: true,
  langDir: 'lang/',
  vueI18n: {
    fallbackLocale: 'en',
  },
  baseUrl: process.env.URL,
  rootRedirect: null,
  detectBrowserLanguage: false,
}
