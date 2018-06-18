module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'GRYGIERCZYK  & BOITELLE',
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
    { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', size: '96x96', href: '/favicon-96x96.png' },
    { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon-16x16.png' }
    ]
  },
  // TO DO IMPLEMENT FAVICON FOR ALL DEVICES
  // <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
  // <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
  // <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
  // <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
  // <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
  // <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
  // <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
  // <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
  // <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
  // <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
  // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  // <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
  // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  // <link rel="manifest" href="/manifest.json">
  // <meta name="msapplication-TileColor" content="#ffffff">
  // <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
  // <meta name="theme-color" content="#ffffff">
  
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Add css
  */
  css: [
  'bulma/css/bulma.css',
  "~/assets/css/styles.css"
  ],
  router: { base: '' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['~/assets/js/main.js'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
