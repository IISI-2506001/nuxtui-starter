// nuxt.config.js
export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxt/eslint", "@nuxt/ui"],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-01-15",

  nitro: {
    preset: "github-pages",
  },

  app: {
    baseURL: "/nuxtui-starter/",
    buildAssetsDir: "assets",
  },

  runtimeConfig: {
    API_BASE_URL: "",
    API_KEY: "",
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
