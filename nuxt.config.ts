// https://nuxt.com/docs/api/configuration/nuxt-config
const SITE_URL = "/microcms-nuxt/";

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    ssr: {
      noExternal: [/\.css$/, /^vuetify/],
    },
  },
  app: {
    baseURL: SITE_URL,
    cdnURL: `https://isystk.github.io${SITE_URL}`,
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
  modules: ["nuxt-microcms-module"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
});
