import webpack from 'webpack';

export default {
  mode: 'universal',
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport',
        content: 'width=device-width, initial-scale=1' },
      { hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.checkout.com/js/framesv2.min.js' }
      // { src: 'https://x.klarnacdn.net/kp/lib/v1/api.js' }
    ]
  },
  loading: { color: '#fff' },
  router: {
    middleware: ['checkout']
  },
  buildModules: [
    // to core
    '@nuxt/typescript-build',
    'nuxt-composition-api',
    ['@vue-storefront/nuxt', {
      // @core-development-only-start
      coreDevelopment: true,
      // @core-development-only-end
      useRawSource: {
        dev: [
          '@vue-storefront/virtocommerce',
          '@vue-storefront/core'
        ],
        prod: [
          '@vue-storefront/virtocommerce',
          '@vue-storefront/core'
        ]
      }
    }],
    // @core-development-only-start
    ['@vue-storefront/nuxt-theme', {
      apiClient: '@vue-storefront/virtocommerce-api',
      composables: '@vue-storefront/virtocommerce'
    }],
    // @core-development-only-end
    ['@vue-storefront/virtocommerce/nuxt', {
      disableGenerateTokenMiddleware: false,
      api: {
        uri: 'https://api.europe-west1.gcp.commercetools.com/test-project-abc/graphql',
        authHost: 'https://auth.europe-west1.gcp.commercetools.com',
        projectKey: 'test-project-abc',
        clientId: 'lYHspZfMf_HT0zKkNdz5o4Wl',
        clientSecret: 'd-guZvj-Stybq1pmKWtYVSNE2uDljm9N',
        forceToken: true,
        scopes: [
          'manage_project:test-project-abc',
          'create_anonymous_token:test-project-abc',
          'view_products:test-project-abc',
          'view_published_products:test-project-abc'
        ]
      }
    }]
  ],
  modules: [
    'nuxt-i18n',
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt'
  ],
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ],
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': JSON.stringify({
          // eslint-disable-next-line global-require
          version: require('./package.json').version,
          lastCommit: process.env.LAST_COMMIT || ''
        })
      })
    ]
  },

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.js',
        iso: 'en'
      },
      {
        code: 'de',
        file: 'de.js',
        iso: 'de'
      }
    ],
    defaultLocale: 'en',
    lazy: true,
    seo: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'en'
    },
    detectBrowserLanguage: {
      cookieKey: 'vsf-locale',
      alwaysRedirect: true
    }
  }
};
