// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Modules: https://nuxt.com/modules
  modules: [
    // https://nuxt.com/modules/graphql-client
    'nuxt-graphql-client',
    // https://nuxt.com/modules/apollo
    '@nuxtjs/apollo',
  ],
  // https://nuxt-graphql-client.web.app/getting-started/quick-start/
  runtimeConfig: {
    public: {
      // TODO 为何这里写成 localhost:1337 会报错？
      // overwritten by process.env.GQL_HOST
      GQL_HOST: process.env.GQL_HOST || 'http://localhost:1337/graphql' 
    }
  },
  // https://apollo.nuxtjs.org/getting-started/quick-start/
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GQL_HOST || 'http://localhost:1337/graphql'
      }
    },
  },
})
