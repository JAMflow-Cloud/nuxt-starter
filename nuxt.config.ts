export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
