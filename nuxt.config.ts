export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  devtools: { enabled: true },

  css: [
    'assets/css/main.css',
  ],

  future: {
    compatibilityVersion: 4,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
