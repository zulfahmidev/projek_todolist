// ht'@nuxt/image-edge'tps://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-vuefire',
    '@nuxt/image-edge'
  ],

  vuefire: {
    config: {
      apiKey: "AIzaSyDDUGKbxKwCUuokdKHv_I1WdcC8F8rtLZM",
      authDomain: "zoelject10120102.firebaseapp.com",
      projectId: "zoelject10120102",
      storageBucket: "zoelject10120102.appspot.com",
      messagingSenderId: "402485305094",
      appId: "1:402485305094:web:d15cff8cdf35e5c21c4887",
      measurementId: "G-H937Y5EK6N"
    },
    auth: true,
    appCheck: {
      debug: process.env.NODE_ENV !== 'production',
      isTokenAutoRefreshEnabled: true,
      provider: 'ReCaptchaV3',
      key: '6Le6OFAlAAAAAH_pKoBcDYiUP2JNODY9gH6WLnoO',
    },
  }
})
