// @ts-check
/** @type {import("@nuxt/types").NuxtConfig} */
const config = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  srcDir: 'src',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/styles/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    meta: {
      name: 'Encryptr',
      description: '🛡️ Next-level encrypting software.',
      author: 'Vitor Neves Gomes Gouveia',
      theme_color: '#4D69A3',
      nativeUI: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  storybook: {
    stories: ['~/**/*.stories.@(js|ts|md|mdx)'],
    port: 6006,
    addons: ['@storybook/addon-essentials', '@storybook/addon-notes'],
    parameters: {
      backgrounds: {
        default: 'white',
        values: [
          { name: 'white', value: '#ff0000' },
          { name: 'gray', value: '#aaaaaa' },
        ],
      },
    },
  },
}

export default config
