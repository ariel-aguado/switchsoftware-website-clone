const isDev = process.env.NODE_ENV === 'development'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    // 'nuxt-security',
  ],
  nitro: {
    routeRules: {
      '/': isDev ? {} : { static: true },
    },
  },
  css: ['assets/styles/main.css'],
})
