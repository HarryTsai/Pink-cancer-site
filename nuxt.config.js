export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '粉紅乳癌月｜當疫情變成生活，找回乳癌女子的日常。',
    htmlAttrs: {
      lang: 'zh-tw',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '乳癌一直是女性癌症中發生率的第一名，每年的十月是國際乳癌防治月，提醒所有女性朋友，在日常生活中要多關心自己的身體，而定期篩檢就是乳癌病友日常的生活風景，但這兩年來我們不斷受到新冠肺炎COVID-19 的影響，罹患乳癌的朋友們該注意什麼呢？',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'keywords',
        content: '乳癌,女性癌症,十月國際乳癌月,COVID-19 ,我們都有病',
      },
      {
        property: 'og:title',
        content: '粉紅乳癌月｜當疫情變成生活，找回乳癌女子的日常。',
      },
      {
        property: 'og:url',
        content: 'https://aboutsick.com/pinkmonth2021',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/preview.jpg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
